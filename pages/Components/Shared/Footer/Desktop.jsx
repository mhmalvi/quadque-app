"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import address from ".././../../../public/assets/Images/address.png";
import bgAus from ".././../../../public/assets/Images/background_aus.jpg";
import bgBD from ".././../../../public/assets/Images/background_bd.jpg";

import BluePhone from "../../../../public/assets/Icons/blue_phone.svg";
import FacebookDesktop from "../../../../public/assets/Icons/facebook-desktop.svg";
import FooterIcon from "../../../../public/assets/Icons/footer-icon.svg";
import InstaDesktop from "../../../../public/assets/Icons/insta-desktop.svg";
import TwiterDesktop from "../../../../public/assets/Icons/twiter-desktop.svg";
import YoutubeDesktop from "../../../../public/assets/Icons/youtube-desktop.svg";

// import {
//   BluePhone,
//   FacebookDesktop,
//   FooterIcon,
//   InstaDesktop,
//   TwiterDesktop,
//   YoutubeDesktop,
// } from "../Icons";

const DesktopFooter = () => {
  //   const location = useLocation();
  // const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [year, setYear] = useState("");

  //   const synth = window.speechSynthesis;

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());

    // if (location.hash === "#contacts") {
    //   document.getElementById("footer_icon").classList.remove("hidden");
    //   setTimeout(() => {
    //     setTriggerTitleAnimation(true);
    //   }, 800);
    //   synth.cancel();
    // } else {
    //   document.getElementById("footer_icon").classList.add("hidden");
    // }
  }, []);

  return (
    <div
      id="contacts"
      className="section w-full lg:py-6 2xl:py-0 font_primary text-white relative"
    >
      {/* For Background Flag */}
      {/* <div>  */}
      {/* <Fade spy={triggerAnimation}> */}
      <Fade delay={500} duration={3000}>
        {/* {backgroundImage !== "" ? ( */}
        <Image
          src={backgroundImage}
          className={`min-w-full h-[90vh] ${
            backgroundImage ? "block" : "hidden"
          }`}
          alt="Background"
        />
        {/* ) : ( */}
        {/* <div>&nbsp;</div> */}
        {/* )} */}
      </Fade>
      {/* </div> */}

      <div className="w-full lg:py-6 absolute top-0 2xl:top-16">
        <div className=" ml-21 lg:mt-10 2xl:mt-16 mr-25 ">
          {/* <div className="2xl:pt-6 2xl:pl-10"> */}
          <div className="2xl:pl-10">
            <div>
              <Fade duration={"left"} triggerOnce>
                <div className="text-4xl 2xl:text-[48px] leading-10 2xl:leading-[55px] font-semibold font_title">
                  Top-notch digital solutions
                </div>
                <div className="text-4xl 2xl:text-[48px] leading-10 2xl:leading-[55px] font-semibold font_title">
                  with the best results
                </div>
              </Fade>
              <Fade duration={"left"} triggerOnce>
                <a href="tel:+01765276560">
                  <button
                    className="spirit-bomb text-white px-12 2xl:px-18 py-2 2xl:py-3.5 text-lg leading-6 font-bold uppercase mt-8 2xl:mt-14 font_primary"
                    style={{
                      borderRadius: "30px",
                    }}
                  >
                    Let&apos;s Talk
                  </button>
                </a>
              </Fade>
              <FooterIcon
                id="footer_icon"
                className="hidden absolute lg:-top-28 2xl:-top-32 lg:-right-16 2xl:-right-24 lg:w-79 lg:h-72 2xl:w-96 2xl:h-92 bg-transparent animate-slow-spin"
              />
            </div>

            <div className="lg:mt-10 xl:mt-24 2xl:mt-32 lg:h-52">
              <div className="flex justify-between">
                <div className="w-4/12 flex flex-col justify-between col-span-2 2xl:col-span-1">
                  <Fade duration={"left"} triggerOnce>
                    <div
                      className="max-w-[330px] font-light text-sm xl:text-base leading-6"
                      style={{
                        wordBreak: "keep-all",
                      }}
                    >
                      A diverse team with years of experience in delivering
                      high-quality web development, software development and IT
                      services.
                    </div>
                    <div>
                      <div className="mb-6 ml-1 text-xs xl:text-sm">
                        <h4
                          onMouseOver={() => {
                            setBackgroundImage(bgAus);
                            setTriggerAnimation(!triggerAnimation);
                          }}
                          onMouseOut={() => {
                            setBackgroundImage("");
                            // setTriggerAnimation(false);
                          }}
                        >
                          <span>Australia: </span>
                          <a href="mailto:">hello@quadque.tech</a>
                        </h4>

                        <h4
                          onMouseOver={() => {
                            setBackgroundImage(bgBD);
                            setTriggerAnimation(!triggerAnimation);
                          }}
                          onMouseOut={() => {
                            setBackgroundImage("");
                            // setTriggerAnimation(false);
                          }}
                        >
                          <span>Bangladesh: </span>
                          <a href="mailto:info@quadque.tech">
                            info@quadque.tech
                          </a>
                        </h4>
                      </div>
                      <div className="flex items-center">
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
                          <YoutubeDesktop className="mx-4" />
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
                      </div>
                    </div>
                  </Fade>
                </div>
                {/* <div className="ml-9">
                <Fade duration={"left"}  triggerOnce>
                  <h3 className="text-lg font-medium mb-6">Product</h3>
                  <div>
                    <h4 className="text-sm font-normal mb-2.5">Product</h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      Popup Builder
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">Web-design</h4>
                    <h4 className="text-sm font-normal mb-2.5">Content</h4>
                    <h4 className="text-sm font-normal mb-2.5">Integrations</h4>
                  </div>
                </Fade>
              </div> */}
                <div className="w-2/12 ml-9 font_primary">
                  <Fade duration={"left"} triggerOnce>
                    <h3 className="text-base xl:text-lg font-medium mb-6">
                      Services
                    </h3>
                    <div>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a
                          href={
                            "https://www.quadque.tech/services/software-development"
                          }
                        >
                          Software Development
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a
                          href={
                            "https://www.quadque.tech/services/web-development"
                          }
                        >
                          Web Development
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a
                          href={
                            "https://www.quadque.tech/services/mobile-app-development"
                          }
                        >
                          Mobile App Development
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a
                          href={
                            "https://www.quadque.tech/services/ai-iot-solutions"
                          }
                        >
                          AI & IoT Solutions
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a
                          href={
                            "https://www.quadque.tech/services/e-commerce-development"
                          }
                        >
                          E-Commerce Development
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a
                          href={
                            "https://www.quadque.tech/services/cloud-computing-solutions"
                          }
                        >
                          Cloud Computing Solutions
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a
                          href={
                            "https://www.quadque.tech/services/maintenance-and-support"
                          }
                        >
                          Maintenance And Support
                        </a>
                      </h4>
                    </div>
                  </Fade>
                </div>

                {/* <div className="ml-9">
                <Fade duration={"left"}  triggerOnce>
                  <h3 className="text-lg font-medium mb-6">Resources</h3>
                  <div>
                    <h4 className="text-sm font-normal mb-2.5">Academy</h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      <a href="#blogs">Blog</a>
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">Themes</h4>
                    <h4 className="text-sm font-normal mb-2.5">Hosting</h4>
                    <h4 className="text-sm font-normal mb-2.5">Developers</h4>
                    <h4 className="text-sm font-normal mb-2.5">Support</h4>
                  </div>
                </Fade>
              </div> */}

                <div className="w-2/12 ml-9 font_primary">
                  <Fade duration={"left"} triggerOnce>
                    <h3 className="text-base xl:text-lg font-medium mb-6 font_primary">
                      Company
                    </h3>
                    <div>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        {/* <Link to={"../#about"}>About Us</Link> */}
                        <a href={"https://www.quadque.tech/#about"}>About Us</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"../career"}>Career</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"https://www.quadque.tech/gallery"}>Gallery</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"https://www.quadque.tech/faq"}>FAQ&apos;s</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"../blogs"}>Blogs</a>
                      </h4>
                    </div>
                  </Fade>
                </div>

                <div className="w-4/12 ml-9 font_primary">
                  <Fade duration={"left"} triggerOnce>
                    <h3 className="text-base xl:text-lg font-medium mb-6">
                      Address
                    </h3>
                    <div>
                      <div className="relative">
                        <div className="text-xs xl:text-sm font-normal mb-2 2xl:mb-2.5">
                          <div className="leading-6 mb-2">
                            <p className="flex items-start">
                              <Image
                                className="w-6 mr-2.5"
                                src={address}
                                alt="Address"
                              />
                              <span>
                                Level 1, 7 Greenfield Parade Bankstown, NSW
                                2200, Australia.
                              </span>
                            </p>
                          </div>
                          <div className="leading-6 flex items-start">
                            <span>
                              <BluePhone className="mr-2.5 text-brand-color" />
                            </span>
                            <span>
                              <a href="tel:+61405899496">+61405899496</a>
                            </span>
                          </div>
                        </div>
                        <div
                          className="min-h-full min-w-full absolute top-0 left-0 right-0 bottom-0 bg-transparent z-50"
                          onMouseOver={() => {
                            setBackgroundImage(bgAus);
                            setTriggerAnimation(!triggerAnimation);
                          }}
                          onMouseLeave={() => {
                            setBackgroundImage("");
                          }}
                        ></div>
                      </div>

                      <div className="relative">
                        <div className="text-xs xl:text-sm font-normal mb-2 2xl:mb-2.5">
                          <div className="leading-6 mb-2">
                            <p className="flex items-start">
                              <Image
                                className="w-6 mr-2.5"
                                src={address}
                                alt="Address"
                              />
                              <span>
                                Level -7, 8/C, F.R Tower, Panthapath, Dhaka
                                1207, Bangladesh.
                              </span>
                            </p>
                          </div>

                          <div className="leading-6 flex items-center">
                            <span>
                              <BluePhone className="mr-2.5 text-brand-color" />
                            </span>
                            <span>
                              <a href="tel:+8801765276560">+8801765276560</a>
                            </span>
                          </div>
                        </div>
                        <div
                          className="min-h-full min-w-full absolute top-0 left-0 right-0 bottom-0 bg-transparent z-50"
                          onMouseOver={() => {
                            setBackgroundImage(bgBD);
                            setTriggerAnimation(!triggerAnimation);
                          }}
                          onMouseLeave={() => {
                            setBackgroundImage("");
                          }}
                        ></div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="flex justify-center text-xs pb-2 pt-4 2xl:pt-10">
                Quadque©{year}, All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
