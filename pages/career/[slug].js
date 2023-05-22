import { useEffect, useState } from "react";
import CareerDetails from "../Components/DesktopLayout/Career/CareerDetails";
import CareerDetailsMobile from "../Components/MobileLayout/Career/CareerDetails";
import DesktopBaseLayout from "../Components/DesktopLayout/DesktopBaseLayout";
import DesktopFooter from "../Components/Shared/Footer/Desktop";
import MobileFooter from "../Components/Shared/Footer/Mobile";
import NavbarMobile from "../Components/Shared/NavbarMobile";
import Meta from "../utils/Meta";

export default function CareerDetailsPage({ career, slug }) {
  const [careerDetails, setCareerDetails] = useState({});

  useEffect(() => {
    setCareerDetails(career?.find((post) => post.slug === slug));
  }, [career, slug]);

  console.log("careerDetails", careerDetails);

  return (
    <>
      <Meta
        title={career?.find((post) => post.slug === slug)?.position}
        url={`${process.env.NEXT_CLIENT_URL}/career/${
          career?.find((post) => post.slug === slug)?.slug
        }`}
        description={career?.find((post) => post.slug === slug)?.summary}
        prevImage={`${career?.find((post) => post.slug === slug)?.thumbnail}`}
        keywords={""}
      />

      {/* For Desktop  */}
      <div className="hidden lg:block">
        <DesktopBaseLayout>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <CareerDetails careerDetails={careerDetails} />
          <div className="w-11/12 mx-auto">
            <DesktopFooter />
          </div>
        </DesktopBaseLayout>
      </div>

      {/* For Mobile  */}
      <div className="block lg:hidden">
        <NavbarMobile />
        <CareerDetailsMobile careerDetails={careerDetails} />
        <MobileFooter />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  console.log(context.params.slug);
  console.log(typeof context.params.slug);
  const allCareer = await fetch(`https://api.npoint.io/803fb7bb194a84a26edf`);
  const careerRes = await allCareer.json();

  return {
    props: {
      career: careerRes,
      slug: context.params.slug,
    },
  };
  //   try {
  //     const careerDetailsResp = await axios.get(
  //       `https://api.npoint.io/803fb7bb194a84a26edf`
  //     );

  //     console.log("careerDetailsResp", careerDetailsResp);

  //     // if (careerDetailsResp?.status === 200) {
  //     return {
  //       props: {
  //         careerDetails: careerDetailsResp,
  //       },
  //     };
  //     // }
  //   } catch (error) {
  //     return {
  //       props: { careerDetails: [] },
  //     };
  //   }
};
