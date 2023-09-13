import {
  Box,
  Heading,
  Image,
  Stack,
  keyframes,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Asterisk } from "@/utils/icons";

const animationKeyframes = keyframes`
  0% {  transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;
const animation = `${animationKeyframes} 4s linear infinite`;

export function Present() {
  const { colorMode } = useColorMode();

  return (
    <Stack
      h="100vh"
      justify="center"
      align="center"
      position="relative"
      textAlign="center"
    >
      <Box transform="rotate(3deg)" mb={[10, -100]}>
        <Image
          src="/foto.png"
          alt="André's Picture"
          h={[150, 200, 230]}
          w={[170, 220, 300]}
          objectFit="cover"
          borderRadius={15}
          filter="contrast(1.15)"
        />
        <Box
          as={motion.div}
          animation={animation}
          top={[-5, -10]}
          right={[-5, -10]}
          position="absolute"
        >
          <Asterisk h={[10, 20]} w={[10, 20]} />
        </Box>
      </Box>

      <Heading
        fontSize={[35, 60, 80]}
        as="h1"
        zIndex={1}
        textShadow={`0 0 20px ${
          colorMode === "light"
            ? "var(--chakra-colors-white-shadow)"
            : "var(--chakra-colors-shadow)"
        }`}
      >
        Hello!
        <br />
        <strong>I&rsquo;m André Martins</strong>
      </Heading>
    </Stack>
  );
}
