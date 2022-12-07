import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const WatchVideo = () => {
  return (
    <div className="cont py-[90px]">
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="w-[400px]">
          <p className="font-normal text-2xl text-slate-400">
            We bring together innovative designers, pixel perfect developers and
            data driven strategy to create a boutique experience at enterprise
            scale.
          </p>

          <div className="mt-[80px] inline-flex items-center bg-slate-100 hover:bg-slate-300 text-slate-900 hover:text-slate-50 border-[2px] border-slate-200 rounded-full py-4 pl-6 pr-3 transition-all">
            <p className="font-bold text-[16px] leading-4 ">
              Watch Video
            </p>
            <MdOutlineArrowForwardIos className="text-lg ml-3" />
          </div>
        </div>

        {/* right */}
        <div>
          <img src="https://picsum.photos/620/700" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
