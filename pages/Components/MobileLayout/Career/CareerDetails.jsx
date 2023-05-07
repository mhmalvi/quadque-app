import Image from "next/image";
import LottiePlayer from "../../Shared/LottiePlayer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import loaderFile from "../../../../public/assets/Lotties/loader.json";
import GoBackArrow from "../../../../public/assets/Icons/go-back-arrow.svg";
import NavbarMobile from "../../Shared/NavbarMobile";
import MobileFooter from "../../Shared/Footer/Mobile";

export default function CareerDetails({ careerDetails }) {
  console.log("careerDetails", careerDetails);
  const router = useRouter();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (careerDetails?.id) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [careerDetails]);

  return (
    <div className="bg-black">
      {loader ? (
        <div className="w-[95%] h-full z-40 flex flex-col justify-center items-center absolute top-0 left-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <span className="w-48">
            <LottiePlayer animationData={loaderFile} />
          </span>
          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : (
        <div className="w-full text-white font_primary bg-black pt-24">
          <Image
            src={careerDetails?.thumbnail}
            alt="Job Thumbnail"
            className="w-full relative z-50"
            width={500}
            height={500}
          />
          <div className="px-6">
            <div className="text-xl text-center py-6">
              {/* Backend Software Developer */}
              {careerDetails?.position}
            </div>

            {careerDetails?.summary ? (
              <div className="pb-5">
                <p className="text-lg text-zinc-400">Summary:</p>
                <p className="text-sm">{careerDetails?.summary}</p>
              </div>
            ) : null}

            <div className="pb-5">
              <p className="text-lg text-zinc-400">Job Responsibility:</p>
              <ul className="list-disc text-justify pl-6">
                {careerDetails?.responsibility?.map((resp, i) => (
                  <li key={i} className="text-sm py-1">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {careerDetails?.requirements?.length ? (
              <div className="pb-5">
                <p className="text-lg text-zinc-400">Job Requirements:</p>
                <ul className="list-disc text-justify pl-6">
                  {careerDetails?.requirements?.map((requirement, i) => (
                    <li key={i} className="text-sm py-1">
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {careerDetails?.edu_requirement?.length ? (
              <div className="pb-5">
                <p className="text-lg text-zinc-400">
                  Educational Requirements:
                </p>{" "}
                <ul className="list-disc text-justify pl-6">
                  {careerDetails?.edu_requirement?.map((resp, i) => (
                    <li key={i} className="text-sm py-1">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="pb-5">
              <p className="text-lg text-zinc-400">Salary:</p>
              <ul className="list-disc text-justify pl-6">
                <li className=" text-sm py-1">{careerDetails?.salary}</li>
              </ul>
            </div>

            <div className="pb-5">
              <p className="text-lg text-zinc-400">
                Compensation & Other Benefits:
              </p>{" "}
              <ul className="list-disc text-justify pl-6">
                {careerDetails?.additional?.map((resp, i) => (
                  <li key={i} className="text-sm py-1">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 border border-zinc-700 backdrop-filter backdrop-blur-sm rounded-md p-3 text-sm">
              <div className="pt-0">
                <span className=" text-zinc-400"> Published on:</span> <br />{" "}
                {careerDetails?.published_on}
                <div className="h-0.5 bg-zinc-700 mt-2"></div>
              </div>

              <div className="pt-2">
                <span className=" text-zinc-400">Vacancy:</span> <br />{" "}
                {careerDetails?.vacancy}
                <div className="h-0.5 bg-zinc-700 mt-2"></div>
              </div>

              <div className="pt-2">
                <span className=" text-zinc-400">Employment Status:</span>{" "}
                <br /> {careerDetails?.employment_status}
                <div className="h-0.5 bg-zinc-700 mt-2"></div>
              </div>

              <div className="pt-2">
                <span className=" text-zinc-400">Office Time:</span> <br />{" "}
                {careerDetails?.office_time}
                <br /> {careerDetails?.office_days}
                <div className="h-0.5 bg-zinc-700 mt-2"></div>
              </div>

              {careerDetails?.experience_req ? (
                <div className="pt-2">
                  <span className=" text-zinc-400">Experience:</span> <br />{" "}
                  {careerDetails?.experience_req}
                  <div className="h-0.5 bg-zinc-700 mt-2"></div>
                </div>
              ) : null}

              {careerDetails?.app_deadline ? (
                <div className="pt-2">
                  <span className=" text-zinc-400">Application Deadline:</span>{" "}
                  <br /> {careerDetails?.app_deadline}
                </div>
              ) : null}

              <div className="text-xs font-light italic py-4">
                <span className="font-semibold text-red-500 text-base mr-1">
                  *
                </span>
                <span>
                  Only shortlisted candidates will be contacted for the next
                  step of the selection process. Thank you!
                </span>
              </div>

              <div className="flex justify-center items-center">
                <a
                  href={careerDetails?.appying_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-40 border cursor-pointer bg-black text-white text-lg text-center py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-50">
                    Apply
                  </div>
                </a>
              </div>
            </div>

            <Link href={`/career`}>
              <div
                className="w-44 flex text-sm pt-2 pb-6 mt-10 mx-auto px-6 rounded-full"
                onClick={() => setLoader(true)}
              >
                <GoBackArrow width={20} className="mx-3 go-back-arrow" />
                Go Back
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
