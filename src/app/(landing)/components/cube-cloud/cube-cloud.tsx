"use client";

import { useRef } from "react";

import { Instances, Instance, Outlines } from "@react-three/drei";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils.js";
import { Color } from "three";

type CubeProps = Omit<React.ComponentProps<typeof Instance>, "ref"> & {
  spread: number;
};

const Cube = ({ spread, ...props }: CubeProps) => {
  const ref = useRef();

  const color = new Color(
    randFloat(0.4, 1),
    randFloat(0.4, 1),
    randFloat(0.4, 1),
  );
  console.log("color", color);

  return (
    <Instance
      ref={ref}
      {...props}
      position={[
        randFloatSpread(spread),
        randFloatSpread(spread),
        randFloatSpread(spread),
      ]}
      rotation={[
        randFloatSpread(Math.PI),
        randFloatSpread(Math.PI),
        randFloatSpread(Math.PI),
      ]}
      color={color}
    >
      <Outlines
        thickness={0.1}
        color={color.clone().multiplyScalar(3.0)}
        opacity={0.9}
        transparent
      />
    </Instance>
  );
};

type CubeCloudProps = {
  n?: number;
  spread?: number;
};

export const CubeCloud = ({ n = 10, spread = 1 }: CubeCloudProps) => {
  return (
    <Instances limit={n} position={[0, 0, -20]}>
      <boxGeometry />
      <meshBasicMaterial opacity={0.9} transparent />
      {Array.from(Array(n)).map((_, i) => (
        <Cube key={i} spread={spread} />
      ))}
    </Instances>
  );
};
