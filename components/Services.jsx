import React from "react";
import { TbHeartRateMonitor, TbSettings } from "react-icons/tb";

const Services = () => {
  return (
    <div className="cont py-[90px]">
      <h2 className="font-semibold text-2xl text-slate-900">
        We worry about the details so you don't have to. When you work with our
        web agency, you can be certain that your website meets every standard.
      </h2>

      <div className="mt-[80px] flex flex-wrap gap-14">

        <div className="bg-slate-50 flex-1 hover:scale-105 hover:bg-slate-100 transition-all  hover:shadow-md">
          <div className="p-8 w-[240px]">
          <TbHeartRateMonitor className="text-3xl" />
            <h4 className="mt-6 font-semibold text-2xl text-slate-900">
              Graphic Design
            </h4>
            <p className="mt-3 mb-8 font-normal text-base text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          <a href="#" className="font-bold text-[16px] text-blue-500">Learn More</a>
          </div>
        </div>

        <div className="bg-slate-50 flex-1 hover:scale-105 hover:bg-slate-100 transition-all  hover:shadow-md">
          <div className="p-8 w-[240px]">
          <TbSettings className="text-3xl" />
            <h4 className="mt-6 font-semibold text-2xl text-slate-900">
              Development
            </h4>
            <p className="mt-3 mb-8 font-normal text-base text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          <a href="#" className="font-bold text-[16px] text-blue-500">Learn More</a>
          </div>
        </div>

        <div className="">
          <img src="https://picsum.photos/336/300" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
