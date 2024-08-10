import { useState } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { OriginalImages, GalleryImages } from "@/data/gallery";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Gallery } from "react-grid-gallery";

const slides = OriginalImages.map(({ original }) => ({
  src: original,
}));

export default function GalleryImage() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);
  return (
    <>
      <Head>
        <title>Ahaay - Gallery</title>
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
        <Container maxW="container.lg" py={20}>
          <Gallery
            margin={8}
            images={GalleryImages}
            enableImageSelection={false}
            onClick={handleClick}
          />
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
