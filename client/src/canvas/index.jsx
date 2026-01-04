import { Canvas } from '@react-three/fiber'
import { Environment, Center, OrbitControls } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';


const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
       receiveShadow={false}
    >
      <ambientLight intensity={0.3} />
      <Environment preset="city" />

      <CameraRig>
         {/* <Backdrop /> */}
       
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

// const CanvasModel = () => {
//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 0, 2], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       className="w-full max-w-full h-full"
//     >
//       <ambientLight intensity={0.3} />
//       <Environment preset="studio" />

//       <Backdrop />

//       <Center>
//         <Shirt />
//       </Center>

//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         rotateSpeed={0.8}
//         minPolarAngle={Math.PI / 2.2}
//         maxPolarAngle={Math.PI / 1.8}
//       />
//     </Canvas>
//   )
// }


export default CanvasModel