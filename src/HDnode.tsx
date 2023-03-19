import ethers from 'ethers';

function restoreHDNode(mnemonic: string) {
  return ethers.utils.HDNode.fromMnemonic(mnemonic);
}
let mnemonic =
  'manage object assault idea unusual luggage dog title little paper nurse violin';

console.log(restoreHDNode(mnemonic));
