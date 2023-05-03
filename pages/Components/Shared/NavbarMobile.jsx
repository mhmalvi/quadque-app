import { Button, Modal } from "antd";
import { useState } from "react";
import Tagline from "../../../public/assets/Images/mobile-tagline.png";
import Link from "next/link";
import Image from "next/image";
import BrandLogoMob from "../../../public/assets/Icons/navbar-logo.svg";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-1 my-1 rounded-full bg-white transition ease transform duration-500 lg:hidden m-4`;

  if (typeof window !== "undefined") {
    var prevScrollpos = window.pageYOffset;
    console.log(prevScrollpos);
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("Navigation").style.top = "0";
      } else {
        document.getElementById("Navigation").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    };
  }

  return (
    <div
      id="Navigation"
      className="Navigation fixed top-0 z-[999] font_primary pb-10"
      style={{ transition: "top 0.3s" }}
    >
      <div className="flex justify-between">
        <Link href="/">
          <div className="flex shrink-0 p-6">
            <BrandLogoMob
              className="text-5xl scale-x-[-1] text-white"
              alt="Logo"
            />
            <div id="tagline" className="overlay pt-1 block sm:hidden">
              <Image
                src={Tagline}
                alt="tagline"
                width={100}
                className="shrink-0"
              />
            </div>
          </div>
        </Link>
        {/* <Icons.BrandLogoMobWithTagline className=" text-white w-32 pb-4" /> */}
        <Button
          className={`pt-2 ${open ? "translate-x-5 hidden" : ""}`}
          type="button"
          onClick={() => setOpen(true)}
        >
          {/* Hamburger Animation */}
          <div
            className={`w-4 ${genericHamburgerLine} ${
              open ? "opacity-0 duration-300" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} w-8 ${
              open ? "opacity-0 duration-300" : ""
            } `}
          />
          <div
            className={`${genericHamburgerLine} w-4 opacity-100 float-right relative -top-1 ${
              open ? "opacity-0 duration-300" : ""
            }`}
          />
        </Button>
      </div>
      <Modal
        className="cross_btn"
        title={false}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        width="100%"
      >
        <div className="w-full h-full flex flex-col justify-between text-center text-xl pt-24">
          <div
            className="flex flex-row absolute top-14 shrink-0"
            onClick={() => setOpen(false)}
          >
            <BrandLogoMob className=" text-white w-13 scale-x-[-1] " />
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link href="/">Home</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link href="https://www.quadque.tech/#Service">Services</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link href="https://www.quadque.tech/#About">About</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link href="https://www.quadque.tech/#Case_Study">
              Case Studies
            </Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link href="/blogs">Blogs</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link href="career">Careers</Link>
          </div>

          {/*           <div onClick={() => setOpen(false)} className="font_title">
            <Link href="/gallery">Gallery</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <a href="/#Footer">Contact</a>
          </div> */}
        </div>
      </Modal>
    </div>
  );
};
export default NavbarMobile;
