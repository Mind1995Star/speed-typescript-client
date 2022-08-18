import JACK_IMAGE from "../assets/images/Jack.png";
import CAROLS_IMAGE from "../assets/images/Carols.png";

export default function Team() {
  return (
    <>
      <div
        id="#team"
        className="flex flex-col mx-auto text-left sm:text-center px-[20px] sm:px-[40px] font-sans my-[150px]"
      >
        <div className="flex justify-center text-[gray] text-[12px] font-semibold">
          THE TEAM
        </div>
        <div className="flex sm:justify-center text-[white] mx-auto text-[35px] sm:text-[62px] mb-[20px] leading-[40px] sm:leading-[80px] font-light">
          Our Team is our Biggest Unfair Advantage
        </div>
        <div className="flex text-left text-[gray] text-[18px] sm:px-[75px] font-light">
          We want you to know who we are! We are the ones accountable for the
          success of our projects, and if you choose to invest in our company,
          you are also investing in us. Together, we are a team that drives for
          innovation and creates real value to the NFTs we release.
        </div>
        <div className="flex flex-wrap mx-auto">
          <div className="my-1 px-5 w-full sm:w-1/2 md:my-4 md:w-1/4">
            <div className="flex justify-center">
              <img
                src={JACK_IMAGE}
                alt="jack-image"
                className="w-[250px]"
              ></img>
            </div>
            <div className="flex justify-center text-center mb-[15px] text-[white] text-2xl">
              Jack
            </div>
            <div className="flex justify-center text-center text-[gray]">
              Founder and NFT Guru. Manages the team and builds the Brand
            </div>
          </div>
          <div className="my-1 px-5 w-full sm:w-1/2 md:my-4 md:w-1/4">
            <div className="flex justify-center">
              <img
                src={CAROLS_IMAGE}
                alt="carols-image"
                className="w-[250px]"
              ></img>
            </div>
            <div className="flex justify-center text-center mb-[15px] text-[white] text-2xl">
              Carlos
            </div>
            <div className="flex justify-center text-center text-[gray]">
              Business leader who has had 30 plus years of experience in running
              business.
            </div>
          </div>
          <div className="my-1 px- w-full sm:w-1/2 md:my-4 md:w-1/4">
            <div className="flex justify-center">
              <img
                src={JACK_IMAGE}
                alt="jack-image"
                className="w-[250px]"
              ></img>
            </div>
            <div className="flex justify-center text-center mb-[15px] text-[white] text-2xl">
              Max
            </div>
            <div className="flex justify-center text-center text-[gray]">
              Lead directing artist who creates and animates all of the NFTs
            </div>
          </div>
          <div className="my-1 px-1 w-full sm:w-1/2 md:my-4 md:w-1/4">
            <div className="flex justify-center">
              <img
                src={JACK_IMAGE}
                alt="jack-image"
                className="w-[250px]"
              ></img>
            </div>
            <div className="flex justify-center text-center mb-[15px] text-[white] text-2xl">
              Brad
            </div>
            <div className="flex justify-center text-center text-[gray]">
              Six Sigma Black Belt, Director of Quality Management and Sales
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
