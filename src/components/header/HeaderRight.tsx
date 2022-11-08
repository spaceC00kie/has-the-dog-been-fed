import React from "react"
import { Auth } from "../../containers/Auth"
import { BsWallet2 } from "react-icons/bs"
import { AnimatePresence, motion } from "framer-motion"

export const HeaderRight: React.FC = () => {
  const { walletAddress, isWalletConnected } = Auth.useContainer()

  return (
    <div className="mx-1 flex flex-auto items-center justify-end gap-1.5 align-middle">
      {isWalletConnected && (
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1], translateY: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 40,
          }}
          className="color-shift mx-2 rounded-full border border-stone-700 bg-slate-600 bg-opacity-90 py-1 px-2 text-xs hover:border-slate-300 hover:text-slate-300 hover:underline"
          title={"View Wallet on Snowtrace"}
          href={"https://snowtrace.io/address/" + walletAddress}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex gap-1">
            <div className="mt-0.5">
              <BsWallet2 />
            </div>
            {walletAddress?.substring(0, 6)}...
            {walletAddress?.substring(
              walletAddress.length - 4,
              walletAddress.length,
            )}
          </div>
        </motion.a>
      )}
    </div>
  )
}