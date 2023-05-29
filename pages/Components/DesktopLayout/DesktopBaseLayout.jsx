import { Alert, Modal, Space, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
// import siteAudio from "../../../public/assets/Audio/site_audio.mp3";
import muteImg from "../../../public/assets/Images/mute.png";
import unmuteImg from "../../../public/assets/Images/unmute.png";
import welcomeAvatar from "../../../public/assets/Lotties/welcome_avatar.json";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Shared/Navbar";
import BrandLogo from "../../../public/assets/Icons/brandlogo.svg";
import LottiePlayer from "../Shared/LottiePlayer";
import useSound from "use-sound";

const DesktopBaseLayout = ({ children }) => {
  const [play, { stop }] = useSound("/assets/Audio/site_audio.mp3");
  const [playLetsGo] = useSound("/assets/Audio/lets_go.wav");
  const [mouseHover, setMouseHover] = useState(false);
  const [openMenus, setOpenMenus] = useState(false);
  const [showSoundAlert, setShowSoundAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [muted, setMuted] = useState(true);

  // const synth = window?.speechSynthesis;

  useEffect(() => {
    if (!localStorage.getItem("welcome")) {
      setTimeout(() => {
        setShowWelcome(true);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (muted) {
      stop();
    } else {
      play();
    }
  }, [muted]);

  useEffect(() => {
    setTimeout(() => {
      setShowSoundAlert(true);
    }, 3000);

    // document.getElementById("main_container").style.height =
    //   "calc(100vh - 80px)";
    document.getElementById("main_container").style.backgroundColor = "#000000";
  }, []);

  return (
    <div className="w-full h-full">
      <Modal
        style={{
          backgroundColor: "black !important",
          borderRadius: "0",
          scrollbarWidth: "none",
        }}
        open={openMenus}
        onCancel={() => setOpenMenus(false)}
        footer={false}
        width={"100%"}
      >
        <div
          className="absolute top-0 left-0 right-0 h-full w-full"
          onClick={() => setOpenMenus(false)}
        ></div>
        <Navbar setOpenMenus={setOpenMenus} />
      </Modal>

      {/* Outer Layer */}

      {/* Top bar */}
      <div className="absolute top-0 z-50 w-full h-10 bg-white"></div>

      <div className="relative flex justify-center bg-white">
        {/* Left bar */}
        <div className="w-[100px] min-h-full py-10 z-50 absolute left-0 flex flex-col justify-between left_bar bg-white">
          <Link
            href="https://www.quadque.tech"
            alt="Quadque Technologies Limited Logo"
          >
            <BrandLogo className="text-5xl leading-3 mx-auto" />
          </Link>

          <div
            className="-rotate-90 relative cursor-pointer flex justify-center items-center hover:text-brand-color transition-colors delay-150"
            onMouseOver={() => {
              setMouseHover(true);
            }}
            onMouseOut={() => {
              setMouseHover(false);
            }}
            onClick={() => setOpenMenus(true)}
          >
            <span className="uppercase mr-auto font-semibold text-xl leading-[175%] font_primary pr-4">
              menu
            </span>
            <span>
              <div
                className={`${
                  mouseHover ? "w-[18px] bg-brand-color" : "w-[28px] bg-black"
                } float-left transition-all delay-150 ease-in-out h-[3px] mb-2`}
              ></div>
              <div
                className={`${
                  mouseHover ? "w-[28px] bg-brand-color" : "w-[18px] bg-black"
                }  float-left transition-all delay-200 ease-in-out h-[3px]`}
              ></div>
            </span>
          </div>

          <div className="social_media mb-28 -rotate-90 flex justify-center items-center">
            <Tooltip
              placement="right"
              title="Facebook"
              color={"rgba(90, 90, 90, 0.7)"}
              // color={"blue"}
            >
              <a
                href="https://www.facebook.com/quadquetech"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[blue] transition-colors delay-150 "
              >
                fb
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Youtube"
              // color={"#FF0000"}
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#FF0000] transition-colors delay-150 "
              >
                yt
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Instagram"
              // color={"#F701A2"}
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://www.instagram.com/quadquetech/"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#F701A2] transition-colors delay-150 "
              >
                in
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Twitter"
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://twitter.com/QuadqueT"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#00acee] transition-colors delay-150 "
                rel="noreferrer"
              >
                tw
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="LinkedIn"
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://bd.linkedin.com/company/quadque-technologies-ltd"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#0072b1] transition-colors delay-150 "
                rel="noreferrer"
              >
                ln
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Tiktok"
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://www.tiktok.com/@quadque"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#ff0050] transition-colors delay-150 "
                rel="noreferrer"
              >
                tk
              </a>
            </Tooltip>
          </div>
        </div>

        {/* Middle Main container */}
        <div
          id="main_container"
          className="blog_details main_container w-full h-screen my-auto shadow-md overflow-y-auto"
        >
          {children}
        </div>

        {/* Right bar */}

        <div className="relative">
          <div className="absolute top-3 right-10 text-lg font-bold text-black z-50">
            {muted ? (
              <div className="w-8">
                <Tooltip
                  title="Unmute Sound"
                  placement="left"
                  color={"rgba(90, 90, 90, 0.7)"}
                >
                  <div className="text-xl font-bold">&nbsp;</div>
                  <Image
                    className="z-50 cursor-pointer"
                    src={muteImg}
                    alt="Mute"
                    onClick={() => {
                      setMuted(false);
                    }}
                  />
                  <div className="text-xl font-bold">&nbsp;</div>
                </Tooltip>
              </div>
            ) : (
              <div className="w-8">
                <Tooltip
                  title="Mute Sound"
                  placement="left"
                  color={"rgba(90, 90, 90, 0.7)"}
                >
                  <div className="text-xl font-bold">&nbsp;</div>
                  <Image
                    className="z-50 cursor-pointer"
                    src={unmuteImg}
                    onClick={() => {
                      setMuted(true);
                    }}
                    alt="Unmute"
                  />
                  <div className="text-xl font-bold">&nbsp;</div>
                </Tooltip>
              </div>
            )}
          </div>

          <div className="bg-white absolute right-0 h-full">
            <div className="w-[100px] flex flex-col justify-between left_bar">
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div className="mb-9 -rotate-90 flex justify-center items-center">
                <a
                  href="https://www.quadque.tech/#start-project"
                  className="uppercase whitespace-nowrap font-semibold text-xl leading-[175%] font_primary mr-4"
                >
                  start project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 z-50 w-full h-10 bg-white"></div>

      {/* Welcome Message */}
      <div
        className={`${
          showWelcome
            ? "left-0 transition-all delay-700 duration-1000 ease-in-out"
            : "-left-96 transition-all delay-700 duration-1000 ease-in-out"
        } transition-all delay-700 ease-in-out absolute top-0 z-50 flex items-center`}
      >
        <div className="flex items-center relative">
          <div className="w-20">
            <LottiePlayer animationData={welcomeAvatar} />
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div className="bg-white w-4 h-4 rotate-45 rounded-sm">
                &nbsp;
              </div>
              <span className="bg-white px-4 py-2.5 -ml-2.5 font-semibold font_title rounded-md shadow-md">
                Hi There, Welcome
              </span>
            </div>

            <div
              className={`${
                showWelcome
                  ? " w-6 h-6 transition-all delay-700 ease-in-out"
                  : "w-0 h-0 transition-all delay-700 ease-in-out"
              } absolute -top-3.5 -right-4 rounded-full flex justify-center items-center bg-gray-700 text-white cursor-pointer`}
              onClick={() => {
                setShowWelcome(false);
                localStorage.setItem("welcome", false);
              }}
            >
              <span className="-mt-1">x</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sound Permisson */}
      {showSoundAlert ? (
        <div className="absolute top-16 right-32">
          <Alert
            className={`${
              showSoundAlert
                ? "w-96 transition-all delay-700 duration-700 ease-in-out"
                : "w-0 transition-all delay-700 duration-700 ease-in-out"
            } transition-all delay-700 ease-in-out absolute top-0 right-0 z-50 flex items-center font_title`}
            // message="Alert"
            description="Enable sound for a more immersive experience?"
            type="warning"
            action={
              <Space direction="vertical" className="ml-4 flex items-center">
                <button
                  className="w-24 px-3 py-1 rounded-md text-sm font-semibold bg-brand-color text-white font_primary"
                  onClick={() => {
                    setMuted(false);
                    setShowSoundAlert(false);
                    playLetsGo();
                  }}
                >
                  Let&apos;s Go
                </button>
                <button
                  className="w-24 px-3 py-0.5 rounded-md bg-black text-white text-sm font-semibold font_primary"
                  onClick={() => {
                    setMuted(true);
                    setShowSoundAlert(false);
                  }}
                >
                  No
                </button>
              </Space>
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default DesktopBaseLayout;
