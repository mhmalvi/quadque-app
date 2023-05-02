// "use client";
import { useEffect, useState } from "react";
import Blog from "./Blog";
import { Pagination } from "antd";
import LottiePlayer from "../../Shared/LottiePlayer";
import loaderFile from "../../../../public/assets/Lotties/loader.json";

const Blogs = ({ blogs }) => {
  // console.log("blogs", blogs);

  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(8);
  const [loader, setLoader] = useState(true);
  //console.log("all blogs", blogs);

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
    <>
      {loader ? (
        <div className="w-[95%] h-full z-40 flex flex-col justify-center items-center absolute top-0 left-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <span className="w-48">
            <LottiePlayer animationData={loaderFile} />
          </span>
          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : (
        <div className="text-white">
          <div className="text-3xl text-white font_primary mb-16 mt-6">
            Some Recent Interesting Posts
          </div>
          <div>
            {currentPosts?.map((blog) => (
              <Blog key={blog?.id} blog={blog} setLoader={setLoader}/>
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
    </>
  );
};

export default Blogs;
