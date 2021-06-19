import { Flex } from "@chakra-ui/react";
import Head from 'next/head';

import React from "react";
import { Header } from "../components/Header";

export default function Clients() {
  return (
    <>
    <Head>
      <title> Clients | OminiTech</title>
    </Head>
    <Flex 
    w="100vw"
    h="100vh"
    >
      <Header />
    </Flex>
    </>
  )
}
