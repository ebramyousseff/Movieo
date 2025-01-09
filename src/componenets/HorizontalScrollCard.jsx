import { useRef } from "react";
import Card from "./Card";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import '../App.css'

const HorizontalScrollCard = ({ data = [], heading,trending, media_type }) => {
  const containerRef = useRef();

    const handleNext =()=>{
        containerRef.current.scrollLeft += 300
    }

  const handlePrev = () => {
    containerRef.current.scrollLeft -= 300
    }
  ;
  return (
    <div>
      <div className="container mx-auto px-3 my-10">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 capitalize">{heading}</h2>
        <div className="relative">
          <div
            ref={containerRef}
            className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none"
          >
            {data.map((data, index) => {

              return (
                <Card
                  key={data.id}
                  data={data}
                  index={index + 1}
                  trending={trending}
                  media_type={media_type}
                />
              );
            })}
          </div>
          <div>
            <div className="absolute  hidden top-0 w-full h-full lg:flex justify-between items-center">
              <button className="bg-white p-1 rounded-full text-xl z-10 -ml-2 text-black cursor-pointer" onClick={handlePrev}>
                <GrFormPrevious />
              </button>
              <button className="bg-white p-1 rounded-full text-xl z-10 -mr-2 text-black cursor-pointer" onClick={handleNext}>
                <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
