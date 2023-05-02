import BlogsGallery from "../Components/MobileLayout/Blogs";
import Blogs from "../Components/DesktopLayout/Blogs";
import DesktopBaseLayout from "../Components/DesktopLayout/DesktopBaseLayout";
import DesktopFooter from "../Components/Shared/Footer/Desktop";
import Meta from "../utils/Meta";

export default function Home({ blogs }) {
  return (
    <div>
      <Meta />
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
          <BlogsGallery blogs={blogs} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    // "https://latest-server.quadque.tech/api/manage-blogs"
    `${process.env.NEXT_SERVICE_URL}/api/manage-blogs`
  );
  const blogRes = await res.json();

  return {
    props: { blogs: blogRes?.data },
  };
  // }
};
