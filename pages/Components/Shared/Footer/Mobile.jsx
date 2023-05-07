"use client";
import { useEffect, useState } from "react";
// import "../../../../styles/MobileView.css";
import FooterFacebook from "../../../../public/assets/Icons/fb.svg";
import FooterInstagram from "../../../../public/assets/Icons/insta.svg";
import FooterTwitter from "../../../../public/assets/Icons/twit.svg";
import FooterYoutube from "../../../../public/assets/Icons/yt.svg";
// import {
//   FooterFacebook,
//   FooterInstagram,
//   FooterTwitter,
//   FooterYoutube,
// } from "../Icons";
import Link from "next/link";

const MobileFooter = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    const d = new Date();
    setYear(d.getFullYear());
  }, []);

  return (
    <div
      // id="Footer"
      className="w-full text-white bg-black relative pt-24 font_primary"
    >
      {/* <Image
        src={Logo}
        alt="Logo"
        className="absolute -top-12 right-2 bg-black"
      /> */}
      <div className="font_title text-3xl text-center mx-6 mb-4">
        Top-notch digital solutions with the best results
      </div>
      <div className="text-sm text-center px-6 pb-4">
        A diverse team with years of experience in delivering high-quality web
        development, software development and IT services.
      </div>
      <div className="w-1/3 bg-black rounded-full text-center text-xs font_title px-4 py-3 my-8 mx-auto spirit-bomb whitespace-nowrap">
        <Link href="tel:+8801765-276560">Let&apos;s Talk</Link>
      </div>
      <div className="flex mt-10 px-6 gap-2">
        <div className="w-1/2 flex-col leading-10">
          <Link href="/career" className="my-2">
            Career
          </Link>
          <Link href={`/faq`}>
            <p className="my-2">FAQ&apos;s</p>
          </Link>
          <Link href="/#Service" className="my-2">
            Services
          </Link>
        </div>
        <div className="w-1/2 flex-col leading-10">
          <Link href="/#Case_Study" className="my-2">
            Case Studies
          </Link>
          <Link href={`/blogs`}>
            <p className="my-2">Blogs</p>
          </Link>
          <Link href={`/gallery`}>
            <p className="my-2">Gallery</p>
          </Link>
        </div>
      </div>

      <div className="flex text-xs mt-6 px-6 gap-2">
        <div className="w-1/2 flex-col">
          <p className="text-sm font-bold">Quadque Technologies Pty Limited</p>
          <p className="pt-2">
            Level 1, 7 Greenfield Parade, Bankstown NSW 2200, Australia
          </p>
          <p className="pt-1">+61 405 899 496</p>
          <p className="pt-1">hello@quadque.tech</p>
        </div>
        <div className="w-1/2 flex-col">
          <p className="text-sm font-bold">
            Quadque Technologies Private Limited
          </p>
          <p className="pt-2">
            Level 7, 8/C, F.R Tower, Panthapath, Dhaka 1207, Bangladesh
          </p>
          <p className="pt-1">+8801765-276560</p>
          <p className="pt-1">info@quadque.tech</p>
        </div>
      </div>

      <div className="w-full flex justify-center py-5 gap-2">
        <Link href="https://www.facebook.com/quadquetech/">
          <FooterFacebook className="text-zinc-400 hover:text-brand-color text-xl" />
        </Link>
        <Link href="https://www.instagram.com/quadquetech/">
          <FooterInstagram className="text-white hover:text-brand-color text-xl" />
        </Link>
        <Link href="https://twitter.com/QuadqueT">
          <FooterTwitter className="text-white hover:text-brand-color text-xl" />
        </Link>
        <Link href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA">
          <FooterYoutube className="text-white hover:text-brand-color text-xl" />
        </Link>
      </div>

      <div id="demo" className="flex justify-center text-xs pb-10">
        © {year} Quadque Technologies, All rights reserved.
      </div>
    </div>
  );
};

export default MobileFooter;
