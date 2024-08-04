import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../Constants/constants";
import { githubIcon } from "../assets";

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

function ProjectCard({
  index,
  name,
  description,
  image,
  source_code_link,
  demo_link,
}) {
  return (
    <Tilt
      options={{
        max: 40,
        scale: 1,
        speed: 450,
      }}
      className="shadow-2xl p-5 rounded-lg sm:w-[300px] w-[100%]"
    >
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
          />
        </div>

        <div className="mt-3">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-snug">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mt-2" />
        <div className="flex items-center justify-center mt-3">
          <a
            className="flex justify-center p-2 rounded-lg shadow-md shadow-primary bg-tertiary"
            href={demo_link}
            target="_blank"
            rel="noreferrer"
          >
            See the Demo
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
}

function Works() {
  return (
    <div className="flex flex-wrap justify-center w-full gap-4 mt-5 text-grayscale-50">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  );
}

export default Works;
