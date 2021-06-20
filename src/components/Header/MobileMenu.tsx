import { Menu, MenuButton, MenuList, Icon, Text, Link, MenuItem, IconButton, VStack, useMediaQuery } from "@chakra-ui/react"
import React from "react";
import { RiHome2Fill, RiMenuFill, RiUserSmileFill, RiParentFill } from 'react-icons/ri'

interface MobileMenuProps {
    showMobileMenu?: boolean;
}

export function MobileMenu({ showMobileMenu = true }: MobileMenuProps) {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    if (isLargerThan768) {
        return (<></>)
    } else {
        return (
            <>
                {showMobileMenu && (
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            color="pink.main"
                            bg="transparent"
                            aria-label="Options"
                            fontSize="25"
                            icon={<RiMenuFill />}
                            _active={{
                                transform: "scale(0.90)",
                                bg: "pink.main",
                            }}
                            _focus={{
                                bg: "pink.main",
                                border: "none",
                            }}
                            zIndex="1"
                        />
                        <MenuList
                            minWidth={320}
                            bg="blue.main"
                            border="none"
                            color="gray.main"
                            fontWeight="bold"
                            zIndex="2"
                        >
                            <VStack>
                                <Link href="/">
                                    <MenuItem
                                        w="100%"
                                        _active={{
                                            transform: "scale(0.90)",
                                            bg: "blue.main",
                                        }}
                                        _focus={{
                                            bg: "blue.main",
                                            border: "none",
                                        }}
                                    >
                                        <Icon as={RiHome2Fill} mr="2" fontSize="20" color="gray.main" />
                                        <Text fontWeight="bold" color="gray.main" textAlign="right" fontSize="16">Home</Text>
                                    </MenuItem>
                                </Link>

                                <Link href="/clients">
                                    <MenuItem
                                        w="100%"
                                        _active={{
                                            transform: "scale(0.90)",
                                            bg: "blue.main",
                                        }}
                                        _focus={{
                                            bg: "blue.main",
                                            border: "none",
                                        }}
                                    >
                                        <Icon as={RiParentFill} mr="2" fontSize="20" color="gray.main" />
                                        <Text fontWeight="bold" color="gray.main" textAlign="right" fontSize="16">Clients</Text>
                                    </MenuItem>
                                </Link>

                                <Link href="/contact">
                                    <MenuItem
                                        w="100%"
                                        _active={{
                                            transform: "scale(0.90)",
                                            bg: "blue.main",
                                        }}
                                        _focus={{
                                            bg: "blue.main",
                                            border: "none",
                                        }}
                                    >
                                        <Icon as={RiUserSmileFill} mr="2" fontSize="20" color="gray.main" />
                                        <Text fontWeight="bold" color="gray.main" textAlign="right" fontSize="16">Contact</Text>
                                    </MenuItem>
                                </Link>
                            </VStack>
                        </MenuList>
                    </Menu>
                )}
            </>
        );
    }


}

