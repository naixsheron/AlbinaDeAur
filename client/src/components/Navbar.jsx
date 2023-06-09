import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  useToast,
  MenuButton,
  MenuDivider,
  Menu,
  MenuList,
  MenuItem,
  useStyleConfig,
} from "@chakra-ui/react";
import { GiBee } from "react-icons/gi";
import { Link as ReactLink } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import {
  MdLocalShipping,
  MdLogout,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { motion } from "framer-motion";

const ShoppingCartIcon = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;
  const [bump, setBump] = useState(false);
  const styles = useStyleConfig("ShoppingCartIcon");

  useEffect(() => {
    if (cart.length > 0) {
      setBump(true);
      const timer = setTimeout(() => {
        setBump(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [cart.length]);

  return (
    <Flex alignItems="center">
      <motion.div
        as={Text}
        sx={styles}
        className={bump ? "bump-animation" : ""}
        animate={{ scale: bump ? 1.2 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Text
          fontStyle="italic"
          fontWeight="extrabold"
          color="orange.400"
          as="sub"
          fontSize="md"
        >
          {cart.length}
        </Text>
        <Icon ml="-1.5" as={FiShoppingCart} h="4" w="7" alignSelf="center" />
        Cosul meu
      </motion.div>
    </Flex>
  );
};

const links = [
  { linkName: "Produse", path: "/products" },
  { linkName: <ShoppingCartIcon />, path: "/cart" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isHovering, setIsHovering] = useState(false);
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const dispatch = useDispatch();
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logout());
    toast({
      description: "Ai fost delogat.",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          <Link
            as={ReactLink}
            to="/"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Flex alignItems="center">
              <Icon
                as={GiBee}
                h={10}
                w={10}
                color={isHovering ? "cyan.400" : "orange.400"}
              />
              <Text fontWeight="extrabold">Albina de Aur</Text>
            </Flex>
          </Link>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Icon
            cursor="pointer"
            mr="3"
            as={colorMode === "light" ? MoonIcon : SunIcon}
            alignSelf="center"
            onClick={() => toggleColorMode()}
          />
          {userInfo ? (
            <Menu>
              <MenuButton px="4" py="2" transition="all 0.3s" as={Button}>
                {userInfo.name} <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem as={ReactLink} to="/profile">
                  <CgProfile />
                  <Text ml="2">Profil client</Text>
                </MenuItem>
                <MenuItem as={ReactLink} to="/your-orders">
                  <MdLocalShipping />
                  <Text ml="2">Comenzile tale</Text>
                </MenuItem>
                {userInfo.isAdmin === "true" && (
                  <>
                    <MenuDivider />
                    <MenuItem as={ReactLink} to={"/admin-console"}>
                      <MdOutlineAdminPanelSettings />
                      <Text ml="2">Consola Admin</Text>
                    </MenuItem>
                  </>
                )}
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>
                  <MdLogout />
                  <Text ml="2">Delogare</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
              <Button
                as={ReactLink}
                to="/login"
                p={2}
                fontSize="sm"
                fontWeight={400}
                variant="link"
              >
                Logheza-te
              </Button>
              <Button
                as={ReactLink}
                to="/registration"
                m={2}
                display={{ base: "none", md: "inline-flex" }}
                fontSize="sm"
                fontWeight={600}
                _hover={{ bg: "orange.400" }}
                bg="orange.500"
                color="white"
              >
                Autentificare
              </Button>{" "}
            </>
          )}
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink key="sign up" path="/registration">
              Autentificare
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
