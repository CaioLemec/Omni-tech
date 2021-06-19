import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Head from 'next/head';
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
    <Head>
      <title> Home | OminiTech</title>
    </Head>

    <Flex 
      direction="column" 
      h="100vh"
    >
      <Header />
      <Box w="100%" h="100%" bg="red">a</Box>
      <Box w="100%" h="100%" bg="blue">b</Box>
      <Box w="100%" h="100%" bg="green">c</Box>
    </Flex>

    </>
  )
}
