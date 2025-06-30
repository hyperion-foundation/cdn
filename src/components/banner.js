"use client";
import { useState, useRef } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { gsap } from "gsap";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.isDismissible=true]
 */
export default function SiteBanner({ children, isDismissible = true }) {
  const [isVisible, setIsVisible] = useState(true);
  const bannerRef = useRef(null);

  const handleDismiss = () => {
    gsap.to(bannerRef.current, {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        setIsVisible(false);
      },
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={bannerRef}
      className="relative flex items-center justify-center overflow-hidden bg-zinc-800 px-12 py-3 text-center text-sm font-medium text-white"
    >
      <p>{children}</p>
      {isDismissible && (
        <button
          onClick={handleDismiss}
          aria-label="Dismiss banner"
          className="absolute right-0 top-1/2 mr-4 -translate-y-1/2 rounded-md p-1 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <Cross1Icon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}