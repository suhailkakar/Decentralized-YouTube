<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/suhailkakar/Decentralized-YouTube">
    <img src="https://raw.githubusercontent.com/suhailkakar/Decentralized-YouTube/version-1/logo.png" alt="Logo" width="110" height="80">
  </a>

<h3 align="center">OurTube — It is YouTube but decentralized</h3>

</div>

## About The Project

[![Ourtube][product-screenshot]](https://twitter.com/suhailkakar)

OurTube is a YouTube Clone built on top of Polygon network and The Graph, that allows users to create, share and watch videos, without worrying about their privacy.

> This is the version 2.0 of this applications, you can find the first verion [here](https://github.com/suhailkakar/Decentralized-YouTube/tree/version-1)

### Built With

- Frontend framework: Next.js
- Smart contracts: Solidity
- Ethereum web client library: Ethers.js
- File storage: IPFS
- Querying data: The Graph
- CSS Framework: TailwindCSS
- Ethereum development environment: Hardhat
- Layer 2 blockchain: Polygon
- Video Infrastructure: Livepeer


<!-- GETTING STARTED -->

## Getting Started

To get this application up and and running on your local machine follow these simple steps.

### Prerequisites

You need to have Node.js, NPM and hardhat installed on your computer, before running this project.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/suhailkakar/Decentralized-YouTube
   ```
2. Install NPM packages

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```
3. Create an `.env` file and get an API key from Livepeer studio, Web3 Storage and Imagekit. 
   ```sh
   PRIVATE_KEY="156a3ffca59392a7c7139d2a4576eb8b736b60a8a986a776b5f9f0970285a4f7"
   NEXT_PUBLIC_LIVEPEER_KEY="f953aa45-5454-4d14-9104-b5a9f96d8189"
   NEXT_PUBLIC_WEB3_STORAGE_KEY=
   NEXT_PUBLIC_IMAGEKIT_ID="onboard"
   ```
4. Compile the smart contract
   ```sh
   npx hardhat compile
   ```
5. Deploy the smart contract
6. Get your contract address and paste in on `constants/index.ts`

7. Deploy subgraph in `indexer` directory by following steps in `indexer/README.md` (optional, since it is already deployed in hosted service)

8. Get subgraph query endpoint after deployment and update it in `constants/index.t`

9. Run the app

   ```sh
   npm start
   ```


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

This project is an open source software licensed under the MIT License

[product-screenshot]: https://radicle.community/uploads/default/original/2X/1/1275b4e842a315e9211c8905c16a34116493c301.jpeg
