import { useInView } from "@react-spring/web";
import { motion, useAnimation } from "framer-motion";
import * as React from "react";

interface PropsI {
  children: JSX.Element;
}

export const Reveal = ({ children }: PropsI) => {
  const ref = React.useRef(null) as any;
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
