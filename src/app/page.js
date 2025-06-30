"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import AnimatedButton from "@/components/animatedbutton";

gsap.registerPlugin(SplitText);

export default function Home() {
  const container = useRef(null);
  const titleRef = useRef(null);
  const pRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      x: "-101%",
      opacity: 0,
      duration: 2,
      ease: "power3.out"
    })
    .from(pRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "-=1")
    .from(
      ".button-group button",
      {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <>
      <div ref={container} className="relative text-gray-600 flex-col items-center body-font min-h-screen">
        <video autoPlay loop muted className="absolute z-[-1] w-full h-full object-cover">
          {/* VJ loops made by Beeple */}
          <source src="https://storage.googleapis.com/assets.hyperfoundation.xyz/beeple_okkkk_loop_720p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center min-h-screen">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 ref={titleRef} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange bg-gradient-to-r from-orange-500 via-orange-300 to-orange-100 bg-clip-text text-transparent">
              Welcome to Hyperion Foundation CDN
            </h1>
            <p ref={pRef} className="mb-8 text-gray-200 leading-relaxed">
              The place where we store our old contents and it&apos;s free to
              use. Try to explore the website to learn more.
            </p>
            {/* <div className="flex justify-center gap-4">
              <Link href="/hyperion-private-smp">
                <AnimatedButton>Private SMP</AnimatedButton>
              </Link>
              <Link href="">
                <AnimatedButton>Test</AnimatedButton>
              </Link>
            </div> */}
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image width={720} height={600} className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div> */}
        </div>
      </div>
    </>
  );
}