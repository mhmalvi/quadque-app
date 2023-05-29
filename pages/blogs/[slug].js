import BlogDetails from "../Components/DesktopLayout/Blogs/BlogDetails";
import BlogDetailsMobile from "../Components/MobileLayout/Blogs/BlogDetails";
import DesktopBaseLayout from "../Components/DesktopLayout/DesktopBaseLayout";
import DesktopFooter from "../Components/Shared/Footer/Desktop";
import NavbarMobile from "../Components/Shared/NavbarMobile";
import MobileFooter from "../Components/Shared/Footer/Mobile";
import Meta from "../utils/Meta";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogDetailsPage({ blogDetails }) {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const blogRes = await axios.get(
          `https://qqtech-server.quadque.digital/api/manage-blogs`
        );
        console.log("blogRes.data", blogRes.data);
        console.log("blogRes?.data", blogRes?.data?.data);

        if (blogRes?.data?.status === 200) {
          setAllBlogs(blogRes?.data?.data);
        }
      } catch (error) {
        console.log(error.response?.data);
      }
    })();
  }, []);

  return (
    <>
      <Meta
        title={blogDetails?.title}
        url={`${process.env.NEXT_CLIENT_URL}/blogs/${blogDetails?.slug}`}
        description={blogDetails?.meta_description}
        prevImage={`https://qqtech-server.quadque.digital/public/${blogDetails?.thumbnail}`}
        keywords={blogDetails?.meta_keywords}
      />

      {/* For Desktop  */}
      <div className="hidden lg:block">
        <DesktopBaseLayout>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <BlogDetails blogDetails={blogDetails} blogs={allBlogs} />
          <div className="w-11/12 mx-auto">
            <DesktopFooter />
          </div>
        </DesktopBaseLayout>
      </div>

      {/* For Mobile  */}
      <div className="block lg:hidden">
        <NavbarMobile />
        <BlogDetailsMobile blogDetails={blogDetails} blogs={allBlogs} />
        <MobileFooter />
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  console.log("context.params.slug", context?.params?.slug);
  const axiosInstance = axios.create({
    timeout: 60000,
  });
  try {
    const blogDetailsRes = await axiosInstance.get(
      // `${process.env.NEXT_SERVICE_URL}/api/manage-blogs/${context.params.slug}`
      `https://qqtech-server.quadque.digital/api/manage-blogs/${context?.params?.slug}`
    );

    if (blogDetailsRes?.data?.status === 200) {
      return {
        props: {
          blogDetails: blogDetailsRes?.data?.data,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: { blogDetails: {} },
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const blogRes = await axios.get(
      `https://qqtech-server.quadque.digital/api/manage-blogs`
    );

    if (blogRes?.data?.status === 200) {
      const paths = blogRes?.data?.data?.map((blog) => {
        return {
          params: { slug: `${blog?.slug}` },
        };
      });

      return {
        paths,
        fallback: false,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
// export const getServerSideProps = async (context) => {
//   const blogDetails = await fetch(
//     `${process.env.NEXT_SERVICE_URL}/api/manage-blogs/${context.params.slug}`
//   );
//   const blogDetailsRes = await blogDetails.json();

//   const res = await fetch(`${process.env.NEXT_SERVICE_URL}/api/manage-blogs`);
//   const blogsRes = await res.json();

//   return {
//     props: {
//       blogs: blogsRes?.data,
//       blogDetails: blogDetailsRes?.data,
//     },
//   };
// };
