import Image from "next/image";
import { Box, Text, Center, Container, SimpleGrid } from "@chakra-ui/react";
import Logo from "@/public/images/logo.png";
import Nav from "@/components/Nav";
import data from "@/data";
import CardMenu from "@/components/CardMenu";
import Footer from "@/components/Footer";
import { Global } from "@emotion/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Global
        styles={`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

        .luckiest {
          font-family: "Luckiest Guy", cursive;
          font-optical-sizing: auto;
        }
      `}
      />

      <Head>
        <title>Ahaay</title>
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
      <main style={{ backgroundColor: "#212121" }}>
        <Nav />

        <Box>
          <Center>
            <Image src={Logo} width="300" height="300" alt="Ahaay-logo" />
          </Center>
        </Box>

        <Container maxW="container.lg" mt="20px">
          {data.map((data, index) => (
            <Box key={index} mb="100px">
              <Text
                className="luckiest"
                // color="#f7b414"
                color="#ffcc56"
                textAlign="center"
                fontWeight="bold"
                fontSize="30px"
              >
                {data.section.toUpperCase()}
              </Text>
              <SimpleGrid
                mt="50px"
                columns={{ base: 1, sm: 2, xl: 3 }}
                spacing={16}
                alignContent="center"
              >
                {data.section_menus.map((data, index) => (
                  <CardMenu
                    key={index}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    detailPrice={data.detail_price}
                  />
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Container>

        <Footer />
      </main>
    </>
  );
}
