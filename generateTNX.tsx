import ethers from 'ethers';

async function GenerateSendTxs(
  _sendAmount: any,
  recipientAddress: string,
  privateKey: string,
): Promise<string> {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/b863ead591d54e77be1db79ef34797a3',
  );

  const wallet = new ethers.Wallet(privateKey, provider);
  const transaction = {
    to: recipientAddress,
    value: ethers.utils.parseEther(_sendAmount),
  };

  const tx = await wallet.sendTransaction(transaction);
  const receipt = await tx.wait();
  const txHash = receipt.transactionHash;

  console.log('txHash: ', txHash);

  return txHash;
}

export default GenerateSendTxs;
