import React from 'react';
import { Flex, Spacer, useBreakpointValue } from '@chakra-ui/react'
import { LogInButton } from '../LogInButton';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { SignUpButton } from '../SignUpButton';
import { MobileMenu } from './MobileMenu';

export function Header() {
    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            minH="20"
            mx="auto"
            px="6"
            align="center"
        >
            <Logo />
            <Spacer />
            <Menu />
            {!isMobileVersion && (
                <>
                    <SignUpButton size="" />
                    <LogInButton />
                </>
            )}
            <MobileMenu showMobileMenu={isMobileVersion} />
        </Flex>
    );
}