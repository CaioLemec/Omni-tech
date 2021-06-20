import { Image, Link } from "@chakra-ui/react"

export function Logo() {
    return (
        <>
            <Link href="/">
                <Image src="images/logo.png" alt="Logotype"></Image>
            </Link>
        </>
    );
}