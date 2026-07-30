import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const SocialLink = ({ href, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={springProps}
      className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
    </animated.a>
  );
};

export default SocialLink;
