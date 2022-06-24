#### OurTube Subgraph

#### Steps:

1. Compile and deploy contract
2. Update `abis/OurTube.json` file with abi of deployed contract
3. Update `subgraph.yaml` with contract address and startBlock and any event changes
4. Update `mappings.ts` logic if any changes
5. Create new subgraph in hosted service and copy subgraph slug
6. Generate types
7. Build subgraph
8. Authorize graph cli for deployment using token
9. update deploy script in `package.json` with your subgraph slug
10. Deploy subgraph

```
yarn install
npx hardhat compile
npx hardhat deploy --network mumbai
yarn codegen

yarn build

graph auth https://api.thegraph.com/deploy/ <Your account's access token not subgraph's token>

yarn deploy
```
