
import { FormControl, FormLabel, VStack, Button } from '@chakra-ui/react'
import { useState } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React from 'react'
const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const submitHandler = () => {};
  return (
    <VStack spacing='5px' color="black">
        
        <FormControl id = 'email' isRequired>
            <FormLabel>
                E-Mail
            </FormLabel>
            <Input placeholder = 'Enter Your E-Mail'
                onChange= {(e)=>setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id = 'password' isRequired>
            <FormLabel>
                Password
            </FormLabel>
            <InputGroup>
            <Input 
                type={show? "text":'password'}
                placeholder = 'Enter Your Password'
                onChange= {(e)=>setPassword(e.target.value)}
            />
            <InputRightElement width= "4.5rem">
                <Button h = "1.75rem" size = "sm" onClick = {handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button
            colorScheme='blue'
            width = "100%"
            style={{marginTop: 15}}
            onClick = {submitHandler}
        >
            Login
        </Button>
        <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  )
}

export default Login