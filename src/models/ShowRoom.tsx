/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Plinth from "./Plinth";

type GLTFResult = GLTF & {
	nodes: {
		Cube013_0: THREE.Mesh;
		Cube014_0: THREE.Mesh;
		Cube015_0: THREE.Mesh;
		Cube016_0: THREE.Mesh;
		Cube017_0: THREE.Mesh;
		Cube019_1: THREE.Mesh;
		Cube020_0: THREE.Mesh;
		Cube021_0: THREE.Mesh;
		Cube022_0: THREE.Mesh;
		Cube024_1: THREE.Mesh;
		Cylinder002_0: THREE.Mesh;
		Cylinder002_1: THREE.Mesh;
		Cylinder003_0: THREE.Mesh;
		Cylinder003_1: THREE.Mesh;
		Window_Panel002_0: THREE.Mesh;
		Window_Panel002_1: THREE.Mesh;
		Window_Panel002_2: THREE.Mesh;
		Window_Panel003_0: THREE.Mesh;
		Window_Panel003_1: THREE.Mesh;
		Window_Panel003_2: THREE.Mesh;
		Window001_0: THREE.Mesh;
		Window001_1: THREE.Mesh;
		Window001_2: THREE.Mesh;
		Window001_3: THREE.Mesh;
	};
	materials: {
		WALL: THREE.MeshStandardMaterial;
		Table_cloth: THREE.MeshStandardMaterial;
		Plastic: THREE.MeshStandardMaterial;
		Light_2: THREE.MeshStandardMaterial;
		Light: THREE.MeshStandardMaterial;
		Window_inside: THREE.MeshStandardMaterial;
		Window_outside: THREE.MeshStandardMaterial;
		Window_glass: THREE.MeshStandardMaterial;
		Window_metal: THREE.MeshStandardMaterial;
		Window_stone: THREE.MeshStandardMaterial;
	};
};

export function ShowRoom(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(
		"./models/latestRoom.gltf"
	) as GLTFResult;

	const wallMaterial = new THREE.MeshStandardMaterial({
		color: 0xe1dbb7,
		roughness: 0.3,
		metalness: 0.6,
	});
	const windowInside = new THREE.MeshStandardMaterial({
		color: 0xababab,
		roughness: 1,
		metalness: 0.25,
	});

	return (
		<group {...props} dispose={null}>
			{/* Plinths and tops */}
			<Plinth position={[-10.5, 0.475, 3]} />
			<Plinth position={[-6, 0.475, 3]} />
			<Plinth position={[-7.5, 0.475, 3]} />
			<Plinth position={[-9, 0.475, 3]} />
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group
					position={[0, -0.389, 2.309]}
					rotation={[0, 0, Math.PI / 2]}
					scale={[0.524, 3.336, 0.524]}
				>
					<mesh geometry={nodes.Cylinder002_0.geometry}>
						<meshStandardMaterial
							color={0xcfbfbf}
							roughness={0.25}
							metalness={1}
						/>
					</mesh>
				</group>
				<group
					position={[0, -0.389, 2.309]}
					rotation={[0, 0, Math.PI / 2]}
					scale={[0.524, 3.336, 0.524]}
				>
					<mesh geometry={nodes.Cylinder003_0.geometry}>
						<meshStandardMaterial
							color={0xcfbfbf}
							roughness={0.25}
							metalness={1}
						/>
					</mesh>
				</group>
				<group position={[-3.481, 3.377, -0.43]}>
					<group position={[3.481, -3.766, 2.739]}>
						<mesh
							geometry={nodes.Window_Panel002_0.geometry}
							material={windowInside}
						/>
						<mesh
							geometry={nodes.Window_Panel002_1.geometry}
							material={materials.Window_outside}
						/>
						<mesh geometry={nodes.Window_Panel002_2.geometry}>
							<meshStandardMaterial transparent={true} opacity={0.5} />
						</mesh>
					</group>
					<group position={[3.481, -3.766, 2.739]}>
						<mesh
							geometry={nodes.Window_Panel003_0.geometry}
							material={windowInside}
						/>
						<mesh
							geometry={nodes.Window_Panel003_1.geometry}
							material={materials.Window_outside}
						/>
						<mesh geometry={nodes.Window_Panel003_2.geometry}>
							<meshStandardMaterial transparent={true} opacity={0.5} />
						</mesh>
					</group>
					<mesh geometry={nodes.Window001_0.geometry} material={windowInside} />
				</group>
				<mesh geometry={nodes.Cube013_0.geometry} position={[0, -1.198, 1.986]}>
					<meshStandardMaterial color={0x666666} />
				</mesh>
				<mesh geometry={nodes.Cube014_0.geometry} position={[0, -0.389, 1.986]}>
					<meshStandardMaterial color={0x333333} />
				</mesh>
				<mesh geometry={nodes.Cube015_0.geometry} position={[0, -0.389, 2.309]}>
					<meshStandardMaterial color={0xc4c3ba} metalness={0} roughness={1} />
				</mesh>
				<mesh
					geometry={nodes.Cube017_0.geometry}
					material={wallMaterial}
					position={[0.001, -1.434, 4.972]}
					scale={[3.5, 3.5, 2.5]}
				/>
				<mesh
					geometry={nodes.Cube019_1.geometry}
					material={wallMaterial}
					position={[0, -0.389, 1.986]}
				/>
				<mesh
					geometry={nodes.Cube021_0.geometry}
					material={wallMaterial}
					position={[0, -0.389, 2.309]}
				/>
				<mesh geometry={nodes.Cube022_0.geometry} position={[0, -0.389, 2.309]}>
					<meshStandardMaterial color={0xc4c3ba} metalness={0} roughness={1} />
				</mesh>
				<mesh
					name="Wall"
					geometry={nodes.Cube024_1.geometry}
					position={[0, -0.389, 2.309]}
					material={wallMaterial}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("./models/latestRoom.gltf");
