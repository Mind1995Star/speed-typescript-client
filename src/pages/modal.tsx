import MetaMask from "../assets/images/metamask.png";
import WalletConnect from "../assets/images/walletconnect.png";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { addMetamaskAddress } from "../actions/metamask.action";
import { NotifySuccess } from "../utilities";
import { addWalletAddress } from "../actions/wallet.action";

export default function Modal() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const MetaMaskLogin = async () => {
    await logout();
    if (!isAuthenticated) {
      await authenticate({
        provider: "metamask",
      })
        .then(async function (user) {
          const address = user!.get("ethAddress");
          const data = await addMetamaskAddress(address);
          if (data) {
            // NotifySuccess("Registered in the Database");
            console.log(data.data);
          } else {
            console.log("Error");
            // NotifyFail("Error Ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const WalletLogin = async () => {
    await logout();
    if (!isAuthenticated) {
      await authenticate({
        provider: "walletconnect",
      })
        .then(async function (user) {
          const address = user!.get("ethAddress");
          const data = await addWalletAddress(address);
          if (data) {
            // NotifySuccess("Registered in the Database");
            console.log(data.data);
          } else {
            console.log("Error");
            // NotifyFail("Error Ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const toogleModal = () => {
    const modal = document.getElementById("modal");
    if (modal !== null) modal.classList.toggle("hidden");
  };

  return (
    <>
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden font-sans"
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-[white] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-[#060606] text-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="text-[30px]">
                Click the wallet you want to connect to.
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <div className="w-1/2 py-[20px] px-[30px]">
                    <img
                      onClick={MetaMaskLogin}
                      className="cursor-pointer"
                      src={MetaMask}
                    />
                  </div>
                  <div className="w-1/2 py-[20px] px-[30px]">
                    <img
                      onClick={WalletLogin}
                      className="cursor-pointer"
                      src={WalletConnect}
                    />
                  </div>
                </div>
                {/* <div className="flex flex-row">
                  <div className="flex text-center w-1/2">
                    <div className="">MetaMask Wallet</div>
                  </div>
                  <div className="flex text-center w-1/2">
                    <div className="">WalletConnect</div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="bg-[#060606] px-4 py-3 text-center">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                onClick={() => toogleModal()}
              >
                <i className="fas fa-times  cursor-pointer"></i> Cancel
              </button>
              {/* <button
                type="button"
                onClick={() => logOut()}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
              >
                <i className="fas fa-plus"></i> LogOut
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
