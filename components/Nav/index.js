import { useRef } from "react";
import {
  Box,
  Flex,
  Spacer,
  Container,
  HStack,
  Link,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  IconButton,
  Image,
  useDisclosure,
  DrawerHeader,
  Divider,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { Global } from "@emotion/react";
import { useRouter } from "next/router";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();
  return (
    <>
      <Global
        styles={`
         @import url('https://fonts.googleapis.com/css2?family=Allerta&family=Luckiest+Guy&display=swap');

        .allerta {
          font-family: "Allerta", sans-serif;
          font-optical-sizing: auto;
        }
      `}
      />

      <Box
      //  bgColor="#595959"
      bgColor="#515151"
       >
        <Container maxW="container.lg">
          <HStack>
            <Box>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width="100"
                  height="100"
                  alt="ahaay logo"
                />
              </Link>
            </Box>
            <Spacer />
            <HStack gap={5} display={{ base: "none", lg: "contents" }}>
              <Box>
                <Link
                  as={NextLink}
                  href="/"
                  className="allerta"
                  color={router.asPath === "/" ? "#e04d10" : "white"}
                  fontWeight="bolder"
                  fontSize="13px"
                  style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)" }}
                  _hover={{ textDecoration: "none" }}
                >
                  MENU AHAAY
                </Link>
              </Box>

              <Box>
                <Link
                  as={NextLink}
                  href="/gallery"
                  className="allerta"
                  color={router.asPath === "/gallery" ? "#e04d10" : "white"}
                  fontWeight="bolder"
                  fontSize="13px"
                  style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)" }}
                  _hover={{ textDecoration: "none" }}
                >
                  GALLERY
                </Link>
              </Box>

              <Box>
                <Link
                  as={NextLink}
                  href="/about"
                  color={router.asPath === "/about" ? "#e04d10" : "white"}
                  className="allerta"
                  fontWeight="bolder"
                  fontSize="13px"
                  style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)" }}
                  _hover={{ textDecoration: "none" }}
                >
                  ABOUT
                </Link>
              </Box>
            </HStack>

            <IconButton
              bgColor="transparent"
              color="white"
              _hover={{ bgColor: "transparent" }}
              as={RiMenu3Fill}
              display={{ base: "block", lg: "none" }}
              onClick={onOpen}
            />

            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bgColor="#212121">
                <DrawerCloseButton color="white" />
                <DrawerHeader></DrawerHeader>

                <DrawerBody>
                  <VStack align="start" w="100%">
                    <Box w="100%">
                      <Link
                        as={NextLink}
                        href="/"
                        className="allerta"
                        color={router.asPath === "/" ? "#e04d10" : "white"}
                        fontWeight="bolder"
                        fontSize="13px"
                        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)" }}
                        _hover={{ textDecoration: "none" }}
                      >
                        MENU AHAAY
                      </Link>
                      <Divider />
                    </Box>

                    <Box w="100%">
                      <Link
                        as={NextLink}
                        href="/gallery"
                        className="allerta"
                        color={
                          router.asPath === "/gallery" ? "#e04d10" : "white"
                        }
                        fontWeight="bolder"
                        fontSize="13px"
                        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)" }}
                        _hover={{ textDecoration: "none" }}
                      >
                        GALLERY
                      </Link>
                      <Divider />
                    </Box>

                    <Box w="100%">
                      <Link
                        as={NextLink}
                        href="/about"
                        color={router.asPath === "/about" ? "#e04d10" : "white"}
                        className="allerta"
                        fontWeight="bolder"
                        fontSize="13px"
                        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)" }}
                        _hover={{ textDecoration: "none" }}
                      >
                        ABOUT
                      </Link>
                      <Divider />
                    </Box>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
