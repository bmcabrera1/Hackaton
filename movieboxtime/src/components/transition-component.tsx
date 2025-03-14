import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion-transitions";

export type MotionTransitionProps = {
  children: React.ReactNode;
  className?: string;
  position: "right" | "bottom";
};

export function MotionTransition(props: MotionTransitionProps) {
  console.log("MotionTransition renderizado");
  const { children, className, position } = props;

  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}
