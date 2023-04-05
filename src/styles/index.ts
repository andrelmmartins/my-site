import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

        config: {
            initialColorMode: 'system',
            useSystemColorMode: true,
        },

        colors: {
            black: '#121B16',
            white: {
                1: '#FAFAFA',
                2: '#F5F5F5',
                3: '#EFEFEF',
                4: '#DDDDDD',
                5: '#AAAAAA'
            },
            green: '#29D967',
        },

        styles: {
            global: (props: any) => ({
                'html, body': {
                    bg: props.colorMode == 'light' ? 'white.2' : 'black',
                    color: props.colorMode == 'light' ? 'black' : 'white.2',
                    fontWeight: 'normal',
                },
                'strong': {
                    fontWeight: 'bold'
                }
            })
        }, 

        fonts: {
            body: 'DM Mono',
            heading: 'DM Mono'
        },

        fontWeights: {
            normal: 400,
            bold: 500,
        },

        components: {
            Heading: {
                baseStyle: {
                    fontWeight: 'normal',
                }
            }
        }
    }
)