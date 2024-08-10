import { Box, Image, Text } from "@chakra-ui/react";

const ImageWrapper = ({ src, alt, priceMenu, title }) => {
  return (
    <Box
      position="relative"
      width="100%"
      height="200px"
      // overflow="hidden"
      borderRadius="md"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        paddingTop="56.25%"
        _hover={{cursor: "pointer"}}
        // overflow="hidden"
      >
        <Box
          bgColor="#f7b414"
          position="absolute"
          clipPath="polygon(10% 10%, 90% 20%, 80% 80%, 20% 90%)"
          zIndex={3}
          bottom="-25px"
          right={{ base: "0px", lg: "-30px" }}
          // right="-30px"
          px={4}
          py={5}
        >
          {priceMenu.map((data, index) => (
            <Text
              className="allerta"
              key={index}
              color="saddlebrown"
              fontWeight="semibold"
              fontSize="20px"
            >
              {data.price}K
            </Text>
          ))}
        </Box>
        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          position="absolute"
          top="0"
          borderRadius="md"
          left="0"
          width="100%"
          height="100%"
        />
      </Box>
      <Box bgColor="rgba(0, 0, 0, 0.3)" width="100%" borderTopRadius="5px" position="absolute" top="0">
        <Text
          className="allerta"
          fontWeight="bold"
          textShadow="4px 4px 4px rgba(0, 0, 0, 0.7)"
          color="white"
          textAlign="center"
          fontSize="14px"
        >
          {title.toUpperCase()}
        </Text>
      </Box>
    </Box>
  );
};

export default ImageWrapper;
