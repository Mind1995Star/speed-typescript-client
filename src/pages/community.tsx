export default function Community() {
  return (
    <>
      <div className="flex flex-col font-sans mt-[150px] pb-[50px]">
        <div className="flex text-[35px] mx-[20px] justify-center text-[white] sm:text-[62px] font-medium">
          Join the Community
        </div>
        <div className="flex text-left mb-[10px] sm:text-center text-[gray] text-[18px] px-[20px] sm:px-[75px] font-light">
          Join our community on Discord and give us a follow on Twitter and
          Instagram and keep up to date on the latest developments from the
          Crypto Speedway team.
        </div>
        <div className="flex flex-wrap justify-center text-white gap-3">
          <div className="mx-[20px] bg-[#5865f2] sm:px-[20px] py-[15px] text-[12px] text-medium">
            <a className="px-[110px]">DISCORD</a>
          </div>
          <div className="mx-[20px] bg-gradient-to-r from-[#405de6] via-[#5851db] to-[#fd1d1d] sm:px-[20px] py-[15px] text-[12px] text-medium">
            <a className="px-[110px]">INSTAGRAM</a>
          </div>
          <div className="mx-[20px] bg-[#5865f2] sm:px-[20px] py-[15px] text-[12px] text-medium">
            <a className="px-[110px]">TWITTER</a>
          </div>
          <div className="mx-[20px] bg-[#5865f2] sm:px-[20px] py-[15px] text-[12px] text-medium">
            <a className="px-[110px]">OPENSEA</a>
          </div>
        </div>
      </div>
    </>
  );
}
