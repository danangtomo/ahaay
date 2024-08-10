import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Text, Box, Container, Spacer, Image, Stack } from "@chakra-ui/react";
import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <title>Ahaay - About</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <Nav />
      <Box bgColor="#2b2b2b" minH="100vh">
        <Container maxW="container.lg" paddingY="100px">
          <Stack direction={{base: "column", md: "row"}}>
            <Box width={{base: "100%", md: "50%"}}>
              <Text
                className="chrisyeFont"
                fontWeight="bold"
                color="white"
                mb="20px"
                fontSize="35px"
                textShadow="2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000;"
              >
                What is Ahaay & Scorta
              </Text>
              <Text className="chrisyeFont" color="white">
                <span style={{ color: "#f7b414", fontSize: "23px" }}>A</span>{" "}
                nak muda yang Slengean dan
              </Text>
              <Text className="chrisyeFont" color="white">
                <span style={{ color: "#f7b414", fontSize: "23px" }}>H</span>{" "}
                alusinasi yang tinggi & punya mimpi juga
              </Text>
              <Text className="chrisyeFont" color="white">
                <span style={{ color: "#f7b414", fontSize: "23px" }}>A</span>{" "}
                mbisi dan
              </Text>
              <Text className="chrisyeFont" color="white">
                <span style={{ color: "#f7b414", fontSize: "23px" }}>A</span>{" "}
                ntusiasme
              </Text>
              <Text className="chrisyeFont" color="white">
                <span style={{ color: "#f7b414", fontSize: "23px" }}>Y</span>{" "}
                ang Yakin untuk mewujudkan mimpi besarnya.
              </Text>

              <Text
                className="chrisyeFont"
                color="#f7b414"
                mt="30px"
                fontSize="35px"
              >
                By SCORTA
              </Text>
              <Text color="white">
                Sekelompok Anak muda yang Slengean, gak romantis, kadang semau
                maunya tapi punya sikap tegas , berani dan punya karakter yang
                kuat & unik , kreatif, energik, pantang menyerah & semangat yang
                tinggi untuk membeli mimpi yang belum terbeli.
              </Text>
            </Box>
            <Spacer />
            <Box width={{base: "100%", md: "50%"}}>
              <Image src="/images/logo.png" width="100%" alt="Ahaay-logo" />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
