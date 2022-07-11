import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PresentationControls } from '@react-three/drei';
import styled from 'styled-components';



// function Model({ ...props }) {
//     const group = useRef()
//     const { nodes, materials } = useGLTF('/scene.gltf')
//     useFrame((state, delta) => (group.current.rotation.y += 0.01))
//     return (
//       <group ref={group} {...props} dispose={null} scale={0.03}>
//         <group rotation={[-Math.PI / 2, 8.2, 0]}>
//           <mesh geometry={nodes.Object_2.geometry} material={materials['9smg1']} />
//           <mesh geometry={nodes.Object_3.geometry} material={materials['9smg2']} />
//         </group>
//       </group>
//     )
//   }


function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/scene.gltf')
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        group.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
        group.current.rotation.y = Math.sin(t / 4) / 8
        group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
        group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })
    return (
        <group ref={group} {...props} dispose={null} scale={0.09}>
            <group rotation={[-Math.PI / 92, 6.5, 7.5]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, 1.67, 9.05]} rotation={[0, 0, -Math.PI / 2]}>
                        <mesh geometry={nodes.pPlane1_blinn1_0.geometry} material={materials.blinn1} />
                    </group>
                    <group position={[1.79, 2.06, 0.44]} rotation={[0, 0, -Math.PI / 2]}>
                        <mesh geometry={nodes.pPlane2_blinn1_0.geometry} material={materials.blinn1} />
                    </group>
                    <group position={[0.12, 7.75, 9.13]} rotation={[0, -0.15, 0]} scale={[1.15, 1, 1]}>
                        <mesh geometry={nodes.pCube1_blinn1_0.geometry} material={materials.blinn1} />
                    </group>
                    <group position={[0, 0.63, 10.23]} rotation={[Math.PI / 2, 0, 0]} scale={[1.02, 0.46, 1.02]}>
                        <mesh geometry={nodes.pPipe1_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, 0.25, 6.08]} rotation={[-Math.PI / 2, 0, 0]} scale={0.52}>
                        <mesh geometry={nodes.pCylinder2_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[0, 5, 9.91]} rotation={[Math.PI / 2, -Math.PI / 6, 0]} scale={[1.23, 2.59, 1.23]}>
                        <mesh geometry={nodes.pPipe2_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, 5, 8.35]} rotation={[Math.PI / 2, -1.19, 0]} scale={[1.96, 1.8, 1.96]}>
                        <mesh geometry={nodes.pCylinder3_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, 7.07, 9.92]} scale={[1.28, 0.61, 0.61]}>
                        <mesh geometry={nodes.pCube2_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, 6.64, 10.32]} scale={[0.42, 0.5, 0.5]}>
                        <mesh geometry={nodes.pCube3_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, 7.28, -3.03]} scale={[2.23, 0.72, 1.61]}>
                        <mesh geometry={nodes.pCube4_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[-0.03, 6.92, -4.54]} scale={[1.15, 1, 1]}>
                        <mesh geometry={nodes.pCube5_lambert4_0.geometry} material={materials.lambert4} />
                    </group>
                    <group position={[0, 0.43, -5.08]}>
                        <mesh geometry={nodes.pCube6_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[-1.85, 1.06, 0.87]} scale={[1.6, 1, 1]}>
                        <mesh geometry={nodes.pCube7_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, -0.97, -5.72]} scale={[1.36, 1, 1]}>
                        <mesh geometry={nodes.pCube8_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[1.49, 0, 0]}>
                        <mesh geometry={nodes.pCube9_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[1.67, 1.62, 2.28]} rotation={[-0.54, 0, 0]} scale={0.91}>
                        <mesh geometry={nodes.pCube10_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[0, 1.51, 1.61]} rotation={[-0.7, 0, 0]}>
                        <mesh geometry={nodes.pCube11_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[0, -8.84, -12.01]} rotation={[0.49, 0, 0]} scale={[1.88, 1, 4.75]}>
                        <mesh geometry={nodes.pCube12_lambert3_0.geometry} material={materials.lambert3} />
                        <mesh geometry={nodes.pCube12_blinn1_0.geometry} material={materials.blinn1} />
                    </group>
                    <group position={[0.88, 0.05, -8.8]} rotation={[0.49, 0, 0]} scale={[1.08, 1, 1]}>
                        <mesh geometry={nodes.pCube13_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[-0.48, -0.01, -8.52]} rotation={[0.49, 0, 0]}>
                        <mesh geometry={nodes.pCube14_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[-0.85, -6.2, -6.1]} rotation={[0.96, 0, 0]} scale={0.56}>
                        <mesh geometry={nodes.pCube15_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, -10.27, -7.91]} rotation={[Math.PI / 2, -Math.PI / 4, 0]}>
                        <mesh geometry={nodes.pPipe3_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[-2.44, 6.72, -2.41]} scale={[1.49, 1, 1]}>
                        <mesh geometry={nodes.pCube16_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, -2.73, -4.53]} scale={0.85}>
                        <mesh geometry={nodes.pCube17_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, -2.04, -4.53]} scale={0.85}>
                        <mesh geometry={nodes.pCube18_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, -3.31, -4.53]} scale={0.85}>
                        <mesh geometry={nodes.pCube19_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, -3.95, -4.53]} scale={0.85}>
                        <mesh geometry={nodes.pCube20_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, -4.59, -4.53]} scale={0.85}>
                        <mesh geometry={nodes.pCube21_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0, -6.61, -4.27]} rotation={[0.03, 0, 0]} scale={0.85}>
                        <mesh geometry={nodes.pCube22_blinn1_0.geometry} material={materials.blinn1} />
                    </group>
                    <group position={[-0.53, -2.99, 8.79]} scale={[1.38, 1, 1]}>
                        <mesh geometry={nodes.pCube23_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[1.01, 0, 0]} scale={[1.42, 1, 1]}>
                        <mesh geometry={nodes.polySurface1_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[0, 0.61, 9.25]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.pCylinder4_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[1.85, 2.49, 8.5]} rotation={[-0.02, 0.07, -0.11]} scale={0.29}>
                        <mesh geometry={nodes.pSphere1_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[1.97, 3.73, 3.36]} rotation={[0.59, -0.05, -0.05]} scale={[0.95, 0.95, 0.71]}>
                        <mesh geometry={nodes.pCube25_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[1.85, -2.19, 8.53]} rotation={[-0.05, 0.02, -0.05]} scale={0.29}>
                        <mesh geometry={nodes.pSphere2_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[1.72, -3.93, 2.59]} scale={[0.65, 0.28, 0.88]}>
                        <mesh geometry={nodes.pCube26_lambert2_0.geometry} material={materials.lambert2} />
                    </group>
                    <group position={[0, 0.64, 10.29]} rotation={[Math.PI / 2, 0, 0]} scale={[0.93, 0.03, 0.93]}>
                        <mesh geometry={nodes.pCylinder5_lambert2_0.geometry} material={materials.lambert2} />
                    </group>
                    <group position={[0, 2.47, 8.69]} rotation={[0.38, 0, 0]} scale={2.12}>
                        <mesh geometry={nodes.pCube27_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[1.54, 2.52, 3.04]} rotation={[0.67, 0, 0]} scale={[0, 1, 1]}>
                        <mesh geometry={nodes.pCube28_lambert2_0.geometry} material={materials.lambert2} />
                    </group>
                    <group position={[2.01, 1.63, 2.1]} rotation={[1.01, 0.32, 0]} scale={[0.22, 0.2, 0.63]}>
                        <mesh geometry={nodes.pCube29_lambert2_0.geometry} material={materials.lambert2} />
                    </group>
                    <group position={[1.72, -2.58, -7.22]} rotation={[-0.05, -0.16, -0.05]} scale={0.29}>
                        <mesh geometry={nodes.pSphere3_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[1.64, -4.96, -12.26]} rotation={[-0.02, 0.49, -0.05]} scale={0.29}>
                        <mesh geometry={nodes.pSphere4_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[0.53, -2.99, 8.79]} scale={[-1.38, 1, 1]}>
                        <mesh geometry={nodes.pCube30_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[0, 1.67, 9.05]} rotation={[0, 0, Math.PI / 2]} scale={[-1, 1, 1]}>
                        <mesh geometry={nodes.pPlane3_blinn1_0.geometry} material={materials.blinn1} />
                    </group>
                    <group position={[-0.13, 7.75, 9.13]} rotation={[0, 0.14, 0]} scale={[-1.15, 1, 1]}>
                        <mesh geometry={nodes.pCube31_blinn1_0.geometry} material={materials.blinn1} />
                    </group>
                    <group position={[-0.88, 0.05, -8.8]} rotation={[0.49, 0, 0]} scale={[-1.08, 1, 1]}>
                        <mesh geometry={nodes.pCube32_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[-1.79, 2.06, 0.44]} rotation={[0, 0, Math.PI / 2]} scale={[-1, 1, 1]}>
                        <mesh geometry={nodes.pPlane4_blinn1_0.geometry} material={materials.blinn1} />
                    </group>
                    <group position={[-1.54, 2.52, 3.04]} rotation={[0.67, 0, 0]} scale={[0, 1, 1]}>
                        <mesh geometry={nodes.pCube33_lambert2_0.geometry} material={materials.lambert2} />
                    </group>
                    <group position={[-1.49, 0, 0]} scale={[-1, 1, 1]}>
                        <mesh geometry={nodes.pCube34_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[-1.69, 1.62, 2.28]} rotation={[-0.54, 0, 0]} scale={[-0.91, 0.91, 0.91]}>
                        <mesh geometry={nodes.pCube35_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[2.01, 1.63, 2.1]} rotation={[1.01, 0.32, 0]} scale={[0.22, 0.2, 0.63]}>
                        <mesh geometry={nodes.pCube36_lambert2_0.geometry} material={materials.lambert2} />
                    </group>
                    <group position={[-1.84, -2.02, 8.61]} rotation={[-0.05, 0.02, -0.05]} scale={[-0.29, 0.29, 0.29]}>
                        <mesh geometry={nodes.pSphere5_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[-1.72, -3.93, 2.59]} scale={[-0.65, 0.28, 0.88]}>
                        <mesh geometry={nodes.pCube37_lambert2_0.geometry} material={materials.lambert2} />
                    </group>
                    <group position={[-1.89, -2.45, -7.75]} rotation={[-0.05, -0.16, -0.05]} scale={[-0.29, 0.29, 0.29]}>
                        <mesh geometry={nodes.pSphere6_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[-1.65, -4.96, -12.26]} rotation={[-0.06, -0.31, -0.05]} scale={[-0.29, 0.29, 0.29]}>
                        <mesh geometry={nodes.pSphere7_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[-1.01, 0, 0]} scale={[-1.42, 1, 1]}>
                        <mesh geometry={nodes.polySurface3_lambert3_0.geometry} material={materials.lambert3} />
                    </group>
                    <group position={[0, 1.59, 4.26]}>
                        <mesh geometry={nodes.pCube38_lambert5_0.geometry} material={materials.lambert5} />
                    </group>
                    <group position={[0, 3.69, -1.51]}>
                        <mesh geometry={nodes.pCube39_lambert5_0.geometry} material={materials.lambert5} />
                    </group>
                    <group position={[-1.82, 2.49, 8.5]} rotation={[-0.02, 0.07, -2.99]} scale={0.29}>
                        <mesh geometry={nodes.pSphere8_phong1_0.geometry} material={materials.phong1} />
                    </group>
                    <group position={[-2.01, 3.73, 3.36]} rotation={[-2.55, -0.05, -3.1]} scale={[0.95, 0.95, 0.71]}>
                        <mesh geometry={nodes.pCube40_phong1_0.geometry} material={materials.phong1} />
                    </group>
                </group>
            </group>
        </group>
    )
}

const Example3d = () => {
    const [hovered, setHover] = useState(false)
    return (
        <>
            <Contain>
                <Canvas>
                    <Suspense fallback={null}>
                        <directionalLight intensity={0.2} />
                        <ambientLight intensity={0.3} />
                        <spotLight intensity={0.5} angle={2} penumbra={1} position={[10, 15, 10]} castShadow />
                        <PresentationControls
                            global
                            config={{ mass: 2, tension: 500 }}
                            snap={{ mass: 4, tension: 1500 }}
                            rotation={[0, 0.3, 0]}
                            polar={[-Math.PI / 3, Math.PI / 3]}
                            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                            <Model rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} scale={0.003} />
                        </PresentationControls>
                    </Suspense>
                </Canvas>
            </Contain>
        </>
    )
}

export default Example3d;

const Contain = styled.div`
    width:100%;
    height:100%;
    margin:0 auto;
    background:#3c6fde;
`