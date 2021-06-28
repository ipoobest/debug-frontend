import { EventData } from 'web3-eth-contract';
import axios from 'axios';
import { JrepoNetwork } from './jrepo-network';
import { Jrepo } from './index';
import { ContractName } from '../types/contracts';
import { toChunks } from '../helpers';
import { getContract } from '../blockchain/contract-helpers';

export type ReaderOption = { fromBlock: number; toBlock: number | 'latest' };

class EventReader {
  private jrepo: JrepoNetwork;
  constructor() {
    this.jrepo = Jrepo;
  }

  public getPastEventsInChunks(
    contractName: ContractName,
    eventName: string,
    filter: any = undefined,
    options: ReaderOption = {
      fromBlock: 0,
      toBlock: 'latest',
    },
    blockChunkSize: number = 50000,
  ) {
    let finished = false;
    let cancel = () => {
      finished = true;
    };

    const promise: Promise<{
      events: EventData[];
      fromBlock: number;
      toBlock: number;
    }> = new Promise(async (resolve, reject) => {
      const run = async () => {
        const blockNumber = await this.getBlockNumber();
        const start =
          options.fromBlock || getContract(contractName).blockNumber;
        const end =
          options?.toBlock === 'latest'
            ? blockNumber
            : options.toBlock || blockNumber;

        const chunks = toChunks(start, end, blockChunkSize);

        if (!chunks) {
          return [];
        }

        const events: EventData[] = [];
        let lastBlock = start;

        for (let i = 0; i < chunks.length; i++) {
          const [fromBlock, toBlock] = chunks[i];
          const result = await this.getPastEvents(
            contractName,
            eventName,
            filter,
            {
              ...options,
              fromBlock,
              toBlock,
            },
          );
          events.push(...result);
          lastBlock = toBlock;
        }

        return {
          events,
          fromBlock: start,
          toBlock: lastBlock,
        };
      };

      run()
        .then(results => resolve(results))
        .catch(reject);

      // When consumer calls `cancel`:
      cancel = () => {
        // In case the promise has already resolved/rejected, don't run cancel behavior!
        if (finished) {
          return;
        }
        reject();
      };

      // If was cancelled before promise was launched, trigger cancel logic
      if (finished) {
        // (to avoid duplication, just calling `cancel`)
        cancel();
      }
    })
      // After any scenario, set `finished = true` so cancelling has no effect
      .then((resolvedValue: any) => {
        finished = true;
        return resolvedValue;
      })
      .catch(err => {
        finished = true;
        return err;
      });

    return { promise, cancel };
  }

  public getPastEventsInChunksPromise(
    contractName: ContractName,
    eventName: string,
    filter: any = undefined,
    options: ReaderOption = {
      fromBlock: 0,
      toBlock: 'latest',
    },
    blockChunkSize: number = 50000,
  ) {
    return this.getPastEventsInChunks(
      contractName,
      eventName,
      filter,
      options,
      blockChunkSize,
    ).promise;
  }

  public async getLogs(contractName: ContractName, eventName: string) {}

  public async getPastEvents(
    contractName: ContractName,
    eventName: string,
    filter: any = undefined,
    options: ReaderOption = { fromBlock: 0, toBlock: 'latest' },
  ) {
    console.log('contractName', contractName);
    console.log('eventName', eventName); //topic0
    console.log('filter', filter);
    console.log('option block', options);
    const _events: any = this.getHistory();
    console.log('_events 1 :', _events);

    try {
      // console.log('_events', _events);
      const _events = await this.jrepo.databaseContracts[
        contractName
      ].getPastEvents(eventName, {
        ...options,
        ...{ filter },
      });
      //TODO (1) call bacscan api
      let events: EventData[] = [];
      for await (let e of _events) {
        const blockNumber = (e as any).blockNumber;
        console.log('block number', blockNumber);
        const blockData: any = await this.jrepo
          .getWeb3()
          .eth.getBlock(blockNumber);
        console.log('blockData', blockData);
        const eventDate = blockData.timestamp * 1000;

        console.log('eventDate', eventDate);

        const evt: any = {
          ...(e as {}),
          returnValues: (e as any).returnValues,
          event: (e as any)?.event,
          eventDate,
        };
        events.push(evt);
      }
      return events;
    } catch (e) {
      console.log('e:', e);
      return [];
    }
  }

  public async getHistory() {
    axios
      .get(
        'https://api.bscscan.com/api?module=logs&action=getLogs&address=0xf263906c77C64f8426dEa674891c80d894880dDA&topic0=0x6349c1a02ec126f7f4fc6e6837e1859006e90e9901635c442d29271e77b96fb6&topic0_1_opr=and&topic1=0x000000000000000000000000d124e1E63F855E4cbcC4812C1a9a13EdC0922143&apikey=S2Y1B6ZXWXQJMIG3ZXDJM54T95TG753M3Z',
      )
      .then(res => {
        console.log('getHistory', res.data);
        return res.data;
      })
      .catch(e => {
        console.log(e);
      });
  }

  protected async getBlockNumber() {
    return await this.jrepo.getWeb3().eth.getBlockNumber();
  }
}

export const eventReader = new EventReader();
