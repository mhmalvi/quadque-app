import BlogDetails from "../Components/DesktopLayout/Blogs/BlogDetails";
import BlogDetailsMobile from "../Components/MobileLayout/Blogs/BlogDetails";
import DesktopBaseLayout from "../Components/DesktopLayout/DesktopBaseLayout";
import DesktopFooter from "../Components/Shared/Footer/Desktop";
import NavbarMobile from "../Components/Shared/NavbarMobile";
import MobileFooter from "../Components/Shared/Footer/Mobile";
import Meta from "../utils/Meta";

export default function BlogDetailsPage({ blogs, blogDetails }) {
  return (
    <>
      <Meta
        title={blogDetails?.title}
        url={`${process.env.NEXT_CLIENT_URL}/blogs/${blogDetails?.slug}`}
        description={blogDetails?.meta_description}
        prevImage={`https://latest-server.quadque.tech/public/${blogDetails?.thumbnail}`}
        keywords={blogDetails?.meta_keywords}
      />

      {/* For Desktop  */}
      <div className="hidden lg:block">
        <DesktopBaseLayout>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <BlogDetails blogDetails={blogDetails} blogs={blogs} />
          <div className="w-11/12 mx-auto">
            <DesktopFooter />
          </div>
        </DesktopBaseLayout>
      </div>

      {/* For Mobile  */}
      <div className="block lg:hidden">
        <NavbarMobile />
        <BlogDetailsMobile blogDetails={blogDetails} blogs={blogs} />
        <MobileFooter />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const blogDetails = await fetch(
    `${process.env.NEXT_SERVICE_URL}/api/manage-blogs/${context.params.slug}`
  );
  const blogDetailsRes = await blogDetails.json();

  const res = await fetch(`${process.env.NEXT_SERVICE_URL}/api/manage-blogs`);
  const blogsRes = await res.json();

  return {
    props: {
      blogs: blogsRes?.data,
      blogDetails: blogDetailsRes?.data,
    },
  };
};
