import React from "react";

const Blog = () => {
  return (
    <div className="py-[90px] cont bg-slate-100">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-5xl text-slate-900">The Blog</h2>
        <p className="font-bold text-base text-blue-500 hover:underline">View All</p>
      </div>
      <div className="mt-[80px] flex gap-x-14">
        <div className="bg-white">
          <img src="https://picsum.photos/532/320" alt="" />

          <div className="p-8">
            <div className="flex justify-between items-center">
              <p className="inline-flex font-normal text-xs px-[12px] py-[6px] rounded-full border-[1px] border-slate-100 text-slate-300">
                News
              </p>
              <p className="text-sm text-slate-300">Oct 25, 2022</p>
            </div>
            <p className="my-6 font-semibold text-2xl">
              Curating a workspace that inspires all of us
            </p>
            <p className="font-bold text-base text-blue-500 hover:underline">Read More</p>
          </div>
        </div>

        <div className="bg-white">
          <img src="https://picsum.photos/532/320" alt="" />

          <div className="p-8">
            <div className="flex justify-between items-center">
              <p className="inline-flex font-normal text-xs px-[12px] py-[6px] rounded-full border-[1px] border-slate-100 text-slate-300">
                News
              </p>
              <p className="text-sm text-slate-300">Oct 25, 2022</p>
            </div>
            <p className="my-6 font-semibold text-2xl">
              Curating a workspace that inspires all of us
            </p>
            <p className="font-bold text-base text-blue-500 hover:underline">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
