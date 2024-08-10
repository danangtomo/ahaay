import Logo from "@/public/images/logo.png";
import LogoSecond from "@/public/images/logo-2.png";
import Image from "next/image";
import NextLink from "next/link";
import InstagramIcon from "@/public/images/instagram-icon.svg";
import TiktokIcon from "@/public/images/tiktok-icon.svg";
import {
  Flex,
  Spacer,
  Box,
  HStack,
  Text,
  Link,
  Container,
  Stack,
  VStack,
  Center,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#404040",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Container maxW="container.lg">
        <Center mb="20px" display={{ base: "flex", lg: "none" }}>
          <Box>
            <Image src={LogoSecond} width="120" height="120" alt="Ahaay-logo" />
          </Box>
        </Center>
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Box display={{ base: "none", lg: "block" }} mr={5}>
            <Image src={LogoSecond} width="120" height="120" alt="Ahaay-logo" />
          </Box>
          <Box>
            <Text color="white">Food Court Aryana</Text>
            <Text color="white">
              Jl. Aryana Karawaci, Suka Bakti, Kec. Curug, Kabupaten
            </Text>
            <Text color="white">Tangerang, Banten 15810</Text>
            <Text color="white">Telp : +62 851 5095 9577</Text>
          </Box>
          <Spacer />
          <Box>
            <HStack>
              <Box>
                <Text color="white">Follow us on</Text>
              </Box>
              <Box>
                <HStack gap="1">
                  <Link
                    as={NextLink}
                    href="https://www.instagram.com/ahaay.scorta"
                    target="_blank"
                  >
                    <Image
                      src={InstagramIcon}
                      width="30"
                      height="30"
                      alt="Instagram Icon"
                    />
                  </Link>

                  <Link
                    as={NextLink}
                    href="https://www.tiktok.com/@ahaaybyscorta"
                    target="_blank"
                  >
                    <Image
                      src={TiktokIcon}
                      width="27"
                      height="27"
                      alt="Tiktok Icon"
                    />
                  </Link>
                </HStack>
              </Box>
            </HStack>

            <Text color="white">©2024 Ahaay By Scorta</Text>
          </Box>
        </Stack>
      </Container>
    </footer>
  );
}
