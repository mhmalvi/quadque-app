"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import basisLogo from "../../../../public/assets/Images/basis_logo.png";
import FacebookDesktop from "../../../../public/assets/Icons/facebook-desktop.svg";
import YoutubeDesktop from "../../../../public/assets/Icons/youtube-desktop.svg";
import InstaDesktop from "../../../../public/assets/Icons/insta-desktop.svg";
import TwiterDesktop from "../../../../public/assets/Icons/twiter-desktop.svg";
import FooterLinkedin from "../../../../public/assets/Icons/linkedin.svg";
import FooterTiktok from "../../../../public/assets/Icons/tiktok.svg";

import axios from "axios";

const MobileFooter = () => {
  const [year, setYear] = useState("");
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    const d = new Date();
    setYear(d.getFullYear());
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const countRes = await axios.get(
          `https://qqtech-server.quadque.digital/api/get-counter`
        );
        if (countRes?.data?.status === 200) {
          setViewerCount(countRes?.data?.data?.[0]?.counter);
        }
      } catch (error) {
        console.log(error.response?.data);
      }
    })();
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

      <div className="flex items-center justify-center mt-4">
        <div>
          <Image
            src={basisLogo}
            className="mx-auto w-36 my-4"
            alt="Basis Logo"
          />
        </div>

        <div className="pl-6 ml-6 border-l-2 border-gray-400 flex flex-col justify-center items-center my-4">
          <div className="text-white font-semibold font_primary">
            Total Visitors
          </div>
          <div className="font-semibold text-4xl flex items-center">
            {/* <Viewers className="w-10 mr-2 text-brand-color" /> */}
            <CountUp
              className="font_title"
              start={0}
              end={viewerCount}
              duration={3}
            />
            +
          </div>
        </div>
      </div>

      <div className="flex mt-10 px-6 gap-2">
        <div className="w-1/2 flex-col leading-10">
          <Link href="../career" className="my-2">
            Career
          </Link>
          <Link href={`https://www.quadque.tech/faq`}>
            <p className="my-2">FAQ&apos;s</p>
          </Link>
          <Link href="https://www.quadque.tech/#Service" className="my-2">
            Services
          </Link>
          <Link href={`https://www.quadque.tech/products`}>
            <p className="my-2">Products</p>
          </Link>
        </div>
        <div className="w-1/2 flex-col leading-10">
          <Link href="https://www.quadque.tech/#Case_Study" className="my-2">
            Case Studies
          </Link>
          <Link href={`../blogs`}>
            <p className="my-2">Blogs</p>
          </Link>
          <Link href={`https://www.quadque.tech/gallery`}>
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

      <div className="w-full flex justify-center py-5 gap-2 mt-2">
        <a
          className="pl-1"
          href="https://www.facebook.com/quadquetech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookDesktop />
        </a>
        <a
          href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeDesktop className="mx-4 text-xl" />
        </a>

        <a
          href="https://www.instagram.com/quadquetech/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaDesktop className="mr-4" />
        </a>
        <a
          href="https://twitter.com/QuadqueT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwiterDesktop />
        </a>
        <a
          href="https://www.linkedin.com/company/quadque-technologies-ltd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterLinkedin className="w-4 ml-4" />
        </a>
        <a
          href="https://www.tiktok.com/@quadque"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterTiktok className="w-4 ml-3.5" />
        </a>
      </div>

      {/* <div className="w-full flex justify-center py-5 gap-2">
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
      </div> */}

      <div id="demo" className="flex justify-center text-xs pb-10">
        © {year} Quadque Technologies, All rights reserved.
      </div>
    </div>
  );
};

export default MobileFooter;
