<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/suhailkakar/Decentralized-YouTube">
    <img src="logo.png" alt="Logo" width="110" height="80">
  </a>

<h3 align="center">OurTube — It is YouTube but decentralized</h3>

</div>

## About The Project

[![Ourtube][product-screenshot]](https://twitter.com/suhailkakar)

OurTube is a YouTube Clone built on top of Polygon network and The Graph, that allows users to create, share and watch videos, without worrying about their privacy.

### Built With

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Solidity](https://soliditylang.org/)
- [Polygon](https://polygon.technology/)
- [The Graph](https://thegraph.com/en/)


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

3. Compile the smart contract
   ```sh
   npx hardhat compile
   ```
4. Deploy the smart contract
5. Get your contract address and paste in on `getContract.js`

6. Deploy subgraph in `indexer` directory by following steps in `indexer/README.md` (optional, since it is already deployed in hosted service)

7. Get subgraph query endpoint after deployment and update it in `src/index.js`

    ```js
    const client = new ApolloClient({
      uri: "YOUR_SUBGRAPH_LINK_HERE", // <-- Update this
      cache: new InMemoryCache(),
    });
    ```

8. Run the app

   ```sh
   npm start
   ```

### Roadmap 
- [X] Login with Wallet
- [X] Upload functionality 
- [X] Search and filter functionality
- [ ] Channel page 
- [ ] Subscribing to channel
- [ ] Commenting on videos
- [ ] Support for Audio files


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
