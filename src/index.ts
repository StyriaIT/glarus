import { BlockChain } from './blockchain'

const blockchain = new BlockChain(4)
const blockNumber = 10

let chain = blockchain.chain

for (let i = 1; i <= blockNumber; i++) {
    const block = blockchain.createBlock(`Block ${i}`)
    const mineInfo = blockchain.mineBlock(block)
    
    chain = blockchain.pushBlock(mineInfo.minedBlock)
}

console.log('--- GENERATED CHAIN ---\n')
console.log(chain)