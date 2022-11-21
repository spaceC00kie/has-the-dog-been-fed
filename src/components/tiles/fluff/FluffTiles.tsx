import { motion } from "framer-motion"
import { MdMoneyOffCsred, MdOutlineMobiledataOff } from "react-icons/md"
import { Card } from "./Card"
import { VscGithubAlt } from "react-icons/vsc"
import { TbCircleDotted, TbFileSignal } from "react-icons/tb"
import { FaPoo } from "react-icons/fa"
import { CurrencyString } from "../../../containers/Wallet"

interface Props {
  layoutTransition: {}
}

const avaxContractAddress = import.meta.env.VITE_AVAX_CONTRACT_ADDRESS
const bnbContractAddress = import.meta.env.VITE_BSC_TESTNET_CONTRACT_ADDRESS
const ethContractAddress = import.meta.env.VITE_SEPOLIA_CONTRACT_ADDRESS
const neonContractAddress = import.meta.env.VITE_NEON_DEVNET_CONTRACT_ADDRESS
const dogeContractAddress = import.meta.env.VITE_DOGE_TESTNET_CONTRACT_ADDRESS

export const FluffTiles: React.FC<Props> = ({ layoutTransition }) => {
  const shortenWalletAddress = (walletAddress: string) =>
    `${walletAddress.slice(0, 7)}...${walletAddress.slice(-4)}`

  const addresses: [CurrencyString, string, string, string][] = [
    [
      "Avalanche",
      shortenWalletAddress(avaxContractAddress),
      avaxContractAddress,
      "https://snowtrace.io/address/" + avaxContractAddress,
    ],
    [
      "Fuji Testnet",
      shortenWalletAddress(avaxContractAddress),
      avaxContractAddress,
      "https://snowtrace.io/address/" + avaxContractAddress,
    ],
    // [
    //   "BNB Testnet",
    //   shortenWalletAddress(bnbContractAddress),
    //   bnbContractAddress,
    //   "https://bscscan.com/address/" + bnbContractAddress,
    // ],
    // [
    //   "ETH Testnet",
    //   shortenWalletAddress(ethContractAddress),
    //   ethContractAddress,
    //   "https://etherscan.io/address" + ethContractAddress,
    // ],
    // [
    //   "NEON Devnet",
    //   shortenWalletAddress(neonContractAddress),
    //   neonContractAddress,
    //   "https://neonscan.org/address/" + neonContractAddress,
    // ],
    // [
    //   "DOGE Testnet",
    //   shortenWalletAddress(dogeContractAddress),
    //   dogeContractAddress,
    //   "https://dogechain.info/address/" + dogeContractAddress,
    // ],
  ]

  return (
    <motion.div
      transition={layoutTransition}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.09,
            when: "beforeChildren",
            type: "tween",
          },
        },
      }}
      className=" grid gap-3 rounded-md text-slate-200 sm:grid-cols-2 md:grid-cols-3"
    >
      <Card
        icon={<MdMoneyOffCsred size={40} />}
        title="Actually Free"
        description1="There are no hidden fees. We don't show ads or sell your data.
              There is no upsell for a premium tier."
        description2="Using Frozr is completely free."
      />
      <Card
        icon={<TbCircleDotted size={40} />}
        title="Fully Decentralized"
        description1="A smart-contract holds your funds more securely than a bank vault."
        description2="Only you hold the key, not a business, bank, or even us."
      />

      <Card
        icon={<VscGithubAlt size={40} />}
        title="Entirely Open Source"
        description1={
          <div className="flex flex-col gap-4">
            <div>
              View the code for yourself on{" "}
              <a
                href="https://github.com/geektechniquestudios/Frozr"
                className="underline underline-offset-2"
              >
                github
              </a>
              .
            </div>
            <div className="text-slate-100">
              We take pride in full transparency of every line of code.
            </div>
          </div>
        }
      />
      <Card
        icon={<FaPoo size={40} />}
        title="No BS"
        description1="Frozr is straightforward and simple. No gimmicks."
        description2="We aim to do one thing well."
      />
      <Card
        icon={<MdOutlineMobiledataOff size={40} />}
        title="No Data Collection"
        description1="We don't collect any user data. We don't use cookies or tracking analytics."
        description2="Frozr is a Web3 service. Your data is yours."
      />

      <Card
        icon={<TbFileSignal size={40} />}
        title="Our Smart Contracts"
        description1={
          <div className="flex h-full flex-col justify-evenly">
            {addresses.map(([currency, shortenedAddress, fullAddress, url]) => (
              <a
                title={fullAddress}
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                key={currency}
                className="color-shift mx-2 flex justify-between rounded-full border border-slate-500 bg-slate-600 bg-opacity-90 px-3 py-1 text-xs hover:border-slate-300 hover:text-slate-300 hover:underline"
              >
                <div className="mr-2">{currency}</div>
                <div>{shortenedAddress}</div>
              </a>
            ))}
          </div>
        }
      />
    </motion.div>
  )
}
