import { Tooltip } from "antd";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Meta from "../../../utils/Meta";
import Link from "next/link";
import GoBackArrow from "../../../../public/assets/Icons/go-back-arrow.svg";
import loaderFile from "../../../../public/assets/Lotties/loader.json";
import speakLogo from "../../../../public/assets/Lotties/speak.json";
import LottiePlayer from "../../Shared/LottiePlayer";
import { useRouter } from "next/router";

const BlogDetails = ({ blogDetails, blogs }) => {
  // const { speak } = useSpeechSynthesis();
  const router = useRouter();
  const blogdetailsRef = useRef();
  const [randomBlogData, setRandomBlogData] = useState([]);
  const [loader, setLoader] = useState(false);
  // const synth = window.speechSynthesis;

  useEffect(() => {
    setLoader(true);

    if (blogDetails?.id) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }

    const NextBlogs = [];
    let i;

    let currentBlogIndex = blogs?.findIndex(
      (x) => x.slug === blogDetails?.slug
    );
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
    <div>
      {loader ? (
        <div className="w-[95%] h-full z-40 flex flex-col justify-center items-center m-auto absolute top-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <span className="w-48">
            <LottiePlayer animationData={loaderFile} />
          </span>
          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : null}

      <div
        className="blog_details min-h-full bg-black text-white py-20 px-36 h-[90vh] overflow-y-auto font_primary"
        ref={blogdetailsRef}
      >
        <div className="mb-10">
          <GoBackArrow
            className="w-6 font-semibold cursor-pointer text-white"
            onClick={() => {
              setLoader(true);
              router.push(`/blogs`);
            }}
          />
        </div>

        <div>
          <h4 className="text-lg font-normal leading-4 mb-3 text-white">
            {new Date(blogDetails?.created_at).toString().slice(0, 15)}
          </h4>
        </div>

        {/* <div>
          <FacebookShareButton
            url={`https://www.quadque.tech/blog/${blogDetails?.slug}`}
            quote={blogDetails?.title}
            openGraph={{
              url: `https://www.quadque.tech/blog/${blogDetails?.slug}`,
              title: blogDetails?.title,
              description: blogDetails?.meta_description,
              images: [
                {
                  url:
                    process.env.REACT_APP_ASSETS_URL +
                    "/" +
                    blogDetails?.thumbnail,
                  width: 1200,
                  height: 630,
                  alt: "Blog",
                },
              ],
            }}
          >
            <FaFacebook size={32} round />
          </FacebookShareButton>
        </div> */}

        <div className="relative">
          <div
            className="blog_details_section"
            dangerouslySetInnerHTML={{ __html: blogDetails?.text }}
          ></div>

          <Tooltip
            placement="top"
            title={`Click to "Listen". Double Click to "Stop"`}
            color={"rgba(90, 90, 90, 0.7)"}
          >
            <button
              className="absolute -top-12 right-10"
              onClick={() =>
                speak({
                  text: blogDetails?.text,
                })
              }
              onDoubleClick={() => synth.cancel()}
            >
              <div className="w-16">
                <LottiePlayer animationData={speakLogo} />
              </div>
            </button>
          </Tooltip>
        </div>

        <div>
          <hr />
          <div className="py-11 mb-8">
            <div className="text-[32px]">Other interesting posts</div>
          </div>

          {randomBlogData?.map((blog, i) => (
            <Link
              href={`../blogs/${blog?.slug}`}
              key={i}
              onClick={() => {
                setLoader(true);
                setTimeout(() => {
                  blogdetailsRef?.current?.scrollTo(0, 0);
                }, 2000);
              }}
            >
              <div className="flex justify-between items-center my-4 cursor-pointer">
                <div className="lg:max-w-md xl:max-w-xl 2xl:max-w-4xl">
                  <div className="text-sm font-normal leading-4">
                    <span className="uppercase">Weekly updates</span>{" "}
                    <span className="font-medium ml-2">
                      {new Date(blog?.created_at).toString().slice(0, 15)}
                    </span>
                  </div>
                  <div className="mt-8 h-19 overflow-hidden">
                    <div className="text-[28px] font-normal leading-9">
                      {blog?.title}
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <p className="text-lg font-normal leading-7 text-white text-opacity-50">
                      {blog?.short_description?.slice(0, 100)}...
                    </p>
                  </div>
                </div>
                <div className="lg:w-[276px] 2xl:w-96 lg:h-[200px] 2xl:h-56">
                  <Image
                    className="w-full h-full"
                    src={
                      "https://qqtech-server.quadque.digital/public/" +
                      blog?.thumbnail
                    }
                    alt="Thumbnail"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-500 bg-opacity-10" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
