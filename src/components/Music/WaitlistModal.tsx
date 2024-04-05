import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const WaitlistModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow def fixed inset-0 h-full w-full bg-black opacity-40" />
        <Dialog.Content className="fixed left-[50%] top-[50%] mx-auto w-full max-w-lg translate-x-[-50%] translate-y-[-50%] px-4">
          <div className="rounded-md bg-white px-4 py-6 shadow-lg">
            <div className="flex items-center justify-end">
              <Dialog.Close className="rounded-md p-2 text-gray-400 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Dialog.Close>
            </div>
            <div className="mx-auto max-w-sm space-y-3 text-center ">
              <Dialog.Title className="text-lg font-medium text-gray-800 ">
                Sign up for our newsletter
              </Dialog.Title>

              <Dialog.Description className=" text-sm text-gray-600">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Dialog.Description>
              <fieldset className="Fieldset relative">
                <svg
                  className="absolute inset-y-0 left-3 my-auto h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  className="w-full rounded-lg border bg-transparent py-2 pl-12 pr-3 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                  placeholder="Enter your email"
                />
              </fieldset>
              <Dialog.Close asChild>
                <button className=" mt-3 w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-medium text-white ring-indigo-600 ring-offset-2 hover:bg-indigo-500 focus:ring-2 active:bg-indigo-700">
                  Subscribe
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default WaitlistModal;
