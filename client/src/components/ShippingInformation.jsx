import {
  Box,
  Heading,
  VStack,
  FormControl,
  Flex,
  Stack,
  Text,
  Radio,
  RadioGroup,
  Tooltip,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { useDispatch } from "react-redux";
import { setExpress } from "../redux/actions/cartActions";
import { useState } from "react";
import {
  setShippingAddress,
  setShippingAddressError,
} from "../redux/actions/orderActions";

const ShippingInformation = () => {
  const dispatch = useDispatch();
  const [formStateChanged, setFormStateChanged] = useState(false);

  const setErrorState = (input, data) => {
    if (!input) {
      dispatch(setShippingAddress(data));
    }
    if ((!formStateChanged && !input) || (formStateChanged && input)) {
      return;
    } else {
      setFormStateChanged(input);
      dispatch(setShippingAddressError(input));
    }
  };

  return (
    <Formik
      initialValues={{ address: "", postalCode: "", city: "", country: "" }}
      validationSchema={Yup.object({
        address: Yup.string()
          .required("Acest camp este necesar.")
          .min(2, "Adresa este prea scurta"),
        postalCode: Yup.string()
          .required("Acest camp este necesar.")
          .min(2, "Cod postal prea scurt."),
        city: Yup.string()
          .required("Acest camp este necesar.")
          .min(2, "Nume oras prea scurt"),
        country: Yup.string()
          .required("Acest camp este necesar.")
          .min(2, "Nume tara prea scurt"),
      })}
    >
      {(formik) => (
        <VStack as="form">
          <FormControl
            onChange={
              Object.keys(formik.errors).length === 0 &&
              Object.keys(formik.touched).length >= 2
                ? setErrorState(false, formik.values)
                : setErrorState(true)
            }
          >
            <TextField name="address" placeholder="Strada" label="Adresa" />
            <Flex>
              <Box flex="1" mr="10">
                <TextField
                  name="postalCode"
                  placeholder="Cod Postal"
                  label="Cod Postal"
                  type="number"
                />
              </Box>
              <Box flex="2">
                <TextField name="city" placeholder="Oras" label="Oras" />
              </Box>
            </Flex>
            <TextField name="country" placeholder="Tara" label="Tara" />
          </FormControl>
          <Box w="100%" h="180px" pr="5">
            <Heading fontSize="2xl" fontWeight="extrabold" mb="10">
              Metoda de Livrare
            </Heading>
            <RadioGroup
              defaultValue="false"
              onChange={(e) => {
                dispatch(setExpress(e));
              }}
            >
              <Stack
                direction={{ base: "column", lg: "row" }}
                align={{ lg: "flex-start" }}
              >
                <Stack pr="10" spacing={{ base: "8", md: "10" }} flex="1.5">
                  <Box>
                    <Radio value="true">
                      <Text fontWeight="bold">Fan Curier 14.99</Text>
                      <Text>Livrare in 24 ore.</Text>
                    </Radio>
                  </Box>
                  <Stack spacing="6">Standard</Stack>
                </Stack>
                <Radio value="false">
                  <Tooltip label="Livrare gratuita la comenzi peste 1000 RON!">
                    <Box>
                      <Text fontWeight="bold">Standard 4.99</Text>
                      <Text>Livrare in 2 - 3 zile</Text>
                    </Box>
                  </Tooltip>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </VStack>
      )}
    </Formik>
  );
};

export default ShippingInformation;
