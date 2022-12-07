import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="py-[90px] text-center bg-slate-100 text-slate-900">
        <div>
          {/* title */}
          <div className="text-[180px] font-bold">
            <h1 className="w-[730px] leading-[180px] mx-auto">
              Think. <span className="text-slate-400">Create. </span>Solution.
            </h1>
          </div>

          <div className="mt-6 w-[460px] font-normal mx-auto">
            {/* sub title */}
            <h4 className="text-[24px] leading-8">
              We are an award-winning branding and web agency committed to
              excellence since forever.
            </h4>

            {/* content */}
            <h5 className="mt-6 text-[16px] leading-6 text-slate-400">
              We set the standard of exceptional design creatively, technically,
              sustainably, and ethically so that you can make the extraordinary
              impact impact that you seek.
            </h5>

            {/* button */}
            <a
              href="#"
              className="mt-8 inline-flex font-bold text-[16px] leading-[16px] text-white py-[22px] px-8 bg-blue-500 hover:bg-blue-600 rounded-full"
            >
              View on UI8
            </a>
          </div>
        </div>

        {/* mouse scroll */}
        <div className="mt-[80px] mx-auto inline-flex rounded-full border-2 border-[#E6E8EC] px-[13px] pt-[13px] pb-[29px]">
          <div className="w-[6px] h-[6px] bg-[#23262F] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
