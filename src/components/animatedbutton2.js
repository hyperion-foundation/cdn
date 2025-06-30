"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimatedButton({
  children,
  className = "",
  ...props
}) {
  const buttonRef = useRef(null);
  const timeline = useRef(null);

  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true });

    timeline.current
      .to(buttonRef.current.querySelector(".fill"), {
        width: "100%",
        ease: "power3.inOut",
        duration: 0.4,
      })
      .to(buttonRef.current.querySelector(".text"), {
        color: "black",
        ease: "power3.inOut",
        duration: 0.2,
      }, "<15%");

  }, { scope: buttonRef });

  const handleMouseEnter = () => {
    timeline.current.play();
  };

  const handleMouseLeave = () => {
    timeline.current.reverse();
  };

  return (
    <button
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center px-5 py-2 bg-[#0a0a0a] border rounded-md border-gray-600 overflow-hidden text-white ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="fill absolute top-0 left-0 h-full w-0 bg-[#ededed]" />
      <span className="text relative z-10">
        {children}
      </span>
    </button>
  );
}
