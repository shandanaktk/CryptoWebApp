import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading
          textAlign="center"
          fontSize="20px"
          as="h1"
          pt="3.5rem"
          text="heading"
        >
          @DOSOMECODING
        </Heading>
        {navLinks.map((nav) => (
          <Box key={nav.text} mt="6" mx="3">
            <Link to={nav.link}>
              <HStack
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="bold">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          </Box>
        ))}
      </Box>

      <Box mb="6" mt="6" mx="3">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="bold">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
