import {
  Tr,
  Td,
  Button,
  VStack,
  Textarea,
  Tooltip,
  Input,
  FormControl,
  Switch,
  FormLabel,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { uploadProduct } from "../redux/actions/adminActions";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [productIsNew, setProductIsNew] = useState(true);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const createNewProduct = () => {
    dispatch(
      uploadProduct({
        brand,
        name,
        category,
        stock,
        price,
        image,
        productIsNew,
        description,
      })
    );
  };

  return (
    <Tr>
      <Td>
        <Text fontSize="sm">Nume Imagine</Text>
        <Tooltip
          label={"Setați numele imaginii, de exemplu, poza.jpg."}
          fontSize="sm"
        >
          <Input
            size="sm"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="... poza.jpg"
          />
        </Tooltip>
      </Td>
      <Td>
        <Text fontSize="sm">Descriere</Text>
        <Textarea
          value={description}
          w="270px"
          h="120px"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Descriere produs"
          size="sm"
        />
      </Td>
      <Td>
        <Text fontSize="sm">Marca</Text>
        <Input
          size="sm"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Miere sau Polen."
        />
        <Text fontSize="sm">Nume</Text>
        <Input
          size="sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Miere Salcam"
        />
      </Td>

      <Td>
        <Text fontSize="sm">Gramaj</Text>
        <Input
          size="sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="ex,1 kilogram sau 250 grame"
        />
        <Text fontSize="sm">Price</Text>
        <Input
          size="sm"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="29.99"
        />
      </Td>

      <Td>
        <Text fontSize="sm">Stoc</Text>
        <Input
          size="sm"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <Text fontSize="sm">Noul ecuson afișat pe cartea produsului</Text>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="productIsNewFlag" mb="0" fontSize="sm">
            Activati
            <Badge
              rounded="full"
              px="1"
              mx="1"
              fontSize="0.8em"
              colorScheme="green"
            >
              Nou
            </Badge>
            ecuson?
          </FormLabel>
          <Switch
            id="productIsNewFlag"
            onChange={() => setProductIsNew(!productIsNew)}
            isChecked={productIsNew}
          />
        </FormControl>
      </Td>
      <Td>
        <VStack>
          <Button
            variant="outline"
            w="160px"
            colorScheme="orange"
            onClick={() => createNewProduct()}
          >
            <MdDriveFolderUpload />
            <Text ml="2">Salveaza produs</Text>
          </Button>
        </VStack>
      </Td>
    </Tr>
  );
};

export default AddNewProduct;
