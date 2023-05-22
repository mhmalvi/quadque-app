import React from "react";
import Header from "./Header";
import ServicesContainer from "./Services";
import Navbar from "../../Shared/Navbar";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

const LandingPage = ({ servicesData }) => {
  console.log("servicesData from Landing", servicesData);

  const anchors = [
    "landing",
    "services",
    "about",
    "clients",
    "case-study",
    "client-speak",
    "blogs",
    "start-project",
    "contacts",
  ];

  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection
          style={{
            backgroundColor: "lime",
            height: "100vh",
          }}
        >
          1
        </FullpageSection>
        <FullpageSection
          style={{
            backgroundColor: "coral",
            height: "100vh",
          }}
        >
          2
        </FullpageSection>
        <FullpageSection
          style={{
            backgroundColor: "firebrick",
            height: "100vh",
          }}
        >
          3
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
    // <div className="center_layout_container">
    //   <div>
    //     <Header />
    //     <Header />
    //     <Header />
    //     <Header />
    //     {/* <ServicesContainer servicesData={servicesData} />
    //           <ServicesContainer servicesData={servicesData} />
    //           <ServicesContainer servicesData={servicesData} /> */}
    //   </div>
    // </div>
  );
};

export default LandingPage;
