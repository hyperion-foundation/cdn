import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;
const AnimatedGradientText = styled.span`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #feefe2, #fee6d2, #fba254, #f98115);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export default function TextGradientComponent() {
  return (
    <>
      <AnimatedGradientText>Hyperion Foundation CDN</AnimatedGradientText>
    </>
  );
}
