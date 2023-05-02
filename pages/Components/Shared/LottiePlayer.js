import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const LottiePlayer = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && animationData) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
      return () => {
        anim.destroy(); // Cleanup animation when the component unmounts
      };
    }
  }, [animationData]);

  return <span ref={containerRef}></span>;
};

export default LottiePlayer;
