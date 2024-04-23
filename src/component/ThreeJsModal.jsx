// "use client"
// import {Suspense ,useRef , useState}  from "react"
// import { Canvas } from "react-three-fiber"
// import { OrbitControls , useGLTF } from "@react-three/drei"

// export function Model(props) {
//   const { nodes, materials } = useGLTF('ImageToStl.com_0.gltf')
//   return (
//     // <group {...props} dispose={null}>
//     //   <group scale={0.0180}>
//     //     <group position={[92.585, -32.235, 155.753]} rotation={[-Math.PI / 2, 0, -0.297]} scale={100}>
//     //       <mesh geometry={nodes.wheel_tire_0.geometry} material={materials.tire} />
//     //       <mesh geometry={nodes.wheel_bhrome_d_0.geometry} material={materials.bhrome_d} />
//     //       <mesh geometry={nodes.wheel_bhrome_0.geometry} material={materials.bhrome} />
//     //       <mesh geometry={nodes.wheel_chrome_0.geometry} material={materials.chrome} />
//     //       <mesh geometry={nodes.wheel_disc_0.geometry} material={materials.disc} />
//     //     </group>
//     //     <group position={[84.53, -33.355, -149.09]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
//     //       <mesh geometry={nodes.wheel001_tire_0.geometry} material={materials.tire} />
//     //       <mesh geometry={nodes.wheel001_bhrome_d_0.geometry} material={materials.bhrome_d} />
//     //       <mesh geometry={nodes.wheel001_bhrome_0.geometry} material={materials.bhrome} />
//     //       <mesh geometry={nodes.wheel001_chrome_0.geometry} material={materials.chrome} />
//     //       <mesh geometry={nodes.wheel001_disc_0.geometry} material={materials.disc} />
//     //     </group>
//     //     <group position={[-92.588, -32.235, 155.753]} rotation={[-Math.PI / 2, 0, -0.297]} scale={100}>
//     //       <mesh geometry={nodes.wheel002_tire_0.geometry} material={materials.tire} />
//     //       <mesh geometry={nodes.wheel002_bhrome_d_0.geometry} material={materials.bhrome_d} />
//     //       <mesh geometry={nodes.wheel002_bhrome_0.geometry} material={materials.bhrome} />
//     //       <mesh geometry={nodes.wheel002_chrome_0.geometry} material={materials.chrome} />
//     //       <mesh geometry={nodes.wheel002_disc_0.geometry} material={materials.disc} />
//     //     </group>
//     //     <mesh geometry={nodes['mesh_glass-red_0'].geometry} material={materials['glass-red']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.Vert_cali_0.geometry} material={materials.cali} position={[84.901, -32.268, 153.336]} rotation={[-Math.PI / 2, 0, -0.297]} scale={100} />
//     //     <mesh geometry={nodes.Vert001_cali_0.geometry} material={materials.cali} position={[84.53, -33.355, -149.09]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.Vert002_cali_0.geometry} material={materials.cali} position={[-92.588, -32.235, 155.753]} rotation={[-Math.PI / 2, 0, -0.297]} scale={100} />
//     //     <mesh geometry={nodes.mesh001_paint_0.geometry} material={materials.paint} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh002_bhrome_0.geometry} material={materials.bhrome} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh003_light_e_0.geometry} material={materials.light_e} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh004_glack_0.geometry} material={materials.glack} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh005_glass_0.geometry} material={materials.glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh006_mlack_0.geometry} material={materials.mlack} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh007_blu_0.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh008_chrome_0.geometry} material={materials.chrome} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh009_glass_l_0.geometry} material={materials.glass_l} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //     <mesh geometry={nodes.mesh010_bumpa_0.geometry} material={materials.bumpa} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
//     //   </group>
//     // </group>
//   )
// }



// const AAA = () => {
//     const ref = useRef()
//   return (
//     <div className="mt-10  w-[90%] h-screen absolute top-10 left-10" >
//       <Canvas>
//        <Suspense fallback={null}>

//        <ambientLight intensity={0.5} />

//         {/* <directionalLight 
//         position={[10, 10, 10]} 
//         intensity={5} 
//         />  */}
//         <directionalLight intensity={5} position={[1, 1, 1]} />
//         <directionalLight intensity={5} position={[-1, -1, -1]} />

//         {/* <perspectiveCamera
//         position={[5, 9, 5]} 
//         fov={75} /> */}
//         <perspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        
//         <spotLight 
//         intensity={0.9} 
//         angle={0.1} 
//         penumbra={1} 
//         position={[10, 15, 10]} 
//         castShadow 
//         />

//          <Model/>
//          <OrbitControls 
//          enablePan={true}
//          enableZoom={true}
//          enableRotate={true}
//                     />
//        </Suspense>
//       </Canvas>
//     </div>
//   )
// }

// export default AAA

// {/* <mesh ref={ref}>
// <boxGeometry attach='geometry' args={[2,2,2]}  />
// </mesh> */}
