import { Flex, Stack } from "@chakra-ui/react";

import Aside from "@/components/global/Aside";
import * as sections from "./sections";

export function Presentation() {
  return (
    <Flex h="100vh" w="100vw" overflow="hidden">
      <Aside side="left" />
      <Stack
        w="full"
        as="main"
        id="content"
        overflowY="scroll"
        overflowX="hidden"
        className="scrollbar-none"
      >
        {Object.values(sections).map((Section, index) => (
          <Section key={`section-${index}`} />
        ))}
      </Stack>
      <Aside side="right" />
    </Flex>
  );
}
