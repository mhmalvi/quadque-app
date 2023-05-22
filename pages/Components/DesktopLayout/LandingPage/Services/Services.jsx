import { Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import loaderFile from "../../../../../public/assets/Lotties/loader.json";
// import UI_UX from "../../../../asstes/Lotties/ux.json";
import aIIot from "../../../../../public/assets/Lotties/ai_and_ito.json";
import AppDev from "../../../../../public/assets/Lotties/applicatiopn_development.json";
import softDevs from "../../../../../public/assets/Lotties/software developtment.json";
import webDev from "../../../../../public/assets/Lotties/web_development.json";
import eCom from "../../../../../public/assets/Lotties/ecommerce.json";
import CyberSecurity from "../../../../../public/assets/Lotties/cyber-security.json";
import Cloud from "../../../../../public/assets/Lotties/cloud-computing22.json";
import Maintenance from "../../../../../public/assets/Lotties/maintanance.json";
import sapErp from "../../../../../public/assets/Lotties/ERP.json";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import LottiePlayer from "../../../Shared/LottiePlayer";
import { useRouter } from "next/router";

const Services = ({ servicesData }) => {
  console.log("servicesData", servicesData);

  const router = useRouter();
  //   const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState();
  const [activeServiceDetails, setActiveDetails] = useState({});
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [loader, setLoader] = useState(true);

  console.log("activeService", activeService);

  //   useEffect(() => {
  //     console.log("router", router);

  //     if (router?.asPath === "/#landing" || router?.asPath === "/services") {
  //       // if (location.hash === "#services" || location.pathname === "/services") {
  //       //   (async () => {
  //       //     const response = await handleFetchServices();
  //       //     if (response) {
  //       //       setServices(response);
  //       //     }
  //       //   })();
  //     }
  //   }, []);

  //   useEffect(() => {
  //     setActiveService(services[0]?.service_name);
  //     if (location.hash === "#services" || location.pathname === "/services") {
  //       synth.cancel();

  //       setTimeout(() => {
  //         if (services?.length) {
  //           setLoader(false);
  //         }
  //         setTriggerAnimation(true);
  //       }, 800);
  //     }

  //     if (services?.length) {
  //       setLoader(false);
  //     }

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [location, services]);

  useEffect(() => {
    let i = 1;

    // setInterval(() => {
    //   i++;
    //   if (i > services?.length - 1) {
    //     i = 0;
    //   }
    //   setActiveService(services[i]?.service_name);
    // }, 15000);

    setActiveService(servicesData[0]?.service_name);
  }, [servicesData]);

  // console.log("services", services);

  useEffect(() => {
    setActiveDetails(
      servicesData?.find((service) => service.service_name === activeService)
    );

    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [activeService, servicesData]);

  return (
    <div className="w-full lg:h-[80vh] 2xl:h-[90vh] relative text-white flex justify-between font_primary lg:pt-5 lg:pb-6 2xl:pb-[75px] overflow-x-hidden">
      <div className="w-[255px] min-h-full flex flex-col justify-between pl-6">
        <div>
          <Fade direction="left" duration={300} delay={100} cascade>
            <div>
              <h1
                id="service_name"
                className={`font-bold lg:text-3xl 2xl:text-5xl font_title`}
              >
                {activeServiceDetails?.service_name}
              </h1>
              <p className="mt-8 text-sm 2xl:text-base">
                {activeServiceDetails?.short_description}
              </p>
              <Fade left cascade>
                <div className="mt-8 text-justify">
                  {activeServiceDetails?.description ? (
                    <p className="text-white font-semibold mt-4 text-lg hover:text-opacity-90 cursor-pointer">
                      <Tooltip
                        placement="right"
                        title={
                          <span className="text-white font-semibold">
                            Details On {activeService}
                          </span>
                        }
                        color={"rgba(90, 90, 90, 0.7)"}
                      >
                        <Link
                          href={`../services/${activeServiceDetails?.slug}`}
                        >
                          <button
                            className="spirit-bomb px-6 py-2 bg-transparent text-xs font-semibold leading-4 capitalize text-white font_title"
                            style={{
                              letterSpacing: "0.04em",
                              borderRadius: "30px",
                            }}
                          >
                            Learn More
                          </button>
                        </Link>
                      </Tooltip>
                    </p>
                  ) : null}
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>

      <Fade direction="left" duration={300} delay={100}>
        <div
          className="min-h-full w-11/12 mx-auto flex justify-center items-center"
          style={{ maxWidth: "45%" }}
        >
          {activeService?.includes("IoT") ? (
            <Link href={`../services/ai-iot-solutions`}>
              <LottiePlayer animationData={aIIot} />
            </Link>
          ) : null}

          {activeService?.includes("Mobile") ? (
            <Link href={`../services/mobile-app-development`}>
              <LottiePlayer animationData={AppDev} />
            </Link>
          ) : null}

          {activeService?.includes("Software") ? (
            <Link href={`../services/software-development`}>
              <LottiePlayer animationData={softDevs} />
            </Link>
          ) : null}

          {activeService?.includes("Web") ? (
            <Link href={`../services/web-development`}>
              <LottiePlayer animationData={webDev} />
            </Link>
          ) : null}

          {activeService?.includes("Cyber") ? (
            <Link href={`../services/cyber-security`}>
              <LottiePlayer animationData={CyberSecurity} />
            </Link>
          ) : null}

          {activeService?.includes("E-commerce") ? (
            <Link href={`../services/e-commerce-development`}>
              <LottiePlayer animationData={eCom} />
            </Link>
          ) : null}

          {activeService?.includes("Cloud") ? (
            <Link href={`../services/cloud-computing-solutions`}>
              <LottiePlayer animationData={Cloud} />
            </Link>
          ) : null}

          {activeService?.includes("Maintenance") ? (
            <Link href={`../services/maintenance-and-support`}>
              <LottiePlayer animationData={Maintenance} />
            </Link>
          ) : null}

          {activeService?.includes("ERP") ? (
            <Link href={`../services/sap-erp-solutions`}>
              <LottiePlayer animationData={sapErp} />
            </Link>
          ) : null}
        </div>
      </Fade>

      <div className="w-68 pr-10 min-h-full text-xl font-medium leading-8 capitalize flex flex-col justify-between">
        <Fade direction="left" duration={300} delay={100} cascade>
          <div className="pt-18 mt-0.5">
            {servicesData?.map((service, i) => (
              <p
                key={i}
                className={`whitespace-nowrap text-base 2xl:text-xl ${
                  activeService === service?.service_name
                    ? "text-brand-color transition-colors delay-200"
                    : "text-white transition-colors delay-200"
                } cursor-pointer mb-2.5`}
                onClick={() => setActiveService(service?.service_name)}
              >
                {service?.service_name}
              </p>
            ))}
          </div>

          <div>
            <a href="#start-project">
              <button
                className="spirit-bomb  w-[252px] h-[46px] bg-transparent text-[15px] font-semibold leading-4 capitalize text-white font_title"
                style={{
                  letterSpacing: "0.04em",
                  borderRadius: "30px",
                }}
              >
                START A PROJECT
              </button>
            </a>
          </div>
        </Fade>
      </div>

      <div>
        {loader ? (
          <div className="min-w-full z-50 min-h-screen flex flex-col justify-center items-center absolute top-0 -left-8 bg-black backdrop-blur-md bg-opacity-80">
            <LottiePlayer
              className="w-1/6 mx-auto"
              animationData={loaderFile}
            />
            <div className="font_title text-3xl font-semibold text-white">
              Loading...
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Services;
