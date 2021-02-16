import { RevertInstructionError } from 'web3-core-helpers';
import { JrepoNetwork } from './jrepo-network';
import { Jrepo } from './index';
import { ContractName } from '../types/contracts';

class ContractReader {
  private jrepo: JrepoNetwork;

  constructor() {
    this.jrepo = Jrepo;
  }

  /**
   * Call contract and return response string or revert error
   * @param contractName
   * @param methodName
   * @param args
   */
  public async call<T = string | RevertInstructionError>(
    contractName: ContractName,
    methodName: string,
    args: Array<any>,
  ): Promise<T> {
    return this.jrepo.contracts[contractName].methods[methodName](
      ...args,
    ).call();
  }
}

export const contractReader = new ContractReader();
