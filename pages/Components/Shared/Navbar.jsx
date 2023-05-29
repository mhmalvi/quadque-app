"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import bgShadowLogo from "../../../public/assets/Images/bg-logo-shadow.png";
import brandLogo from "../../../public/assets/Images/brand_logo.png";
import astronaut from "../../../public/assets/Images/navbar_astronaut.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ setOpenMenus }) => {
  const navigate = useRouter();
  const [showBgShadow, setShowBgShadow] = useState("");

  const handleNavigate = (menu) => {
    if (!window.location.hash.includes("#")) {
      navigate.push(`https://www.quadque.tech/${menu}`);
      setOpenMenus(false);
    } else {
      setOpenMenus(false);
      return;
    }
  };

  // console.log(window.location);
  // console.log(window.location.hash);
  // console.log(window.location.host + "/#contact");

  return (
    <div className="custom_modal_container bg-black bg-opacity-100 backdrop-blur-sm py-10 px-16">
      <div className="mb-[5%]">
        <Image
          className="lg:w-[12%] 2xl:w-auto"
          src={brandLogo}
          alt="Brand Logo"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center">
          <a
            href="https://www.quadque.tech/#services"
            className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex text-white hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
            onMouseOver={() => {
              setShowBgShadow("SERVICES");
            }}
            onMouseOut={() => {
              setShowBgShadow("");
            }}
            onClick={() => handleNavigate("#services")}
          >
            <span className="p-0 m-0 uppercase font_title">SERVICES</span>
            <span className="lg:text-base xl:text-lg 2xl:text-3xl mb-auto font_title">
              #01
            </span>
            <Image
              className={`absolute ${
                showBgShadow === "SERVICES" ? "opacity-100" : "opacity-0"
              } transition-opacity delay-200 -top-2 right-0 lg:w-[50%] xl:w-[70%] 2xl:w-32`}
              src={bgShadowLogo}
              alt="Background Shadow Logo"
            />
          </a>

          <a
            href="https://www.quadque.tech/#about"
            className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex mx-20"
            onMouseOver={() => {
              setShowBgShadow("ABOUT");
            }}
            onMouseOut={() => {
              setShowBgShadow("");
            }}
          >
            <div
              className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex text-white hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
              onClick={() => handleNavigate("#about")}
            >
              <span className="p-0 m-0 uppercase font_title">ABOUT</span>
              <span className="lg:text-base xl:text-lg 2xl:text-3xl  mb-auto font_title">
                #02
              </span>
              <Image
                className={`absolute ${
                  showBgShadow === "ABOUT" ? "opacity-100" : "opacity-0"
                } transition-opacity delay-200 -top-2 right-0 lg:w-[60%] xl:w-[70%] 2xl:w-32`}
                src={bgShadowLogo}
                alt="Background Shadow Logo"
              />
            </div>
          </a>
          <div
            className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex"
            onMouseOver={() => {
              setShowBgShadow("CASE STUDIES");
            }}
            onMouseOut={() => {
              setShowBgShadow("");
            }}
          >
            <a
              href="https://www.quadque.tech/#case-study"
              className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex text-white hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
              onClick={() => handleNavigate("#case-study")}
            >
              <span className="p-0 m-0 uppercase font_title">CASE STUDIES</span>
              <span className="lg:text-base xl:text-lg 2xl:text-3xl  mb-auto font_title">
                #03
              </span>
              <Image
                className={`absolute ${
                  showBgShadow === "CASE STUDIES" ? "opacity-100" : "opacity-0"
                } transition-opacity delay-200 -top-2 right-0 lg:w-[40%] xl:w-[70%] 2xl:w-32`}
                src={bgShadowLogo}
                alt="Background Shadow Logo"
              />
            </a>
          </div>
        </div>

        <div className="flex mt-20">
          <a
            href="https://www.quadque.tech/products"
            className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex mr-20"
            onMouseOver={() => {
              setShowBgShadow("PRODUCTS");
            }}
            onMouseOut={() => {
              setShowBgShadow("");
            }}
            onClick={() => handleNavigate("products")}
          >
            <div
              className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex text-white hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
              onClick={() => setOpenMenus(false)}
            >
              <span className="p-0 m-0 uppercase font_title">PRODUCTS</span>
              <span className="lg:text-base xl:text-lg 2xl:text-3xl  mb-auto font_title">
                #04
              </span>
              <Image
                className={`absolute ${
                  showBgShadow === "PRODUCTS" ? "opacity-100" : "opacity-0"
                } transition-opacity delay-200 -top-2 right-0 lg:w-[65%] xl:w-[70%] 2xl:w-32`}
                src={bgShadowLogo}
                alt="Background Shadow Logo"
              />
            </div>
          </a>
          <Link
            href="/blogs"
            className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px]  flex mr-20"
            onMouseOver={() => {
              setShowBgShadow("BLOGS");
            }}
            onMouseOut={() => {
              setShowBgShadow("");
            }}
            // onClick={() => handleNavigate("blogs")}
          >
            <div
              className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex text-white hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
              onClick={() => setOpenMenus(false)}
            >
              <span className="p-0 m-0 uppercase font_title">BLOGS</span>
              <span className="lg:text-base xl:text-lg 2xl:text-3xl  mb-auto font_title">
                #04
              </span>
              <Image
                className={`absolute ${
                  showBgShadow === "BLOGS" ? "opacity-100" : "opacity-0"
                } transition-opacity delay-200 -top-2 right-0 lg:w-[65%] xl:w-[70%] 2xl:w-32`}
                src={bgShadowLogo}
                alt="Background Shadow Logo"
              />
            </div>
          </Link>

          <a
            href="https://www.quadque.tech/#contacts"
            className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex"
            onMouseOver={() => {
              setShowBgShadow("CONTACT");
            }}
            onMouseOut={() => {
              setShowBgShadow("");
            }}
            onClick={() => handleNavigate("#contacts")}
          >
            <div
              className="relative font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[50px] flex text-white hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
              onClick={() => setOpenMenus(false)}
            >
              <span className="p-0 m-0 uppercase font_title">CONTACT</span>
              <span className="lg:text-base xl:text-lg 2xl:text-3xl  mb-auto font_title">
                #05
              </span>
              <Image
                className={`absolute ${
                  showBgShadow === "CONTACT" ? "opacity-100" : "opacity-0"
                } transition-opacity delay-200 -top-2 right-0 lg:w-[45%] xl:w-[70%] 2xl:w-32`}
                src={bgShadowLogo}
                alt="Background Shadow Logo"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="relative lg:mt-28 2xl:mt-36 flex justify-center items-center">
        <div className="ticker_service relative">
          <p
            className="lg:text-8xl xl:text-9xl 2xl:text-[11rem] italic"
            style={{
              textShadow: "0.5px 0.5px 5px #f5f5f5",
            }}
          >
            {showBgShadow}
          </p>
          {showBgShadow ? (
            <Image
              className="w-24 absolute -top-14 left-0"
              src={astronaut}
              alt="Baby Astronaut"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
