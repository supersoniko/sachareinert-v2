"use client";
import { HalfFloatType } from "three";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CubeCloud } from "./cube-cloud";
import { cn } from "@/lib/utils";

import styles from "./cube-cloud-canvas-wrapper.module.css";

export function CubeCloudCanvasWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("h-screen", styles.parent)}>
      <Canvas
        className={cn("-z-40 h-full", styles.child)}
        gl={{ antialias: false, alpha: false }}
      >
        <color args={[0x111111]} attach="background" />
        <ambientLight intensity={Math.PI} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <CubeCloud n={20} spread={20} />

        <EffectComposer
          enableNormalPass={false}
          frameBufferType={HalfFloatType}
          multisampling={0}
        >
          <Bloom
            luminanceThreshold={0.95}
            luminanceSmoothing={1.0}
            intensity={4}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
      <div className={styles.child}>{children}</div>
    </div>
  );
}
