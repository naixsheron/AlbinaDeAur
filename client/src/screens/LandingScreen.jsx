import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";
import { GiTechnoHeart } from "react-icons/gi";

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
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Flex alignItems="center">
              <Icon
                as={GiTechnoHeart}
                h={12}
                w={12}
                color={useColorModeValue("orange.500", "orange.300")}
              />
              <Text fontSize="4xl" fontWeight="bold">
                Albina de Aur
              </Text>
            </Flex>
            <Heading size="xl" fontWeight="normal">
              Îmbrățișează puterea albinelor pentru o viață sănătoasă
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link
              as={ReactLink}
              to="/products"
              color={useColorModeValue("orange.500", "orange.300")}
              fontWeight="bold"
              fontSize="lg"
            >
              Descoperă acum
            </Link>
            <Icon
              color={useColorModeValue("orange.500", "ornage.300")}
              as={FaArrowRight}
            />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="images/apicol2.jpg"
          alt="La rapita"
          fallback={<Skeleton />}
          maxH="550px"
          minW="300px"
          objectFit="cover"
          flex="1"
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
  </Box>
);

export default LandingScreen;
