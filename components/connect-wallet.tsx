import { Fragment, useState } from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ChevronRightIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function ConnectWalletButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f97316] hover:bg-[#f97316]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f97316]"
        onClick={() => setOpen(true)}
      >
        Connect Wallet
      </button> */}
      {/* <a href="#" className="inline-flex space-x-6">
        <span className="rounded-md bg-orange-500/10 px-4 py-2 text-sm font-semibold leading-6 text-orange-400 ring-1 ring-inset ring-orange-500/20 hover:ring-orange-500/80">
          What&apos;s new
        </span>
      </a> */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className=" h-8 w-full items-center gap-2 rounded-md px-3 text-sm text-orange-400 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-orange-500/10 dark:text-orange-400 dark:ring-inset dark:ring-orange-500/20 dark:hover:ring-orange-500/80 focus:[&amp;:not(:focus-visible)]:outline-none"
      >
        Connect Wallet
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#111] bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#333] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-[#444] text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#333] sm:mx-0 sm:h-10 sm:w-10">
                      {/* <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      /> */}
                      <Image src="/polygon.svg" width={40} height={40} alt="" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-white"
                      >
                        Connect Wallet to Polygon Mainnet
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-[#eaeaea]">
                          Please connect your wallet using one of the following
                          providers
                        </p>
                      </div>
                      <div className="mt-4">
                        <ConnectWallet accentColor="#f97316" />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
