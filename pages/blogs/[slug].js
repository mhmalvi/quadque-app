import axios from "axios";
import { useEffect, useState } from "react";
import BlogDetails from "../Components/DesktopLayout/Blogs/BlogDetails";
import DesktopBaseLayout from "../Components/DesktopLayout/DesktopBaseLayout";
import BlogDetailsMobile from "../Components/MobileLayout/Blogs/BlogDetails";
import MobileFooter from "../Components/Shared/Footer/Mobile";
import NavbarMobile from "../Components/Shared/Navbar/NavbarMobile";
import Meta from "../utils/Meta";

export default function BlogDetailsPage({ blogMetaDetails }) {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogDetails, setBlogDetails] = useState({});

  console.log("blogMetaDetails", blogMetaDetails);

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
    (async () => {
      try {
        const blogDetailsRes = await axios.get(
          `https://qqtech-server.quadque.digital/api/manage-blogs/${blogMetaDetails?.slug}`
        );

        console.log("blogDetailsRes", blogDetailsRes);

        if (blogDetailsRes?.data?.status === 200) {
          setBlogDetails(blogDetailsRes?.data?.data);
        }
      } catch (error) {
        console.log(error.response?.data);
      }
    })();
  }, [blogMetaDetails]);

  return (
    <>
      <Meta
        title={blogMetaDetails?.title}
        url={`${process.env.NEXT_CLIENT_URL}/blogs/${blogMetaDetails?.slug}`}
        description={blogMetaDetails?.meta_description}
        prevImage={`https://qqtech-server.quadque.digital/public/${blogMetaDetails?.thumbnail}`}
        keywords={blogMetaDetails?.meta_keywords}
      />

      {/* For Desktop  */}
      <div className="hidden lg:block">
        <DesktopBaseLayout>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <BlogDetails blogDetails={blogDetails} blogs={allBlogs} />
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
  // const axiosInstance = axios.create({
  //   timeout: 60000,
  // });
  try {
    const blogMetaDetailsRes = await axios.post(
      // `${process.env.NEXT_SERVICE_URL}/api/manage-blogs/${context.params.slug}`
      `https://qqtech-server.quadque.digital/api/get-meta-tags`,
      {
        slug: context?.params?.slug,
      }
    );

    if (blogMetaDetailsRes?.data?.status === 200) {
      return {
        props: {
          blogMetaDetails: blogMetaDetailsRes?.data?.data,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: { blogMetaDetails: {} },
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
