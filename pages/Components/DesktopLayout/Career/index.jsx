import { Pagination } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import GoBackArrow from "../../../../public/assets/Icons/go-back-arrow.svg";
import loaderFile from "../../../../public/assets/Lotties/loader.json";
import Image from "next/image";
import { useRouter } from "next/router";
import LottiePlayer from "../../Shared/LottiePlayer";

const Career = ({ allCareerPosts }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(8);
  const [careerPosts, setCareerPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const indexOfLastPost = currentPage * PostsPerPage;
    const indexOfFirstPost = indexOfLastPost - PostsPerPage;
    const currentPosts = allCareerPosts?.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    if (currentPosts !== "") {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }

    setCareerPosts(
      currentPosts
        ?.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1))
        .reverse()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, setLoader, allCareerPosts]);

  return (
    <div className="min-h-full bg-black text-white py-20 px-36 font_primary">
      {loader ? (
        <div className="w-[95%] h-full z-40 flex flex-col justify-center items-center absolute top-0 left-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <span className="w-48">
            <LottiePlayer animationData={loaderFile} />
          </span>
          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : (
        <div>
          <div className="mb-10">
            <GoBackArrow
              className="w-6 font-semibold cursor-pointer"
              onClick={() => {
                router.push(`../#contacts`);
                setLoader(true);
              }}
            />
          </div>
          <div className="text-3xl text-white mt-10 px-6 pb-14 font_title">
            Current Job Openings
          </div>
          <div className="Blog w-full px-6 grid grid-cols-3 2xl:grid-cols-4 gap-8 justify-center items-stretch">
            <Fade direction="left" cascade>
              {careerPosts?.map((details, i) => (
                <Link
                  key={i}
                  href={`/career/${details.slug}`}
                  onClick={() => setLoader(true)}
                >
                  <div className="rounded-xl mx-auto pb-6 relative bg-white bg-opacity-20 hover:bg-opacity-25 backdrop-filter backdrop-blur-xl p-1 scale-100 transition delay-200 hover:scale-105 hover:delay-300 hover:transition">
                    <Image
                      src={details.thumbnail}
                      alt="Job Thumbnail"
                      className="w-full h-60 m-auto rounded-lg"
                      width={500}
                      height={500}
                    />
                    <div className="flex justify-between pb-2 px-2 mt-4 gap-4 h-14">
                      <div>
                        <div className="text-lg text-white font-semibold">
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
            </Fade>
          </div>

          {/* PAGINATION */}
          <div className="career_desktop flex justify-center mt-20">
            <Pagination
              onChange={(value) => setCurrentPage(value)}
              pageSize={PostsPerPage}
              current={currentPage}
              total={allCareerPosts?.length}
              showTitle={true}
              className="text-4xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
