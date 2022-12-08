import React from "react";
import { TbBrandApple } from "react-icons/tb";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-[90px] cont bg-slate-100 text-center">
      <div>
        <div>
          <h4 className="font-bold text-base text-blue-500">Get in Touch</h4>
          <h1 className="mt-8 font-bold text-8xl text-slate-900">Let's Talk</h1>
          <h3 className="mt-6 font-normal text-2xl text-slate-300">
            Feel free to contact us
          </h3>
          <a
            href="#"
            className="mt-8 inline-flex font-bold text-base text-white px-8 py-5 bg-blue-500 rounded-full"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-[161px] flex justify-between">
          <div className="w-[400px]">
            <TbBrandApple className="text-2xl" />
            <p className="mt-6 mb-8 text-left text-normal text-base text-slate-400">
              Woonders is an award UI/UX designs and branding agency based in
              Ocala, FL.
            </p>

            <ul className="flex items-center justify-between text-sm text-slate-400">
              <li className="text-slate-900">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Style Guide</a>
              </li>
              <li>
                <a href="#">Licensing</a>
              </li>
              <li>
                <a href="#">Instructions</a>
              </li>
            </ul>
          </div>

          <div className="text-left text-sm text-slate-400">
            <div className="social flex text-2xl gap-x-6">
              <AiOutlineTwitter />
              <AiFillLinkedin />
              <AiOutlineDribbble />
              <AiFillFacebook />
              <AiFillInstagram />
            </div>

            <p className="my-8 mb-4">hello@woonders.com</p>

            <p>+1 (352) 844 0270</p>
          </div>
        </div>
        <div className="mt-[80px] flex justify-between">
          <p className="text-sm text-slate-400">Angel Uriostegui © 2022</p>
          <p className="text-sm text-slate-400">Powered by NEXT.JS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
