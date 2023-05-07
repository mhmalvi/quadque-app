import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import loaderFile from "../../../../public/assets/Lotties/loader.json";
import LottiePlayer from "../../Shared/LottiePlayer";

const Career = ({ allCareerPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(4);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (allCareerPosts?.length > 0) {
      setTimeout(() => {
        setLoader(false);
      }, 100);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, [allCareerPosts]);

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = allCareerPosts
    ?.slice(indexOfFirstPost, indexOfLastPost)
    ?.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1))
    .reverse();

  return (
    <>
      <div className="text-3xl text-white mt-24 px-6 pb-4 font_title">
        Current Job Openings
      </div>
      {currentPosts?.length === 0 && (
        <div className="text-white text-center">No career posts to show.</div>
      )}
      {loader ? (
        <div className="w-[95%] h-full z-40 flex flex-col justify-center items-center absolute top-0 left-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <span className="w-48">
            <LottiePlayer animationData={loaderFile} />
          </span>
          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : null}
      <div className="Career w-full font_primary">
        {currentPosts?.map((details, i) => (
          <Link
            key={i}
            href={`/career/${details.slug}`}
            onClick={() => setLoader(true)}
          >
            <div key={details.id} className="rounded-xl pb-6 relative mx-6">
              <Image
                src={details.thumbnail}
                alt="Job Thumbnail"
                className="rounded-lg"
                width={500}
                height={500}
              />
              <div className="flex items-center justify-between pb-2 px-2 gap-4">
                <div>
                  <div className="text-lg text-white pt-4">
                    {/* Position: {details.position} */}
                    {details.position}
                  </div>
                  {details.app_deadline ? (
                    <div className="text-white text-sm italic font-thin">
                      deadline: {details.app_deadline}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* PAGINATION */}
      <div className="Blog flex justify-center mt-5">
        <Pagination
          onChange={(value) => setCurrentPage(value)}
          pageSize={PostsPerPage}
          current={currentPage}
          total={allCareerPosts?.length}
          className="text-xl"
        />
      </div>
    </>
  );
};

export default Career;
