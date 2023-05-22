"use client";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import loaderFile from "../../../../public/assets/Lotties/loader.json";
import LottiePlayer from "../../Shared/LottiePlayer";

const BlogsGallery = ({ blogs }) => {
  // console.log("blogs", blogs);
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(4);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (blogs?.length) {
      setLoader(false);
    }

    window.scrollTo(0, 0);
  }, [blogs]);

  useEffect(() => {
    setTotalPosts(blogs?.length);
  }, [blogs]);

  useEffect(() => {
    if (blogs?.length > 0) {
      setTimeout(() => {
        setLoader(false);
      }, 100);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, [blogs]);

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = blogs?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      {loader ? (
        <div className="w-[95%] h-full z-40 flex flex-col justify-center items-center m-auto absolute top-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <span className="w-32">
            <LottiePlayer animationData={loaderFile} />
          </span>
          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : (
        <div>
          <div className="Blog w-full mt-24 font_primary">
            {blogs?.length === 0 && (
              <div className="text-white text-center">No blogs to show.</div>
            )}
            {loader ? (
              <div className="w-full min-h-[100vh] z-50 flex flex-col justify-center items-center m-auto absolute top-0 bg-gradient-to-b from-black via-transparent to-black backdrop-blur-sm">
                <div className="font_title text-white animate-pulse">
                  Loading...
                </div>
              </div>
            ) : null}
            {currentPosts?.map((details, i) => (
              <Link
                key={i}
                href={`/blogs/${details?.slug}`}
                onClick={() => {
                  setLoader(true);
                }}
              >
                <div
                  key={details?.id}
                  className="rounded-xl relative mb-8 mx-6"
                >
                  <Image
                    src={
                      "https://qqtech-server.quadque.digital/public/" +
                      details?.thumbnail
                    }
                    alt="Thumbnail"
                    className="w-full h-full m-auto rounded-lg"
                    width={500}
                    height={500}
                  />
                  <div className="w-full flex justify-end items-end h-32 absolute bottom-0 bg-gradient-to-b from-transparent to-black z-10 px-2 text-end">
                    <div>
                      {/* <div className="text-lg text-white font_shadow">
                    {details.title}
                  </div> */}
                      <div className="w-full text-white font_shadow text-sm flex justify-end items-end text-end">
                        By{" "}
                        <span className="font-semibold ml-1">
                          {details?.author}
                        </span>
                      </div>
                      <div className="text-white text-sm">
                        {details?.created_at.split("T", 1)}
                      </div>
                    </div>
                  </div>
                  {/* <div dangerouslySetInnerHTML={{ __html: details.text }} className="text-white"></div> */}
                </div>
              </Link>
            ))}
          </div>
          {/* PAGINATION */}
          <div className="Blog flex justify-center mt-5">
            <Pagination
              onChange={(value) => {
                setCurrentPage(value);
                window.scrollTo(0, 0);
              }}
              pageSize={PostsPerPage}
              current={currentPage}
              total={totalPosts}
              className="text-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsGallery;
