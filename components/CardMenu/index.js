import { useState } from "react";
import Shapeprice from "@/public/images/shapeprice.svg";
import {
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  HStack,
  Image,
  Code,
  VStack,
  ModalHeader,
  Spacer,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import ImageWrapper from "../ImageWrapper";
import { Global } from "@emotion/react";
import { SiGrab } from "react-icons/si";
import { MdOutlineWhatsapp } from "react-icons/md";
import Link from "next/link";

export default function CardMenu({ image, title, description, detailPrice }) {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleCardMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleCloseModal = () => {
    setSelectedMenu(null);
  };
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
        w="100%"
        position="relative"
        onClick={() =>
          handleCardMenuClick({
            foto: image,
            menu: title,
            desc: description,
            priceMenu: detailPrice,
          })
        }
      >
        <ImageWrapper
          src={image}
          priceMenu={detailPrice}
          title={title}
          alt="makanan"
        />
      </Box>
      <Modal
        size="xl"
        isOpen={selectedMenu !== null}
        onClose={handleCloseModal}
      >
        <ModalOverlay />
        <ModalContent bgColor="#2b2b2b" padding={0}>
          <ModalCloseButton color="#f7b414" />
          <ModalHeader></ModalHeader>
          {selectedMenu && (
            <ModalBody p={5}>
              <Stack
                direction={{ base: "column", md: "row" }}
                align="start"
                gap={2}
              >
                <Box width={{ base: "100%", md: "60%" }}>
                  <Image
                    src={selectedMenu?.foto}
                    alt={selectedMenu?.menu}
                    layout="responsive"
                    w="100%"
                    borderRadius="10px"
                    objectFit="cover"
                  />
                </Box>
                <Spacer />
                <Box w={{ base: "100%", md: "40%" }}>
                  <Text
                    mb="20px"
                    color="#e24c11"
                    className="chrisyeFont"
                    textAlign="left"
                    fontSize="20px"
                    fontWeight="bold"
                  >
                    {selectedMenu?.menu}
                  </Text>
                  <Text
                    mb="20px"
                    color="white"
                    fontWeight="normal"
                    fontSize="12px"
                    textAlign="justify"
                  >
                    {selectedMenu?.desc}
                  </Text>
                  <VStack align="start">
                    {selectedMenu.priceMenu.map((data, index) => (
                      <Code key={index} colorScheme="yellow">
                        {`${data.title_price}${
                          data.title_price ? ":" : ""
                        } IDR ${data.price}K`}
                      </Code>
                    ))}
                  </VStack>
                  <HStack w="100%" mt={5}>
                    <IconButton
                      as={Link}
                      href="https://r.grab.com/g/6-20240812_223929_A73CCAE66F1845FF8B8FD9DB60FDAA19_MEXMPS-6-C6CXAYACTKLAKE"
                      target="_blank"
                      aria-label="find us on Grab"
                      icon={<SiGrab />}
                      fontSize="25px"
                      color="#00B14F"
                    />
                    <IconButton
                      as={Link}
                      href={`https://wa.me/6285150959577?text=Halo Ahaay, Saya mau order ${title}`}
                      target="_blank"
                      aria-label="reach us on Whatsaap"
                      icon={<MdOutlineWhatsapp />}
                      fontSize="25px"
                      color="#25D366"
                    />
                  </HStack>
                </Box>
              </Stack>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
