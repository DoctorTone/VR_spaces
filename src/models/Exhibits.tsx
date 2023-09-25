import { Lotus } from "./Lotus";
import { Art } from "./Art";
import { Architecture } from "./Architecture";
import { Video } from "./Video";
import { Education } from "./Education";
import { Games } from "./Games";
import { Advertising } from "./Advertising";
import { Health } from "./Health";
import { Music } from "./Music";
import { Billboard, Text } from "@react-three/drei";

const Exhibits = () => {
	return (
		<group>
			{/* Collision boxes */}
			<mesh visible={false} name="Collision1" position={[-12, 2, 0]}>
				<boxGeometry args={[1, 4, 8]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision2" position={[-7.25, 2, 3.25]}>
				<boxGeometry args={[5.25, 4, 2]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision3" position={[-8.5, 2, -2.75]}>
				<boxGeometry args={[8, 4, 1]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision4" position={[-3.6, 2, 4.5]}>
				<boxGeometry args={[2, 4, 1]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision5" position={[0, 2, 3]}>
				<boxGeometry args={[5, 4, 3]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision6" position={[6.25, 2, 3.4]}>
				<boxGeometry args={[7.25, 4, 2]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision7" position={[10.5, 2, 4]}>
				<boxGeometry args={[2, 4, 2]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision8" position={[12, 2, 0]}>
				<boxGeometry args={[1, 4, 8]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>

			<mesh position={[-10.7, 1, 3.305]}>
				<boxGeometry args={[1.35, 2.5, 0.1]} />
				<meshStandardMaterial
					color={0xe1dbb7}
					roughness={0.3}
					metalness={0.6}
				/>
			</mesh>
			<mesh position={[10.7, 1, 3.305]}>
				<boxGeometry args={[1.35, 2.5, 0.1]} />
				<meshStandardMaterial
					color={0xe1dbb7}
					roughness={0.3}
					metalness={0.6}
				/>
			</mesh>
			<group>
				<Text
					position={[0, 2.5, 6.15]}
					rotation-y={Math.PI}
					fontSize={0.5}
					color={0x333333}
					textAlign="center"
				>
					Showroom
				</Text>
				<Lotus
					position={[0, 0, 3.5]}
					scale={0.65}
					rotation-y={(Math.PI * 2) / 3}
				/>
			</group>
			<group>
				<Text
					position={[-9.4, 2, 3]}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Art
				</Text>
				<Art
					name="Art"
					position={[-9.4, 1, 3]}
					rotation-y={Math.PI}
					scale={[0.03, 0.03, 0.03]}
				/>
			</group>
			<group>
				<Text
					position={[-8.4, 1.6, 3]}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Architecture
				</Text>
				<Architecture
					name="Architecture"
					position={[-8.4, 1, 3]}
					rotation-y={Math.PI}
					scale={0.4}
				/>
			</group>
			<group>
				<Text
					position={[-7.35, 1.6, 3]}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Film
				</Text>
				<Video position={[-7.35, 1.25, 3]} rotation-y={Math.PI} />
			</group>
			<group>
				<Text
					position={[-6.35, 1.55, 3]}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Education
				</Text>
				<Education position={[-6.35, 1.2, 3]} rotation-x={-Math.PI / 4} />
			</group>
			<group>
				<Text
					position={[6.4, 1.65, 2.9]}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Games
				</Text>
				<Games position={[6.4, 1.25, 2.9]} scale={0.1} />
			</group>
			<group>
				<Text
					position={[7.4, 1.75, 2.9]}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Advertising
				</Text>
				<Advertising position={[7.4, 1.1, 2.9]} rotation-z={-Math.PI / 12} />
			</group>
			<group>
				<Text
					position={[8.4, 1.65, 2.9]}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Health
				</Text>
				<Health position={[8.4, 1.3, 2.9]} scale={1} />
			</group>
			<group>
				<Text
					position={[9.4, 1.55, 2.9]}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Music
				</Text>
				<Music position={[9.4, 1.2, 2.9]} scale={0.0005} />
			</group>
		</group>
	);
};

export default Exhibits;
