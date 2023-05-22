import Typical from "react-typical";
// import headerVideo from "../../../../public/assets/Video/headerVideo.mp4";
import headerImage from "../../../../public/assets/Images/header_img.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="section overflow-hidden relative bg-black header_section">
      <Image
        src={headerImage}
        className="w-[102%] h-full"
        width={500}
        alt="Header_Image"
      />

      {/* <video
        className="h-[100%] w-full"
        src={headerVideo}
        loop={"loop"}
        muted
        autoPlay
      ></video> */}

      <div
        className="absolute text-white top-[30%] lg:right-[10%] xl:right-[15%] 2xl:right-[19.5%]"
        style={{
          zIndex: "9999",
        }}
      >
        <Typical
          className="w-40 text-white lg:text-4.5xl xl:text-[54px] 2xl:text-[60px] font-bold leading-10 font_title xl:leading-12 2xl:leading-[70px] font_primary capitalize"
          steps={[
            "Innovate",
            1500,
            "Innovate Connect",
            2000,
            "Innovate Connect Transform",
            1500,
            // "Innovative Solutions? We Got You!",
            // 5000,
          ]}
          loop={Infinity}
          wrapper="h2"
        />
      </div>
    </div>
  );
};

export default Header;
