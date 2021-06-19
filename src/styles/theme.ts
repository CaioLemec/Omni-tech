import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme ({
    colors: {
        gray: {
            "main": "#FCFCFC"
        },
        purple: {
            "main": "#5D576B"
        },
        blue: {
            "main": "#99E1D9"
        },
        pink: {
            "main": "#F7567C"
        },
        yellow: {
            "main": "#FFFAE3"
        },
    },
    fonts: {
        heading: 'Montserrat',
        body: 'Montserrat'
    },
    styles: {
        global: {
            body: {
                bg: 'purple.main',
                color: 'gray.main'
            }
        }
    }
})