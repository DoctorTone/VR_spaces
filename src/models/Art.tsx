/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		rootNode2: THREE.Mesh;
	};
	materials: {};
};

export function Art(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("./models/Nefertiti.glb") as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.rootNode2.geometry}
				material={nodes.rootNode2.material}
			/>
		</group>
	);
}

useGLTF.preload("./models/Nefertiti.glb");