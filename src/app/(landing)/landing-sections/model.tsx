"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import { GLTF } from "three-stdlib";
import { Material, Mesh } from "three";

type GLFTResult = GLTF & {
  nodes: {
    [name: string]: Mesh;
  };
  materials: {
    [name: string]: Material;
  };
};

export function Model(props: GroupProps) {
  const { nodes, materials } = useGLTF("/YellowCatModel.glb") as GLFTResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/YellowCatModel.glb");
