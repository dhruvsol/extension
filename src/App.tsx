import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { FakeWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useState } from 'react';
import { InfoPage } from './layout/InfoPage';
import { ListPage } from './layout/ListPage';
import { IoArrowBackSharp } from 'react-icons/io5';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <Context>
            <Content />
        </Context>
    );
};
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            /**
             * Select the wallets you wish to support, by instantiating wallet adapters here.
             *
             * Common adapters can be found in the npm package `@solana/wallet-adapter-wallets`.
             * That package supports tree shaking and lazy loading -- only the wallets you import
             * will be compiled into your application, and only the dependencies of wallets that
             * your users connect to will be loaded.
             */
            new PhantomWalletAdapter(),
        ],
        []
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}
const tabs = [
    { name: 'Password', href: '#', current: true },
    { name: 'Documents', href: '#', current: false },
    { name: 'Payments', href: '#', current: false },
];
const Content: FC = () => {
    const [appState, setAppState] = useState<number>(0);
    return (
        <>
            {appState !== 0 && (
                <>
                    <div
                        onClick={() => {
                            if (appState === 0) return;
                            setAppState(appState - 1);
                        }}
                        className="flex justify-start items-center gap-x-2 my-3 px-5"
                    >
                        <IoArrowBackSharp />
                        <h1 className="font-bold text-base">go back</h1>
                    </div>

                    <div>
                        <div className="flex justify-center gapx-3 mt-3">
                            <nav className="flex " aria-label="Tabs">
                                {tabs.map((tab) => (
                                    <a
                                        key={tab.name}
                                        href={tab.href}
                                        className={classNames(
                                            tab.current
                                                ? 'bg-indigo-100 text-indigo-700'
                                                : 'text-gray-500 hover:text-gray-700',
                                            'px-3 py-2 font-medium text-sm rounded-md'
                                        )}
                                        aria-current={tab.current ? 'page' : undefined}
                                    >
                                        {tab.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </>
            )}
            {appState === 0 && (
                <div className="w-[20rem] h-[30rem] bg-white text-black flex justify-center ">
                    <div className=" w-full mx-10 flex justify-center flex-col gap-5">
                        <button className="h-7 w-full bg-indigo-700 text-white">Login with email</button>
                        <WalletMultiButton />

                        <button
                            onClick={() => {
                                setAppState(1);
                            }}
                            className="h-7 w-full bg-indigo-700 text-white"
                        >
                            Login with Phantom
                        </button>
                    </div>
                </div>
            )}
            {appState === 1 && <ListPage Click={setAppState} />}
            {appState === 2 && <InfoPage />}
        </>
    );
};
