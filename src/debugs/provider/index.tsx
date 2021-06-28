import React from 'react';
import { currentChainId, readNodes } from '../../utils/classifiers';
import Web3 from 'web3';

export function ProviderDebug() {
  // const nodeUrl = readNodes[currentChainId];
  const nodeUrl = 'wss://bsc-ws-node.nariox.org:443';
  console.log('rpcUrl in debuger', nodeUrl);

  const web3Provider = new Web3.providers.WebsocketProvider(nodeUrl, {
    reconnectDelay: 10,
  });
  console.log('check web3 provider', web3Provider);

  const web3 = new Web3(web3Provider);
  console.log('web3 instance', web3);

  async function getBlock() {
    // await web3Provider.getBlock();
    const chainId = await web3.eth.getChainId();
    const block = await web3.eth.getBlock('latest');

    console.log('chainId, block : ', chainId, block);
  }

  return (
    <div>
      <p>tes st</p>
      <button onClick={getBlock}>getBLock</button>
    </div>
  );
}
