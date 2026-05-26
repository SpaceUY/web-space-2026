---
title: "Wallet Connections"
description: "As web3 ecosystems continue to grow and evolve, digital wallets have become indispensable to interact with decentralized applications (dApps). This article explores wallet types, web3 libraries, and SDKs for seamless connection."
publishedAt: 2023-06-06
author: juan-manuel-sobral
category: "Blockchain Trends"
tags: ["blockchain-basics", "web3-infrastructure"]
readTime: 3
cover: "/images/content/hSDllB1d1JjC9oNH7hkkChHjq8.png"
takeaways:
  - Digital wallets are essential infrastructure for web3 ecosystems, enabling secure asset management and dApp interaction
  - Multiple wallet connection approaches exist (browser extensions, mobile wallets, JavaScript libraries)
  - Five primary non-custodial wallet types serve different security and convenience needs
  - SDKs like RainbowKit, Torus, and Web3Modal streamline wallet integration with improved user experience
  - RainbowKit offers developers rapid dApp development through simplified wallet connection setup
---

## Summary

As web3 ecosystems continue to grow and evolve, digital wallets have become indispensable to interact with decentralized applications (dApps) and manage assets on the blockchain. Current solutions for web3 wallet connections, however, are often impractical – users might end up switching between various wallet types and browsers, which can be confusing and inconvenient.

This article aims to address some of the aforementioned challenges by proposing a new approach, one that leverages the advantages of browser extensions and mobile wallets. The combination of these two technologies can provide a more secure and user-friendly solution across various dApps and web3-enabled platforms.

## Introduction

The emergence of web3 has led to the creation of digital assets that require secure storage and management. One of the most critical components of that ecosystem is therefore the wallet, which also allows users to send and receive crypto assets.

Wallet connections in web3 are characterized by different approaches and technologies. One of the most popular are browser extensions, which connect users' wallets directly to websites and dApps. Another approach involves mobile wallets, which can be connected to dApps through QR codes. There are also web3.js and ethers.js libraries, which provide JavaScript APIs for interacting with web3-enabled wallets.

Even with the variety of wallet connectors available, significant challenges and limitations remain. What's more, there is a need for further research and development in areas such as wallet key management and recovery, as well as user education and awareness.

## Wallets Explained

A wallet is a software application that serves as the primary interface between users and blockchains. Wallets control access to a user's holdings while managing keys and addresses, tracking balances, and creating and signing transactions. Additionally, some Ethereum wallets can also interact with smart contracts, such as ERC-20 tokens.

In short, a crypto wallet is a tool used to interact with a blockchain network. Most come in software form, which makes them easy to use. Depending on the network's characteristics, a wallet may be **hot** or **cold**.

**Hot wallets**, which are always connected to the internet, are used for frequent transactions. Hot wallets are convenient and user-friendly, but are also more vulnerable to hacking and other security contingencies. A **cold wallet**, on the other hand, operates without an internet connection and is used for storing private keys offline. Cold wallets offer a higher level of security than hot wallets but can be less practical to use.

Both cold and hot wallets can be either custodial or non-custodial. A custodial wallet is one in which a third-party service provider holds the user's private keys on their behalf. In this case, the user relies on the service provider to guard their funds. A non-custodial wallet is one in which the user retains control of their private keys.

There are five main types of non-custodial wallets:

- **Desktop wallets** are installed on a computer and offer high security because they store private keys locally. Examples include Exodus and Atomic Wallet.
- **Mobile wallets** are installed on a mobile device and offer convenience and accessibility. They can be either hot (connected to the internet) or cold (offline). Examples include Trust Wallet and Mycelium.
- **Hardware wallets** are physical devices that store private keys offline and are considered the most secure option for storing crypto assets. Examples include Trezor and Ledger.
- **Paper wallets** are a form of cold storage where the private keys are printed on paper and stored offline. They offer a high level of security but can be vulnerable to physical damage or loss.
- **Web wallets** are online wallets that allow users to access their crypto assets through a web browser. They are convenient but can be vulnerable to malicious behavior. Examples include MyEtherWallet and MetaMask.

Each type has its strengths and weaknesses. Users should carefully consider their needs and preferences when choosing a wallet.

## Web3 Libraries

Web3 libraries are programming libraries focused on web3 development. They are collections of non-volatile resources that developers can use for consistent and more user-friendly coding of scripts that in some way interact with blockchain networks. These resources might include configuration and support data, documentation, message templates, pre-written code and subroutines, classes, values or type specifications, and more.

Ethereum remains the leading programmable blockchain and, therefore, the heart of web3 development. Plus, many other blockchains follow Ethereum's lead by being EVM-compatible. This also means they can use the same development tools. As such, most web3 libraries are Ethereum-oriented. However, a web3 library can target any other blockchain network (private or public) and any programming language.

Wallets may be connected to a blockchain using JavaScript libraries, which provide developers with the necessary tools to perform transactions such as sending or receiving digital assets, interacting with smart contracts and accessing blockchain data. Other popular libraries that developers use to interact with blockchains are:

- **Web3.js:** Ethereum compatible. Allows users to send transactions and read data from smart contracts, among other features.
- **Ethers.js:** Ethereum compatible. Provides a simple and consistent API for interacting with smart contracts and sending transactions.
- **Blockcore:** For building blockchain applications. It can be used to interact with various blockchain networks, including Bitcoin and Ethereum.
- **Hyperledger Fabric SDK:** For building applications on the Hyperledger Fabric blockchain. It provides APIs for interacting with the Fabric network, including creating and managing channels, installing and instantiating chaincodes, and more.
- **Chain.js:** For building blockchain applications. It provides tools for interacting with various blockchain networks, including Bitcoin and Ethereum.

## SDKs with User Interface

Rainbow Kit, Torus SDK and Web3Modal are three software development kits (SDKs) that, while connecting a wallet to a dApp, also have UIs with different functionalities. They allow users to interact with dApps without copying and pasting wallet addresses or managing private keys manually.

When users visit a dApp that has integrated any of these SDKs, they will generally be prompted to connect their wallet. Once the user has selected their wallet provider and granted permission, the SDK will retrieve the user's Ethereum address and private key and use these credentials to sign transactions on their behalf. For example, if a user wants to send tokens to another address or execute a smart contract function, it will generate a transaction using the user's wallet credentials and broadcast it to the Ethereum network.

**RainbowKit** is a React library that provides components to build a Connect Wallet UI with a few lines of code. It supports Metamask, Rainbow, Coinbase Wallet, WalletConnect, and many more. It is also extremely customizable and comes with an amazing built-in theme. RainbowKit employs Ethers.js and Wagmi, both popular libraries. Also, it is developed by the same team behind the Rainbow Wallet.

**Torus SDK** provides a simple and secure way to log in to dApps using social media accounts such as Google, Facebook and Twitter. It supports a variety of blockchain networks, including Ethereum, Polygon, and Binance Smart Chain. Users can use the Torus protocol to send funds to an email address or social handle. If the recipient does not have a wallet, they can access the funds once they set one up. With no more mnemonic phrases to safeguard and a login flow that feels like the normal internet, the Torus user experience is a groundbreaker for mass adoption.

**Web3Modal** is an SDK used by Wallet Connect to allow mobile and desktop wallets to connect to decentralized applications (dApps) using QR code scanning. It supports a variety of wallets and is compatible with both iOS and Android. Like the previously mentioned SDKs, Web3Modal is a popular open-source library with a simple and easy-to-use interface which developers can use to connect their dApps to multiple wallets.

## Using RainbowKit

As mentioned before, a user-friendly and secure wallet connector library with a UI can be very useful. Benefits include faster development times, improved user experience and increased security. Combined with a web3 boilerplate, RainbowKit offers easy code integration, strong security features and compatibility with different blockchain networks. The library should give developers the necessary elements for a secure and seamless user experience.

First, the groundwork for a new dApp can be laid in the following way:

1. Open up a terminal or command prompt on your computer.
2. Type `npx create-web3-dapp@latest` and hit Enter. This will download and install the latest version of the create-web3-dapp package from the NPM registry.
3. You will then be prompted to enter the name of your dApp. Type in the desired name and hit Enter.
4. Next, you will be prompted to choose a blockchain network for your dApp. You can choose from various networks, such as Ethereum, Polygon, Optimism or Arbitrum. Type in the name of the desired network and hit Enter.
5. The create-web3-dapp tool will generate a new project directory with the specified name and install all the necessary dependencies.
6. To start working on your new dApp, navigate to the newly created directory by typing `cd <your-dapp-name>` in the terminal.
7. Once inside the project directory, you can run various commands to build and test your dApp. For example, you can run `npm start dev` inside the "frontend" folder to start the development server and view your dApp in the browser with a "Connect wallet" button.

Using npx create-web3-dapp is a quick and easy way to start building dApps without worrying about setting up the initial project structure and dependencies.

RainbowKit has to be imported before it can be configured, together with wagmi and ethers. These libraries were already installed after initiating the boilerplate.

Then, the desired chains must also be configured to generate the required connectors. A wagmi client will have to be set up as well.

After that, the application will be wrapped with RainbowKitProvider and WagmiConfig. Once this is done, the app is web3-enabled.

Wherever the Connect Wallet button has to be used, it can be imported and the component will be called.

## Conclusions

The wallet is a critical component of the web3 ecosystem, allowing users to store, send and receive cryptocurrencies and other digital assets. While there are many approaches and technologies available for wallet connections in web3, these remain affected by security, usability and interoperability issues.

Emerging technologies can help address some of those challenges. One is RainbowKit, a decentralized key management solution for web3 wallets which provides a secure and user-friendly way to manage keys, including those used for decentralized finance (DeFi) applications. While RainbowKit is still in the early stages of development, it has the potential to be a valuable tool in the ongoing efforts to improve the security and usability of web3 wallets.

## References

- Antonopoulos, A., & Wood, G. *Mastering Ethereum*. O'Reilly, 2018.
- Binance Academy. "What Is a Crypto Wallet?" (2019)
- Stakingbits. "Cryptocurrency Hot wallets vs Cold Wallets." *Medium* (2021)
- @helvantine. "Non-Custodial Crypto Wallets: Six Types Explored." *Medium* (2021)
- Moralis. "Web3 Libraries – List of Web3 Libraries for Devs in 2023." (2023)
- Rainbow. "RainbowKit"
- Torus. "How Torus Works"
- WalletConnect. "Web3Modal - Introduction"
- Alchemy. "Create-web3-dapp"
