import { Code } from '@/utils/icons'
import { StackProps, Heading, Stack, HStack, StackDivider, Text, List, ListItem } from '@chakra-ui/react'

export function Skills({ ...rest }: StackProps) {

    const techs = [
        {title: 'Engenharia', list: ['Next.js', 'React', 'React Native', 'Node.js', 'JavaScript', 'TypeScript', 'Git/GitHub']},
        {title: 'UX/UI e Design', list: ['Figma', 'Wireframes', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator']},
        {title: 'Soft Skills', list: ['Comunicação', 'Trabalho em grupo', 'Ensino', 'Liderança']}
    ]

    return (
        <Stack w='100%' py='120px' spacing='40px' {...rest}>
            <HStack w='100%' align='flex-start' justify='space-between'>
                <Heading fontSize='4.5rem' lineHeight='4.5rem' as='h1'><strong>Desenvolvedor<br/>FrontEnd,</strong><br/>Designer,<br/>UX/UI</Heading>
                <Code h='60px'/>
            </HStack>
            
            <StackDivider border='1px' color='green' w='300px'/>
            
            <HStack spacing='100px' align='flex-start'>
                {
                    techs.map((tech, index) => (
                        <Stack spacing='15px' key={tech.title + '-' + index}>
                            <Heading as='h3' fontSize='1.5rem'><strong>{tech.title}</strong></Heading>
                            <Stack pl='10px'>
                                <List>
                                    { 
                                        tech.list.map((element, index) => (
                                            <ListItem key={tech.title + '-item-' + index}>
                                                <Text fontSize='1.2rem'>· {element}</Text>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Stack>
                        </Stack>
                    ))
                }
            </HStack>
        </Stack>
    )
}