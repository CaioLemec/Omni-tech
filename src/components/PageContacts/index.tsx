import { Flex, FormControl, FormLabel, Input, VStack, Textarea, Button } from "@chakra-ui/react"
import React from "react";

export function ContactInput() {
    return (
        <Flex>
            <VStack>
                <FormControl id="first-name">
                    <FormLabel>First name</FormLabel>
                    <Input
                        placeholder="Name"
                        borderColor="pink.main"
                        _focus={{
                            border: "2px",
                            borderColor: "pink.main",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        borderColor="pink.main"
                        _focus={{
                            border: "2px",
                            borderColor: "pink.main",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <FormControl id="content">
                    <FormLabel>Menssage</FormLabel>
                    <Textarea
                        placeholder="We are waiting for your contact."
                        borderColor="pink.main"
                        _focus={{
                            border: "2px",
                            borderColor: "pink.main",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <Button
                    size="lg"
                    w="100%"
                    fontSize="16"
                    mr="5"
                    ml={["4", "2"]}
                    bg="pink.main"
                    color="yellow.main"
                    _hover={{ opacity: "0.8" }}
                    _active={{
                    transform: "scale(0.90)",
                    }}
                    _focus={{
                    border: "none",
                    }}
                >
                    Contact us
                </Button>
            </VStack>
        </Flex>
    );
}