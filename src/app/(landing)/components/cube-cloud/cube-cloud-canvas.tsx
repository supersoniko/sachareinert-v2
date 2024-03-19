"use client";
import { HalfFloatType } from "three";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  View,
  useGLTF,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CubeCloud } from "./cube-cloud";
import { cn } from "@/lib/utils";

import styles from "./cube-cloud-canvas-wrapper.module.css";
import { useState } from "react";

export function CubeCloudCanvasWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-full min-h-screen">
      {/* <View index={1} className="view1">
        <color attach="background" args={["#f0f0f0"]} />
        <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
        <Lights />
        <Bounds fit clip observe margin={1.5}>
          <Target />
        </Bounds>
        <ContactShadows
          frames={1}
          position={[0, -1, 0]}
          blur={1}
          opacity={0.6}
        />
        <OrbitControls makeDefault />
      </View> */}
      <View index={1} className={cn("-z-40", styles.gridChild)}>
        {/* <color attach="background" args={["#f0f0f0"]} />
        <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
        <Lights />
        <Bounds fit clip observe margin={1.5}>
          <Target />
        </Bounds>
        <ContactShadows
          frames={1}
          position={[0, -1, 0]}
          blur={1}
          opacity={0.6}
        />
        <OrbitControls makeDefault /> */}
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
      </View>
      {/* <Canvas
        className={cn("-z-40", styles.gridChild)}
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
      </Canvas> */}
      <Canvas className={cn("", styles.gridChild)}>
        <View.Port />
      </Canvas>
      <div className={styles.gridChild}>{children}</div>
    </div>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color="blue" />
    </>
  );
}

function Target(props) {
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf",
  );
  const [hovered, hover] = useState(false);
  return (
    <group position={[0, -1, 0]} {...props} dispose={null}>
      <group
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          geometry={nodes.Cylinder016.geometry}
          material={materials["Red.025"]}
        />
        <mesh geometry={nodes.Cylinder016_1.geometry}>
          <meshStandardMaterial color={hovered ? "orange" : "white"} />
        </mesh>
      </group>
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        geometry={nodes.Cylinder016_2.geometry}
        material={materials["BrownDark.018"]}
      />
    </group>
  );
}
