import {
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaRegAddressCard,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { GiBeehive } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
const Footer = () => (
  <Box w="100%" bg={useColorModeValue("gray.100", "gray.900")}>
    <Container as="footer" role="contentinfo" maxW="7xl">
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "6", md: "6" }}
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Flex alignItems="center">
            <Icon as={GiBeehive} h={10} w={10} color="orange.400" />
            <Text fontSize="2xl" fontWeight="extrabold">
              Albina de Aur
            </Text>
          </Flex>
          <Text color="muted">Noi iubim albinele!</Text>
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
          spacing={{ base: "12", md: "8" }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36">
              <Text fontSize="1.3em" fontWeight="semibold" color="subtle">
                <Icon
                  as={MdContactPhone}
                  h={5}
                  w={5}
                  color="orange.400"
                  mr="4"
                />
                Contact
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Text fontWeight="medium" display="flex" alignItems="center">
                  <Icon
                    as={FaRegAddressCard}
                    h={5}
                    w={5}
                    color="orange.400"
                    mr="4"
                  />
                  Adresa : jud. Bihor , com. Pietroasa , sat. Motesti
                </Text>
                <Text fontWeight="medium" display="flex" alignItems="center">
                  <Icon
                    as={FaPhoneSquareAlt}
                    h={5}
                    w={5}
                    color="orange.400"
                    mr="4"
                  />
                  Nr Tel : 0722.222.222
                </Text>
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="#"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin fontSize="1.25rem" />}
                  />
                  <IconButton
                    as="a"
                    href="#"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.25rem" />}
                  />
                </ButtonGroup>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="3"
        pb="4"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Albina de Aur, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
