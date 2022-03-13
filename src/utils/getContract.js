import ContractAbi from "../artifacts/contracts/OurTube.sol/OurTube.json";
import { ethers } from "ethers";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(
    "0x2ebF35779453c884b32676f97Af6d2f6D68c9E89",
    ContractAbi.abi,
    signer
  );
  console.log(contract);
  return contract;
}
