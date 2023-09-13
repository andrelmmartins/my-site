import { Check, Energy } from '@/utils/icons'
import { StackProps, Heading, Stack, HStack, StackDivider, Text, List, ListItem, ListIcon, Flex, Box } from '@chakra-ui/react'

export function Academic({ ...rest }: StackProps) {

    const events = [
        { type: 'Ensino Médio', local: 'Instituto Federal da Paraíba - Campus Campina Grande', start: 2016, end: 2018, concluded: true },
        { type: 'Ensino Técnico', title: 'Técnico em Informática', local: 'Instituto Federal da Paraíba - Campus Campina Grande', start: 2016, end: 2019, concluded: true },
        { type: 'Ensino Superior', title: 'Ciêcia da Computação', local: 'Universidade Federal de Campina Grande', start: 2019, end: 2024, concluded: false },
        { type: 'Pós Graduação', concluded: false },
    ]

    return (
        <Stack w='100%' py='80px' align='flex-start' spacing='40px' {...rest}>
            <Energy h='75px' />
            <Heading as='h2' fontSize='1.7rem'>Desde <strong>2016</strong> atuando na programação!</Heading>
            <HStack align='flex-start' spacing='25px' w='50%' whiteSpace='nowrap' overflowX='scroll'>
                {
                    events.map((event, index) => (
                        
                        <Box key={'academic-event-' + index} w='300px' borderRadius='5px' overflow='hidden'>
                            
                            <Flex
                                h='50px'
                                bg='white.3'
                                justify='space-between'
                                align='center'
                                p='20px'
                            >
                                <Text fontWeight='bold' color={event.start ? 'black' : 'white.4'}>{event.type}</Text>
                                <Check w='15px' fill={ event.concluded ? 'green' : 'white.4'}/>
                            </Flex>
                            
                            <Stack bg='white.1' p='20px' minH='50px'>
                                { event?.title && 
                                    <Heading as='h4' fontSize='1.2rem' fontWeight='bold'>{event.title}</Heading>}
                                { event?.local &&
                                    <Text fontSize='1rem' color='white.5' lineHeight='1.2rem'>{event.local}</Text>}

                                { event?.start && event?.end && (
                                    <>
                                        <StackDivider border='1px' color='green' w='40px'/>
                                        <Text>{event.start} à {event.end}</Text>
                                    </>
                                )}
                            </Stack>
                        </Box>
                    ))
                }
            </HStack>
        </Stack>
    )
}