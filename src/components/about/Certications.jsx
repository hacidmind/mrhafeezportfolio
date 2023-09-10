import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import data from "../../utils/data";
import { motion } from "framer-motion";
import { slideSides } from "../../utils/FramerVariants";
import TypingText from "../TypingText";

const Certications = () => {
  return (
    <Box>
      <TypingText title={"MY CERTIFICATIONS"} />
      <SimpleGrid columns={{ sm: 2, lg: 4 }} gap={5} mt={"10px"}>
        {data.certifications.map((each, index) => (
          <Flex
            as={motion.div}
            variants={slideSides(index, -100, 0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
            direction={"column"}
            align={"center"}
            textAlign={"center"}
            key={index}
            bg={"white"}
            boxShadow={"0px 1.7px 4px rgb(0,0,0,0.25)"}
            p={"50px 20px"}
            justifyContent={"center"}
            maxW={{ base: "450px", sm: "100%" }}
            justifySelf={"center"}
          >
            <Box
              w={{ base: "80px", md: "100px" }}
              h={{ base: "55px", md: "75px" }}
              mb={"15px"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src={each.image}
              />
            </Box>
            <h6 className="tiny-text fw-600">{each.about}</h6>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Certications;
