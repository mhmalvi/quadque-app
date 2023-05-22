import axios from "axios";
import Blogs from "../Components/DesktopLayout/Blogs";
import DesktopBaseLayout from "../Components/DesktopLayout/DesktopBaseLayout";
import BlogsGallery from "../Components/MobileLayout/Blogs";
import DesktopFooter from "../Components/Shared/Footer/Desktop";
import MobileFooter from "../Components/Shared/Footer/Mobile";
import NavbarMobile from "../Components/Shared/NavbarMobile";
import Meta from "../utils/Meta";

export default function BlogPage({ blogs }) {
  // console.log("blogs", blogs);
  return (
    <div>
      <Meta
        title={"Blog - Get The Best Online IT Services for Business - Quadque"}
        url={`${process.env.NEXT_CLIENT_URL}/blogs`}
        description={
          "Look at our informative blogs, where we discuss various interesting topics related to the IT industry, such as website development , UI/UX design and digital marketing and so on."
        }
        keywords={""}
      />

      <div className="bg-black">
        <div className="hidden lg:block">
          <DesktopBaseLayout>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="w-9/12 mx-auto my-24">
              <Blogs blogs={blogs} />
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
            <BlogsGallery blogs={blogs} />
            <MobileFooter />
          </>
        </div>
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${process.env.NEXT_SERVICE_URL}/api/manage-blogs`);
//   const blogRes = await res.json();

//   return {
//     props: { blogs: blogRes?.data },
//   };
//   // }
// };
export const getStaticProps = async () => {
  try {
    const blogRes = await axios.get(
      `https://qqtech-server.quadque.digital/api/manage-blogs`
    );
    console.log("blogRes.data", blogRes.data);
    console.log("blogRes?.data", blogRes?.data?.data);

    if (blogRes?.data?.status === 200) {
      return {
        props: { blogs: blogRes?.data?.data },
      };
    }
  } catch (error) {
    console.log(error.response?.data);
    return {
      props: { blogs: [] },
    };
  }
};
