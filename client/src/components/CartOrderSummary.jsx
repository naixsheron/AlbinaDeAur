import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";

const CartOrderSummary = () => {
  const [buttonLoading, setButtonLoading] = useState();
  const standardShipping = Number(4.99).toFixed(2);
  const cartItems = useSelector((state) => state.cart);
  const { subtotal } = cartItems;
  const navigate = useNavigate();

  const checkoutHandler = () => {
    setButtonLoading(true);
    navigate("/checkout");
  };

  return (
    <Stack
      spacing="8"
      boxShadow="2xl"
      borderWidth="1px"
      rounded="lg"
      padding="12"
      w="full"
    >
      <Heading size="md">Rezumat Comanda</Heading>
      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
            Suma partiala
          </Text>
          <Text fontWeight="medium">{subtotal}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
            Livrare
          </Text>
          <Text fontWeight="medium">
            {subtotal <= 1000 ? (
              standardShipping
            ) : (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                Gratis
              </Badge>
            )}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontSize="xl" fontWeight="medium">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            {subtotal <= 1000
              ? (Number(subtotal) + Number(standardShipping)).toFixed(2)
              : subtotal.toFixed(2)}
            RON
          </Text>
        </Flex>
      </Stack>
      <Button
        as={ReactLink}
        to="/checkout"
        colorScheme="orange"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        isLoading={buttonLoading}
        onClick={() => checkoutHandler()}
      >
        Plasare comanda
      </Button>
    </Stack>
  );
};

export default CartOrderSummary;
