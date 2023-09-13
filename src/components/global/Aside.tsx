import { MiniLogo, ThemeIcon } from "@/utils/icons";
import { Box, Flex, Stack, useColorMode } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useEffect } from "react";

export default function Aside({ side }: { side: "left" | "right" }) {
  if (side === "left") return <Left />;
  return <Right />;
}

function Left() {
  const size = 10;

  return (
    <Stack as="aside" p={size} gap={size} align="center">
      <MiniLogo h={size} w={size} />
      <ScrollFollower />
    </Stack>
  );
}

function ScrollFollower() {
  useEffect(() => {
    const $bar = document.getElementById("follower-bar");
    const $thumb = document.getElementById("follower-thumb");
    const $content = document.getElementById("content");

    $content?.addEventListener("scroll", updateScrollBar);

    function updateScrollBar() {
      if ($bar && $thumb && $content) {
        const thumbHeight =
          ($content.clientHeight / $content.scrollHeight) * $bar.clientHeight;

        $thumb.style.height = thumbHeight + "px";
        const scrollPercentage =
          ($content.scrollTop /
            ($content.scrollHeight - $content.clientHeight)) *
          100;
        const thumbPosition =
          ($bar.clientHeight - $thumb.clientHeight) * (scrollPercentage / 100);
        if (thumbPosition < 16) {
          $thumb.style.top = "16px";
        } else $thumb.style.top = thumbPosition + "px";
      }
    }

    updateScrollBar();
  }, []);

  const { colorMode } = useColorMode();

  return (
    <Flex
      bg={colorMode === "light" ? "black" : "white.5"}
      h="full"
      w={0.5}
      position="relative"
      justify="center"
      id="follower-bar"
    >
      <Box
        bg={colorMode === "light" ? "black" : "white.2"}
        transition="all 0.2s"
        w="8px"
        position="absolute"
        id="follower-thumb"
        transform="translateY(-8px)"
      ></Box>
    </Flex>
  );
}

function Right() {
  const { toggleColorMode } = useColorMode();

  const size = 10;

  return (
    <Stack as="aside" p={size} gap={size} align="center">
      <ThemeIcon h={size} w={size} onClick={toggleColorMode} cursor="pointer" />
    </Stack>
  );
}
