import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme(
    withDefaultColorScheme({ colorScheme: 'white'}),
    {
        colors: {
            black: '#121B16',
            white: '#EFEFEF',
            green: '#29D967'
        },

        fonts: {
            body: 'DM Mono',
            heading: 'DM Mono'
        }
    }
)