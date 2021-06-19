import { Flex, HStack, Button, useMediaQuery } from "@chakra-ui/react"
import { ActiveLink } from "../ActiveLink";

export function Menu() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    if (isLargerThan768) {
        return (
            <Flex justifyContent="center">
                    <HStack 
                    spacing={["8", "12", "16"]}
                    mx={["6", "8"]}
                    pr={["6", "8"]}
                    py="1"
                    color="yellow.main"
                    >
                        <ActiveLink href="/about">
                            <Button 
                                type="submit" 
                                colorScheme="pink"
                                size="sm"
                                fontSize="16"
                                bg="transparent"
                                color="yellow.main"
                                _hover={{ color:"pink.main"  }}
                                _active={{
                                transform: "scale(0.90)",
                                }}
                                _focus={{
                                border: "none",
                                }}
                            >About</Button>
                        </ActiveLink>
                        <ActiveLink href="/clients">
                        <Button 
                                type="submit" 
                                colorScheme="pink"
                                size="sm"
                                fontSize="16"
                                bg="transparent"
                                color="yellow.main"
                                _hover={{ color:"pink.main"  }}
                                _active={{
                                transform: "scale(0.90)",
                                }}
                                _focus={{
                                border: "none",
                                }}
                            >Clients</Button>
                        </ActiveLink>
                        <ActiveLink href="/contact">
                        <Button 
                                type="submit" 
                                colorScheme="pink"
                                size="sm"
                                fontSize="16"
                                bg="transparent"
                                color="yellow.main"
                                _hover={{ color:"pink.main" }}
                                _active={{
                                transform: "scale(0.90)",
                                }}
                                _focus={{
                                border: "none",
                                }}
                            >Contact</Button>
                        </ActiveLink>
                    </HStack>
            </Flex>
        );
    } else {
        return (
            <>
            </>
        );
    }
}