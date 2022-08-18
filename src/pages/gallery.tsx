import Gallery1 from "../assets/images/gallery1.jpeg";
import Gallery2 from "../assets/images/gallery2.jpeg";
import Gallery3 from "../assets/images/gallery3.jpeg";
import Gallery4 from "../assets/images/gallery4.jpeg";

export default function Gallery() {
  return (
    <>
      <div className="flex flex-col font-sans text-[white] my-[100px]">
        <div className="flex text-[35px] sm:text-[56px] justify-center">
          Gallery
        </div>
        <div className="flex text-[10px] sm:text-[18px] justify-center">
          Check out some of our Designs!
        </div>
        <div className="flex flex-col sm:flex-row px-[20px] sm:px-[100px] my-[40px] gap-6">
          <div className="flex w-full sm-[540px]:w-[50%] overflow-hidden">
            <img
              src={Gallery1}
              alt="gallery1"
              className="hover:scale-125 w-full transition-all duration-500"
            ></img>
          </div>
          <div className="flex flex-col gap-6 w-full sm-[540px]:w-[50%]">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex w-full sm:w-1/2 overflow-hidden">
                <img
                  src={Gallery2}
                  alt="gallery2"
                  className="hover:scale-125 w-full transition-all duration-500"
                ></img>
              </div>
              <div className="flex w-full sm:w-1/2 overflow-hidden">
                <img
                  src={Gallery3}
                  alt="gallery3"
                  className="hover:scale-125 w-full transition-all duration-500"
                ></img>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex w-full sm:w-1/2 overflow-hidden">
                <img
                  src={Gallery4}
                  alt="gallery4"
                  className="hover:scale-125 w-full transition-all duration-500"
                ></img>
              </div>
              <div className="flex w-full sm:w-1/2 overflow-hidden">
                <img
                  src={Gallery1}
                  alt="gallery1"
                  className="hover:scale-125 w-full transition-all duration-500"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
