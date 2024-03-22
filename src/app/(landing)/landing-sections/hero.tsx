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
import { Environment, Float } from "@react-three/drei";
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
        <span className="drop-shadow-lightning">backend</span>.
      </h1>
      <Card className="border-t-0 md:w-[40vw]">
        <CardContent className="p-0">
          <div className="h-[500px] 2xl:h-[700px]">
            <Canvas>
              <Suspense fallback={null}>
                <Float>
                  <Model scale={modelScale} />
                </Float>
                <Environment preset="sunset" />
                <EffectComposer>
                  <Bloom
                    luminanceThreshold={0.1}
                    luminanceSmoothing={1.0}
                    intensity={10}
                  />
                </EffectComposer>
              </Suspense>
            </Canvas>
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
