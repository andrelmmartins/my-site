import { Button, Flex, FlexProps, useColorMode } from '@chakra-ui/react'

import { ThemeIcon } from '@/utils/icons'

interface Props extends FlexProps {

}

export function Right({ ...rest }: Props) {
    
    const { toggleColorMode } = useColorMode()
    
    let space = 40 // px
    
    return (
        <Flex as='aside' h='100%' w={space * 3 + 'px'} p={space + 'px'} position='sticky' top='0' flexDir='column' justify='space-between' {...rest}>
            <Button variant='unstyled' onClick={toggleColorMode}>
                <ThemeIcon w={space + 'px'} h={space + 'px'} />
            </Button>
        </Flex>
    )
}