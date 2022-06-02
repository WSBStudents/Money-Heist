import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(1200);

  const resize = () => {
    setBreakpoint(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.addEventListener("resize", resize);
    };
  }, []);

  const sm = breakpoint < 600;
  const md = breakpoint < 900;
  const lg = breakpoint < 1200;

  return {
    sm,
    md,
    lg,
  };
};

export default useBreakpoint;
