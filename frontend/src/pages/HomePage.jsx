import {React, useEffect} from 'react';
import {Box, Input, Button, Container, VStack, 
  Text, Heading, useColorModeValue, useToast,
  SimpleGrid} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useProductStore} from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";




const HomePage = () => {
  const {fetchProduct, products} = useProductStore();
  useEffect(()=>{
    fetchProduct();
  }, [fetchProduct]);

  console.log("products", products);

  return (
    <Container maxW = 'container.xl' py={12}>
      <VStack spacing={8}>
        <Text fontSize={30}
        fontWeight={"bold"}
        bgGradient={"linear(to-r, cyan.400,blue.500)"}
        bgClip={"text"}
        textAlign={"center"} 
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base:1,
            md:2,
            lg:3
          }}
          spacing={10}
          w={"full"}
          >
           {products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
           ))} 
        </SimpleGrid>


        <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="gray.500">
          No product found.
          <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{textDecoration:"underline"}}>
            Create a product 
            </Text> 
          </Link>
        </Text>
      </VStack>
    </Container>

  )
}

export default HomePage;




