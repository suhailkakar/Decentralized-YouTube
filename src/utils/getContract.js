import ContractAbi from "../artifacts/contracts/OurTube.sol/OurTube.json";
import { ethers } from "ethers";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(
    "YOUR_CONTRACT_ADDRESS",
    ContractAbi.abi,
    signer
  );
  console.log(contract);
  return contract;
}
