import { Asterisk, Name, Grid } from '@/utils/icons'
import { FlexProps, Heading, Flex } from '@chakra-ui/react'

export function Present({ ...rest }: FlexProps) {
    return (
        <Flex h='100vh' w='100%' alignItems='center' justify='center' position='relative' overflow='hidden' {...rest}>
            <Asterisk w='80%' position='absolute'/>
            <Grid w='40%' opacity={0.2} position='absolute'/>

            <Flex flexDir='column' align='center' gap='1.2rem' zIndex='1'>
                <Heading fontSize='2.2rem' color='width' as='h1'><strong>Olá! Me chamo</strong></Heading>
                <Name w='30rem'/>
            </Flex>
        </Flex>
    )
}