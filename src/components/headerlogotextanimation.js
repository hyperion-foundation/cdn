"use client"
import React from "react";
import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const getSeason = () => {
  const month = new Date().getMonth() + 1;

  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 1) return "autumn";
  return "winter";
};

const seasonalGradients = {
  spring: "linear-gradient(to right, #fce3ec, #fbd7e3, #fbdcc4, #e0f7cf)",
  summer: "linear-gradient(to right, #ff7e5f, #feb47b, #ffe28a, #c9fdd7)",
  autumn: "linear-gradient(to right, #ff6f3c, #ff914d, #ffa64d, #ffd07e)",
  winter: "linear-gradient(to right, #e0f7fa, #b2ebf2, #80deea, #4dd0e1)"
};

const AnimatedGradientText = styled.span`
  animation: ${gradient} 5s ease-in-out infinite;
  background: ${(props) => props.gradient};
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function HeaderTextLogoAnimation() {
  const season = getSeason();
  const currentGradient = seasonalGradients[season];

  return (
    <AnimatedGradientText gradient={currentGradient}>
      Hyperion Foundation
    </AnimatedGradientText>
  );
}