import styles from './cards.module.scss'
import { Image } from "@chakra-ui/react"
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

export default function Cards(props) {
    const options = {
        scale: 1.1,
        speed: 700,
        max: 20
      };
    return (
        <div className={styles.container}>
            <Tilt className="box" options={options}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2>{props.partiner}</h2>
                    <Image mt={2} borderRadius="100%" src={props.src} alt="Partiner Logotype" />
                </div>
            </div>
            </Tilt>
        </div>
    )
  }
  






