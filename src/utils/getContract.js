import ContractAbi from "../artifacts/contracts/OurTube.sol/OurTube.json";
import { ethers } from "ethers";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(
    "0xf6F03b0837569eec33e0Af7f3F43B362916e5de1",
    ContractAbi.abi,
    signer
  );
  console.log(contract);
  return contract;
}
