import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
// import "../MobileView.css";
import Link from "next/link";
import Meta from "../../../utils/Meta";
import GoBackArrow from "../../../../public/assets/Icons/go-back-arrow.svg";
import loaderFile from "../../../../public/assets/Lotties/loader.json";
import LottiePlayer from "../../Shared/LottiePlayer";

const BlogDetails = ({ blogDetails, blogs }) => {
  const router = useRouter();
  const loaderRef = useRef(null);
  const [randomBlogData, setRandomBlogData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  console.log("randomBlogData", randomBlogData);

  useEffect(() => {
    setLoader(true);

    if (blogDetails?.id) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }

    const NextBlogs = [];
    let currentBlogid = blogDetails?.slug;
    let i;

    let currentBlogIndex = blogs?.findIndex((x) => x.id === currentBlogid);
    let nextBlogIndex = currentBlogIndex;
    for (i = 0; i < 4; i++) {
      if (nextBlogIndex < blogs?.length - 1) {
        nextBlogIndex++;
        NextBlogs.push(blogs[nextBlogIndex]);
      } else {
        nextBlogIndex = 0;
        NextBlogs.push(blogs[nextBlogIndex]);
      }
      setRandomBlogData(NextBlogs);
    }
  }, [blogDetails, blogs]);

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Meta
        title={blogDetails?.title}
        url={`${process.env.NEXT_CLIENT_URL}/${blogDetails?.slug}`}
        description={blogDetails?.meta_description}
        prevImage={`https://qqtech-server.quadque.digital/public/${blogDetails?.thumbnail}`}
        keywords={blogDetails?.meta_keywords}
      />

      {loader ? (
        <div className="w-full h-full z-40 flex flex-col justify-center items-center m-auto absolute top-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <div className="w-32">
            <LottiePlayer animationData={loaderFile} />
          </div>
          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : (
        <div
          className={`w-full pt-20 font_primary bg-black ${
            !blogDetails?.id ? "scale-0" : ""
          } `}
        >
          {/* <div className="w-full h-[5.75rem] bg-black absolute top-0"></div> */}
          <Image
            src={`https://qqtech-server.quadque.digital/public/${blogDetails?.thumbnail}`}
            alt="Thumbnail"
            className="w-full"
            width={500}
            height={500}
          />
          <div className="px-6 pb-10 text-white">
            <div className="text-2xl">
              {/* <h1 className="font_title text-shadow">{blogDetails?.title}</h1> */}
              <div className="text-sm">
                -By{" "}
                <span className="font-semibold ml-1">
                  {blogDetails?.author}
                </span>
              </div>
              <div className="text-sm">
                {blogDetails?.created_at.split("T", 1)}
              </div>
            </div>
          </div>
          <div className="px-6">
            {/* <div className="bestforyou text-white pt-2" dangerouslySetInnerHTML={{ __html: blogDetails?.text }}></div> */}
            <div
              className="BlogDetail text-white pt-2"
              dangerouslySetInnerHTML={{ __html: blogDetails?.text }}
            ></div>
          </div>
          <Link href={`/blogs`}>
            <div className="w-44 flex justify-center bg-black text-white py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-50 font_title">
              <GoBackArrow
                width={20}
                className="mx-3 go-back-arrow whitespace-nowrap"
              />
              Go Back
            </div>
          </Link>

          {/* RANDOM BLOGS SUGGESTION SECTION */}
          <div className="px-6">
            <div className="text-zinc-500 text-2xl pb-5">
              Other interesting posts
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {randomBlogData?.map((post) => (
                <Link
                  href={`../blogs/${post?.slug}`}
                  key={post?.id}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.scrollTo(0, 0);
                    }
                    setLoader(true);
                  }}
                >
                  <div key={post?.id} className="w-32 pb-5">
                    <Image
                      src={`https://qqtech-server.quadque.digital/public/${post?.thumbnail}`}
                      alt="Thumbnail"
                      className="w-36 h-36 rounded-lg mb-2"
                      width={500}
                      height={500}
                    />
                    <div className="text-white leading-5">{post?.title}</div>
                    <div className=" text-white text-xs">
                      {post?.created_at.split("T", 1)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
