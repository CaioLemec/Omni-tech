import { Flex, FormControl, FormLabel, Input, VStack, Textarea } from "@chakra-ui/react"
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
            </VStack>
        </Flex>
    );
}