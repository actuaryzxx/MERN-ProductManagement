import {React,useState} from 'react'
import {Box, Input, Button, Container, VStack, Heading, useColorModeValue, useToast} from "@chakra-ui/react"
import {useProductStore} from "../store/product";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name:"",
        price:"",
        image:"",
    });

    const toast = useToast();

    const {createProduct} = useProductStore();


    const handleAddProduct = async ()=>{
        const {success,message} = await createProduct(newProduct);
        console.log("Success:",success);
        console.log("Message:", message);
        if(!success){
            toast({
                title:"error",
                description:message,
                status:"error",
                duration:5000,
                isClosable:true,
            })
        }else{
            toast({
                title:"success",
                description:message,
                status:"success",
                duration:5000,
                isClosable:true,
            })
        }
        // setNewProduct({name:"", price:"", image:""});
    }


  return (
    <Container maxW={"container.sm"}>
        <VStack
            spacing={8}
        >
            <Heading as={"h1"} size={'2xl'} textAlign={"center"} mb={8}>
                Create new Product
            </Heading>
            
            <Box
                w={"full"} bg={useColorModeValue("white", "gray.800")}
                p={6} rounded={"lg"} shadow={"md"} fontWeight={"bold"}
            >
                <VStack spacing={4}>
                    <Input
                        placeholder='Product Name'
                        name = 'name'
                        value={newProduct.name}
                        onChange={(e)=>setNewProduct({...newProduct, name:e.target.value})}
                    ></Input>
                    <Input
                        placeholder='Price'
                        name = 'price'
                        type = 'number'
                        value={newProduct.price}
                        onChange={(e)=>setNewProduct({...newProduct, price:e.target.value})}
                    ></Input>
                    <Input
                        placeholder='Image URL'
                        name = 'image'
                        value={newProduct.image}
                        onChange={(e)=>setNewProduct({...newProduct, image:e.target.value})}
                    ></Input>
                    <Button colorScheme="blue" onClick={handleAddProduct} w="full">Add Product</Button>

                </VStack>

            </Box>

        </VStack>
    </Container>
  )
}

export default CreatePage;
