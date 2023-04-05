import { useEffect, useState } from 'react'
import { Box, Flex, FlexProps } from '@chakra-ui/react'

import { MiniLogo } from '@/utils/icons'

interface Props extends FlexProps {

}

export function Left({ ...rest }: Props) {
    
    const space = 40 // px

    return (
        <Flex as='aside' h='100%' w={space * 3 + 'px'} p={space + 'px'} position='sticky' top='0' flexDir='column' align='center' gap={space + 'px'} {...rest}>
            <MiniLogo w={space + 'px'} h={space + 'px'}/>

            <Flex h='100%' w='2px' bg='black' justify='center' pos='relative' paddingY='7px' id='fake-scroll' >
            
            </Flex>
        </Flex>
    )
}