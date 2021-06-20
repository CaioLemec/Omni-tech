import { SimpleGrid, Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Head from 'next/head';
import React from "react";
import Cards from "../components/PageClients/Cards";
import styles from '../styles/clientsPage.module.scss'
import ParticlesBackground from "../components/PageHome/Particles";

export default function Clients() {
  return (
    <>
      <Head>
        <title> Clients | OminiTech</title>
      </Head>
      <Box
        zIndex="0"
        position="fixed"
        overflow="hidden"
        w={2000}
        h={2000}
      >
        <ParticlesBackground />
      </Box>
      <Header />
      <div className={styles.clientsContainer}>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing="2">
          <Cards partiner="Leaf" src="/images/3.png" />
          <Cards partiner="Tech" src="/images/6.png" />
          <Cards partiner="Evee" src="/images/5.png" />
          <Cards partiner="Bold" src="/images/2.png" />
          <Cards partiner="Crypt" src="/images/4.png" />
          <Cards partiner="Nuke" src="/images/1.png" />
        </SimpleGrid>
      </div>
    </>
  )
}
