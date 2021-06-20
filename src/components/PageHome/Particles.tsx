import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particle-config";

export default function ParticlesBackground () {
    return (
        <Particles params={particlesConfig}></Particles>
    );
}