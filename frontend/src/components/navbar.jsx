import React from 'react';
import {Container, Flex, Text, Link, HStack, Button, useColorMode} from "@chakra-ui/react";
import { FaPlusSquare } from "react-icons/fa";
import {useProductStore} from "../store/product.js";
import {Link as RouterLink} from "react-router-dom";




const navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const {products} = useProductStore();
  return (
    <div>
      {/* NavBar */}
    <Container maxW={"1140px"} px={4} >
        <Flex h={16}
        alignItems={"center"} 
        justifyContent={"space-between"}
        flexDir={{
            base:"column",
            sm:"row",
        }}>
        <Text 
        fontSize={{base:"22", sm:"28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}>
        <Link as={RouterLink} to={"/"}>🛍️ Product Store</Link>
        </Text>
        
        <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
            <Button>
                <FaPlusSquare fontSize={20}/>
            </Button>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode == "light"?"🌞":"🌙"}
            </Button>
        </HStack>
        </Flex>
        



    </Container>
    </div>
  )
}

export default navbar
