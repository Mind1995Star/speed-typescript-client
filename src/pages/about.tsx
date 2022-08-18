import { useHistory } from "react-router-dom";
import CRYPTO_SPEEDWAY from "../assets/images/crypto-speedway.jpeg";
import { PUBLIC_PREFIX, TEST_PREFIX } from "../configs/public.config";

// import { login } from "../hooks/useAuth";

export default function About() {
  const history = useHistory();
  const toggleModal = () => {
    const modal = document.getElementById("modal");
    if (modal !== null) modal.classList.toggle("hidden");
  };

  const viewAccount = () => {
    history.push({
      pathname: PUBLIC_PREFIX + TEST_PREFIX,
    });
  };

  return (
    <>
      <div
        id="about"
        className="flex flex-col px-[30px] md:flex-row font-sans mt-[100px] sm:px-[100px]"
      >
        <div className="pr-[20px] hidden sm:block py-[30px] md:w-1/2">
          <img
            src={CRYPTO_SPEEDWAY}
            alt="speedway"
            className="rounded-xl w-full h-full"
          ></img>
        </div>
        <div className="flex-col sm:pl-[20px] py-[30px] md:w-1/2 h-auto text-[white]">
          <div className="text-left text-[35px] sm:text-[60px] leading-[40px] sm:leading-[65px] mt-[10px] mb-[20px]">
            What is Crypto Speedway?
          </div>
          <p className="text-left mt-[0px] mb-[20px]">
            Crypto Speedway is an NFT based company, bringing you NFT cars to
            race in the metaverse. Race in multiplayer to claim the top of the
            leaderboards, beat the weekly times to earn Speedway Points, and
            collect cars to build your garage. We are starting out with an
            awesome mobile game for testing, and we are dropping a 10,000 car
            collection for users to experience Crypto Speedway first hand! We
            are also doing a Giveaway of 10 unique NFT cars that will be
            compatible in the game. Enter below to receive one free entry!
          </p>
          <div className="flex flex-row">
            <div className="w-1/2 m-1">
              <a
                onClick={() => toggleModal()}
                className="flex py-[10px] text-[15px] cursor-pointer justify-center px-[15px] md:py-[15px] md:text-[25px] mb-[20px] bg-[#3898EC] text-center rounded-[10px] hover:bg-[#0057a3]"
              >
                MINT
              </a>
            </div>
            <div className="w-1/2 m-1">
              <a
                onClick={() => viewAccount()}
                className="flex py-[10px] text-[15px] cursor-pointer justify-center px-[15px] md:py-[15px] md:text-[25px] mb-[20px] bg-[#3898EC] text-center rounded-[10px] hover:bg-[#0057a3]"
              >
                View Wallet Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
