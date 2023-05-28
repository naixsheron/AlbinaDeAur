import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Divider,
  Stack,
  useColorModeValue,
  Text,
  color,
} from "@chakra-ui/react";
import { FaShippingFast } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { Link as ReactLink } from "react-router-dom";
import { GiTechnoHeart } from "react-icons/gi";

import {
  GiBeehive,
  GiHoneyJar,
  GiBee,
  GiTreeBeehive,
  GiPollenDust,
} from "react-icons/gi";

const LandingScreen = () => (
  <Box
    maxW="8xl"
    mx="auto"
    px={{ base: "0", lg: "12" }}
    py={{ base: "0", lg: "12" }}
    minH="6xl"
  >
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        transform={{ base: "translateY(-50%)", lg: "none" }}
        bg={{
          base: useColorModeValue("orange.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{ base: "6", md: "8", lg: "0" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "8", lg: "10" }}>
          <Stack spacing={{ base: "2", lg: "4" }} mb="12">
            <Flex alignItems="center">
              <Icon
                as={GiTechnoHeart}
                h={12}
                w={12}
                color={useColorModeValue("orange.500", "orange.300")}
              />
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
                Albina de Aur
              </Text>
            </Flex>
            <Heading size={{ base: "lg", md: "xl" }} fontWeight="normal">
              Îmbrățișează puterea albinelor pentru o viață sănătoasă
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link
              as={ReactLink}
              to="/products"
              fontWeight="bold"
              fontSize="lg"
              p="2"
              class="button button--pen"
            >
              <div class="button__wrapper">
                <span class="button__text">Descopera</span>
              </div>
              <div class="characterBox">
                <div class="character wakeup">
                  <div class="character__face"></div>
                  <div class="charactor__face2"></div>
                </div>
                <div class="character wakeup">
                  <div class="character__face"></div>
                  <div class="charactor__face2"></div>
                </div>
                <div class="character">
                  <div class="character__face"></div>
                  <div class="charactor__face2"></div>
                </div>
              </div>
            </Link>
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="images/apicol2.jpg"
          alt="La rapita"
          fallback={<Skeleton />}
          minW="550"
          minH="400"
          objectFit="cover"
          flex="1"
          className="wasteland "
        />
      </Flex>
    </Stack>

    <Text
      px={{ base: "6", lg: "12" }}
      py={{ base: "6", lg: "12" }}
      fontSize="medium"
      mb="15px"
      color={useColorModeValue("gray.500", "gray.300")}
    >
      Produsele apicole, cum ar fi mierea, propolisul și polenul, oferă
      numeroase beneficii pentru sănătatea noastră. Acestea sunt surse naturale
      de nutrienți, enzime și antioxidanți care pot sprijini sistemul imunitar,
      promova digestia sănătoasă, calma iritațiile gâtului și îmbunătăți starea
      pielii. Mierea, în special, este recunoscută pentru proprietățile sale
      antibacteriene și antivirale. Produsele apicole pot fi integrate în
      alimentație, în rutina de îngrijire personală sau pot fi utilizate în
      remedii naturale pentru diverse afecțiuni. Consumul lor susține, de
      asemenea, sustenabilitatea și protejarea albinelor, care sunt polenizatori
      esențiali pentru ecosistemul nostru.
    </Text>
    <Divider />

    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        transform={{ base: "translateY(-50%)", lg: "none" }}
        bg={{
          base: useColorModeValue("orange.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{ base: "6", md: "8", lg: "0" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "8", lg: "10" }}>
          <Stack spacing={{ base: "2", lg: "4" }} mb="8">
            <Flex alignItems="center">
              <Icon
                as={GiBeehive}
                h={12}
                w={12}
                color={useColorModeValue("orange.500", "orange.300")}
              />
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
                Adopta un Stup
              </Text>
            </Flex>
            <Heading size={{ base: "lg", md: "xl" }} fontWeight="normal">
              Prin adoptarea unui singur stup susții peste 60.000 de albine și
              un apicultor local. Contribuția ta contează.
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link
              as={ReactLink}
              to="/products"
              fontWeight="bold"
              fontSize="lg"
              class="button button--piyo"
            >
              <div class="button__wrapper">
                <span class="button__text">Adopta</span>
              </div>
              <div class="characterBox">
                <div class="character wakeup">
                  <div class="character__face"></div>
                </div>
                <div class="character wakeup">
                  <div class="character__face"></div>
                </div>
                <div class="character">
                  <div class="character__face"></div>
                </div>
              </div>
            </Link>
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          mt="8"
          src="images/albines.jpg"
          alt="La rapita"
          fallback={<Skeleton />}
          width="500px"
          height="450px"
          objectFit="cover"
          flex="1"
          borderRadius={{
            base: "20%",
            md: "10%",
            lg: "0 20% 20% 0",
          }}
        />
      </Flex>
    </Stack>
    <Flex
      flex="1"
      overflow="hidden"
      alignItems="center"
      flexDirection={{ base: "column", lg: "row" }}
      flexWrap={{ base: "nowrap", lg: "wrap" }}
      py="10"
    >
      <Flex alignItems="center" mb={2} flexBasis={{ base: "100%", lg: "50%" }}>
        <Icon
          as={GiHoneyJar}
          h={12}
          w={12}
          color={useColorModeValue("orange.500", "orange.300")}
          mr={2}
        />
        <Text fontSize="sm" fontWeight="medium">
          3 borcane de miere pură pe lună a câte 450 g fiecare
        </Text>
      </Flex>
      <Flex alignItems="center" mb={2} flexBasis={{ base: "100%", lg: "50%" }}>
        <Icon
          as={GiBee}
          h={12}
          w={12}
          color={useColorModeValue("orange.500", "orange.300")}
          mr={2}
        />
        <Text fontSize="sm" fontWeight="medium">
          Denumește-ți stupul și matca
        </Text>
      </Flex>
      <Flex alignItems="center" mb={2} flexBasis={{ base: "100%", lg: "50%" }}>
        <Icon
          as={GiTreeBeehive}
          h={12}
          w={12}
          color={useColorModeValue("orange.500", "orange.300")}
          mr={2}
        />
        <Text fontSize="sm" fontWeight="medium">
          Plantăm câte un copac pentru fiecare abonament
        </Text>
      </Flex>
      <Flex alignItems="center" mb={2} flexBasis={{ base: "100%", lg: "50%" }}>
        <Icon
          as={GiPollenDust}
          h={12}
          w={12}
          color={useColorModeValue("orange.500", "orange.300")}
          mr={2}
        />
        <Text fontSize="sm" fontWeight="medium">
          2 caserole de polen crud pe lună a câte 100 g fiecare
        </Text>
      </Flex>
      <Flex alignItems="center" mb={2} flexBasis={{ base: "100%", lg: "50%" }}>
        <Icon
          as={BiBookReader}
          h={12}
          w={12}
          color={useColorModeValue("orange.500", "orange.300")}
          mr={2}
        />
        <Text fontSize="sm" fontWeight="medium">
          O carte digitală de bucate cu rețete cu produse apicole
        </Text>
      </Flex>
      <Flex alignItems="center" mb={2} flexBasis={{ base: "100%", lg: "50%" }}>
        <Icon
          as={FaShippingFast}
          h={12}
          w={12}
          color={useColorModeValue("orange.500", "orange.300")}
          mr={2}
        />
        <Text fontSize="sm" fontWeight="medium">
          Livrare gratuita.
        </Text>
      </Flex>
    </Flex>

    <Divider />
  </Box>
);

export default LandingScreen;
