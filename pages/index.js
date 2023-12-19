import { useEffect } from "react";
import Meta from "./utils/Meta";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/blogs");
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Meta />
      
      Loading...
      {/* <div className="bg-black">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="hidden lg:block">
          <DesktopBaseLayout>
            <div className="w-full">
              <LandingPage servicesData={servicesData} />
            </div>
            <div className="w-11/12 mx-auto">
              <DesktopFooter />
            </div>
          </DesktopBaseLayout>
        </div>
        <div className="block lg:hidden">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <BlogsGallery blogs={blogs} />
        </div>
      </div> */}
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     // "https://qqtech-server.quadque.digital/api/manage-blogs"
//     `${process.env.NEXT_SERVICE_URL}/api/services`
//   );
//   const servicesRes = await res.json();

//   return {
//     props: { servicesData: servicesRes?.data },
//   };
// };
