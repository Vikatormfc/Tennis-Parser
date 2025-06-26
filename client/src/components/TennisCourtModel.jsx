import { Model } from "./Tennis-court";

import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";

const Scene = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <ambientLight intensity={10} />
        </>
    );
};

const TennisCourt = () => {
    return (
        <Canvas shadows gl={{ physicallyCorrectLights: true, toneMappingExposure: .02 }} style={{ height: '100vh', width: '100vw' }}>
            <Environment
                files={['/box/px.png', '/box/nx.png', '/box/py.png', '/box/ny.png', '/box/pz.png', '/box/nz.png']}
                background={true}
            />
            <OrbitControls />
            <Scene />
        </Canvas>
    );
};

export default TennisCourt;