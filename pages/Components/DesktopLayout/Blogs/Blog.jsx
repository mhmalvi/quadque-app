import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog, setLoader }) => {
  return (
    <div>
      <Link
        href={`/blogs/${blog?.slug}`}
        key={blog?.id}
        onClick={() => {
          setLoader(true);
        }}
      >
        {/* <div key={blog?.id}> */}
        <div className="flex justify-between items-center my-4 cursor-pointer">
          <div className="lg:max-w-md xl:max-w-xl 2xl:max-w-4xl">
            <div className="text-sm font-normal leading-4">
              <span className="uppercase">Weekly updates</span>{" "}
              <span className="font-medium ml-2">
                {new Date(blog?.created_at).toString().slice(0, 15)}
              </span>
            </div>
            <div className="mt-8 h-19 overflow-hidden">
              <h2 className="text-[24px] font-normal leading-9">
                {blog?.title}
              </h2>
            </div>
            <div className="mt-2.5">
              <p className="h-14 overflow-y-hidden text-lg font-normal leading-7 text-white text-opacity-50">
                {blog?.short_description}
              </p>
            </div>
          </div>
          <div className="lg:w-[276px] 2xl:w-96 lg:h-[200px] 2xl:h-56">
            {/* <img className="w-full h-full" src={blog?.thumbnail} alt="" /> */}
            <Image
              className="w-full h-full"
              //   src={process.env.NEXT_APP_ASSETS_URL + "/" + blog?.thumbnail}
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
    </div>
  );
};

export default Blog;
