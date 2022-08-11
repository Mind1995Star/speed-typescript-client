import LOGO_IMAGE from "../assets/images/logo.png";
import BACKGROUND_IMAGE from "../assets/images/background.jpg";
// import ABOUT_LINK from "../views/modal.js";

export default function Header() {
  return (
    <>
      <div id="header" className="relative font-sans h-[100vh] sm:px-[5px]">
        <div className="absolute inset-0">
          <img
            src={BACKGROUND_IMAGE}
            alt=""
            className="h-full w-full object-cover"
          ></img>
        </div>
        <div className="relative flex justify-between">
          <div className="flex w-[100px] h-auto pt-[20px] px-[30px] sm:w-[120px] md:h-[120px] sm:pl-[50px] md:pt-[30px]">
            <a href="#header">
              <img src={LOGO_IMAGE} alt=""></img>
            </a>
          </div>
          <div className="flex py-[20px] items-center text-white sm:px-[20px]">
            <a
              href="https://discord.gg/qTZQ4sSJaW"
              target="_blank"
              className="px-[10px] py-2 sm:px-[25px] sm:py-[15px] rounded-[8px] bg-[#5865f2] font-semibold hover:bg-[#2937d1]"
            >
              Join Discord
            </a>
          </div>
          <div className="sm:hidden flex flex-col items-center justify-center mx-[30px]">
            <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
            <label
              className="menu-icon block cursor-pointer sm:hidden px-2 py-4 relative select-none"
              htmlFor="menu-btn"
            >
              <span className="navicon bg-grey-darkest flex items-center relative"></span>
            </label>
            <nav className="menu sm:px-[5px] absolute top-[100px] p-[50px] bg-[gray] w-full left-0 flex flex-col font-sans justify-center items-center gap-10 z-10">
              <a href="#about" className="opacity-[1] text-[white] text-sm">
                ABOUT
              </a>
              <a href="#roadmap" className="opacity-[1] text-[white] text-sm">
                ROADMAP
              </a>
              <a href="#team" className="opacity-[1] text-[white] text-sm">
                TEAM
              </a>
              <a
                href="#faq"
                className="inline-block opacity-[1] text-[white] text-sm"
              >
                FAQ
              </a>
            </nav>
          </div>
          <div className="absolute md:mt-[10px] hidden w-full sm:flex justify-center items-center">
            <nav className="flex font-sans justify-center items-center flex-auto sm:gap-4 md:gap-10">
              <a
                href="#about"
                className="my-[30px] py-[9px] opacity-[1] text-[white] text-sm"
              >
                ABOUT
              </a>
              <a
                href="#roadmap"
                className="my-[30px] py-[9px] opacity-[1] text-[white] text-sm"
              >
                ROADMAP
              </a>
              <a
                href="#team"
                className="my-[30px] py-[9px] opacity-[1] text-[white] text-sm"
              >
                TEAM
              </a>
              <a
                href="#faq"
                className="inline-block my-[30px] py-[9px] opacity-[1] text-[white] text-sm"
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>
        <div className="relative flex flex-col justify-center mt-[100px] w-full">
          <p className="text-[40px] sm:text-[50px] md:text-[70px] font-extrabold tracking-[10px] sm:tracking-[40px] text-[white] text-center">
            Crypto
          </p>
          <p className="text-[40px] sm:text-[50px] md:text-[70px] font-extrabold tracking-[10px] sm:tracking-[40px] text-[white] text-center">
            Speedway
          </p>
        </div>
      </div>
    </>
  );
}
