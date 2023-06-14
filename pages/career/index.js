import axios from "axios";
import DesktopBaseLayout from "../Components/DesktopLayout/DesktopBaseLayout";
import DesktopFooter from "../Components/Shared/Footer/Desktop";
import Meta from "../utils/Meta";
import Career from "../Components/DesktopLayout/Career";
import CareerMoblie from "../Components/MobileLayout/Career";
import MobileFooter from "../Components/Shared/Footer/Mobile";
import NavbarMobile from "../Components/Shared/Navbar/NavbarMobile";

export default function CareerPage({ career }) {
  return (
    <div>
      <Meta
        title={
          "Career - Get The Best Online IT Services for Business - Quadque"
        }
        url={`${process.env.NEXT_CLIENT_URL}/career`}
        description={
          "Do you have the skills to help us make a more significant impact on the IT industry? Want to join our team and contribute your expertise? If so, let's get in touch!"
        }
        keywords={""}
      />

      <div className="bg-black">
        <div className="hidden lg:block">
          <DesktopBaseLayout>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="w-full mx-auto ">
              <Career allCareerPosts={career} />
            </div>
            <div className="w-11/12 mx-auto">
              <DesktopFooter />
            </div>
          </DesktopBaseLayout>
        </div>
        <div className="block lg:hidden">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <>
            <NavbarMobile />
            <CareerMoblie allCareerPosts={career} />
            <MobileFooter />
          </>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const careerResp = await axios.get(
      `https://api.npoint.io/b056fde5204294721f0e`
    );

    if (careerResp?.status === 200) {
      return {
        props: { career: careerResp?.data },
      };
    }
  } catch (error) {
    console.log(error.response?.data);
    return {
      props: { career: [] },
    };
  }
};
