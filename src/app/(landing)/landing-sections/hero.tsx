"use client";

import {
  IconBrandReact,
  IconBrandDocker,
  IconBrandNodejs,
  IconSql,
  IconBrandAws,
  IconBrandAzure,
  IconBrandTypescript,
  IconBrandGolang,
} from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";
import { Canvas, Vector3 } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Model } from "./model";
import {
  Bounds,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PivotControls,
  View,
  useGLTF,
  OrthographicCamera,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const modelScale: Vector3 = isMobile ? [1.2, 2, 1] : [1.8, 3, 1];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []); // Empty array ensures this effect runs only on mount and unmount

  return (
    <section
      id="hero"
      aria-labelledby="introduction-heading"
      className="flex scroll-mt-16 flex-col space-y-8 md:flex-row md:justify-between md:space-y-0"
    >
      <h1
        id="introduction-heading"
        className="pl-4 pt-4 text-4xl md:max-w-[50vw] md:pl-12 md:text-8xl"
      >
        Developing digital solutions with a focus on{" "}
        <span className="lightning-text">backend</span>.
      </h1>
      <Card className="border-t-0 md:w-[40vw]">
        <CardContent className="p-0">
          {/* <Image
            src="/images/smug-tighnari-2-transparent.png"
            alt="Hero image"
            width={500}
            height={500}
            className="ml-auto mr-auto block"
          /> */}
          <div className="h-[500px] 2xl:h-[700px]">
            {/* <Canvas>
              <Suspense fallback={null}>
                <Model scale={[2.5, 2.5, 2.5]} />
                <Environment preset="sunset" />
              </Suspense>
            </Canvas> */}
            <View index={2} className="h-[500px] w-[500px]">
              <Model scale={[2.5, 2.5, 2.5]} />
              <Environment preset="sunset" />
            </View>
            {/* <View index={2} className="view2 z-30">
              <color attach="background" args={["#d6edf3"]} />
              <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
              <Lights />
              <OrbitControls makeDefault />
              <PivotControls depthTest={false}>
                <Bounds fit clip observe margin={1.5}>
                  <Target />
                </Bounds>
                <ContactShadows
                  frames={1}
                  position={[0, -1, 0]}
                  blur={1}
                  opacity={0.6}
                />
              </PivotControls>
            </View> */}
            {/* <View index={2} className="view2">
              <color attach="background" args={["#d6edf3"]} />
              <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
              <Lights />
              <OrbitControls makeDefault />
              <PivotControls depthTest={false}>
                <Bounds fit clip observe margin={1.5}>
                  <Target />
                </Bounds>
                <ContactShadows
                  frames={1}
                  position={[0, -1, 0]}
                  blur={1}
                  opacity={0.6}
                />
              </PivotControls>
            </View> */}
          </div>
          <div className="h-full border-t bg-zinc-900 p-4">
            <h3 className="pb-2 text-lg font-semibold">Experience</h3>
            <div className="grid grid-cols-4 items-center justify-items-center gap-4">
              <IconBrandGolang role="presentation" size={48} stroke={1.25} />
              <IconBrandTypescript
                role="presentation"
                size={48}
                stroke={1.25}
              />
              <IconBrandNodejs role="presentation" size={48} stroke={1.25} />
              <IconSql role="presentation" size={48} stroke={1.25} />
              <IconBrandReact role="presentation" size={48} stroke={1.25} />
              <IconBrandDocker role="presentation" size={48} stroke={1.25} />
              <IconBrandAws role="presentation" size={48} stroke={1.25} />
              <IconBrandAzure role="presentation" size={48} stroke={1.25} />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

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
