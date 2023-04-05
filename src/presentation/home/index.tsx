import { Flex, Stack } from '@chakra-ui/react'

import { Left } from '@/components/Left'
import { Right } from '@/components/Right'
import * as sections from './sections'

export function Presentation() {

    return (
        <Flex h='100vh' w='100vw' overflowX='hidden' id='content'>
            <Left />
            
            <Stack as='main' w='100%' h='fit-content'>
                {
                    Object.entries(sections).map(([name, Element], index) => 
                        <Element
                            key={name + '-' + index}
                        />
                    )
                }
            </Stack>
            
            <Right/>       
        </Flex>

    )
}