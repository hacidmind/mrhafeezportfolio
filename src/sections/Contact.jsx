import { Box, Flex, Icon, SimpleGrid } from "@chakra-ui/react";
import data from "../utils/data";
import { BsTelephone } from "react-icons/bs";
import {  slideSides } from "../utils/FramerVariants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box id="contact">
      <h2>Contact</h2>
      <Box mt={{ base: "50px", lg: "70px" }}>
        <SimpleGrid gap={50} columns={{ base: 1, md: 3 }}>
          {data.contact.map((each, index) => (
            <Flex
              as={motion.div}
              variants={slideSides(index, -100, 0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.25 }}
              key={each.id}
              h={{ base: "280px", md: "320px" }}
              boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.25)"}
              justifySelf={"center"}
              width={"100%"}
              maxW={"400px"}
              justify={"center"}
              align={"center"}
              p={"20px"}
            >
              <Flex direction={"column"} align={"center"} gap={"10px"}>
                <p
                  className="fw-600"
                  style={{ wordBreak: "break-all", textAlign: "center" }}
                >
                  {each.head}
                </p>
                <a target="_blank" rel="noopener noreferrer">
                  <p
                    className="fw-600 text-purple"
                    style={{ wordBreak: "break-all", textAlign: "center" }}
                  >
                    {each.link}
                  </p>
                </a>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
