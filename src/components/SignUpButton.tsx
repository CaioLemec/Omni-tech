import { useDisclosure, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

export function SignUpButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <>
        <Button
            type="submit" 
            onClick={onOpen}
            colorScheme="pink"
            size="lg"
            fontSize="16"
            mr="5"
            ml={["4", "2"]}
            bg="pink.main"
            color="yellow.main"
            _hover={{ opacity: "0.8" }}
            _active={{
            transform: "scale(0.90)",
            }}
            _focus={{
            border: "none",
            }}
            >
            Sign Up
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent alignSelf="center" bg="transparent">
            <ModalHeader bg="purple.main" borderTopRadius="20" fontSize="25" color="pink.main">Sign Up</ModalHeader>
            <ModalCloseButton color="pink.main" fontSize="15" _focus={{border: "2px",borderColor: "pink.main"}}/>
            <ModalBody pb={6} bg="purple.main">
              <FormControl>
                <FormLabel textColor="yellow.main">First name</FormLabel>
                <Input 
                ref={initialRef} 
                placeholder="First name"
                borderColor="pink.main"
                _focus={{
                    border: "2px",
                    borderColor: "pink.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
                 />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel textColor="yellow.main">Last name</FormLabel>
                <Input 
                placeholder="Last name"  
                borderColor="pink.main" 
                _focus={{
                    border: "2px",
                    borderColor: "pink.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
                 />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel textColor="yellow.main">E-mail adress</FormLabel>
                <Input 
                placeholder="E-mail adress"  
                borderColor="pink.main" 
                _focus={{
                    border: "2px",
                    borderColor: "pink.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
                 />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel textColor="yellow.main">Password</FormLabel>
                <Input 
                placeholder="Password"
                borderColor="pink.main" 
                _focus={{
                    border: "2px",
                    borderColor: "pink.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
                 />         
              </FormControl>

            </ModalBody>
  
            <ModalFooter bg="purple.main" borderBottomRadius="20">
                <Button
                mr="3"
                bg="pink.main"
                color="yellow.main"
                _hover={{ opacity: "0.8" }}
                _active={{
                transform: "scale(0.90)",
                }}
                _focus={{
                border: "none",
                }}
                >
                Log In
                </Button>
              <Button 
              onClick={onClose}
              bg="yellow.main"
              color="pink.main"
              _hover={{ opacity: "0.8" }}
              _active={{
              transform: "scale(0.90)",
              }}
              _focus={{
              border: "none",
              }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }





//     <Button
//     type="submit" 
//     onClick={onOpen}
//     colorScheme="pink"
//     size="lg"
//     fontSize="16"
//     mr="5"
//     ml={["4", "2"]}
//     bg="pink.main"
//     color="yellow.main"
//     _hover={{ opacity: "0.8" }}
//     _active={{
//     transform: "scale(0.90)",
//     }}
//     _focus={{
//     border: "none",
//     }}
//     >
//     Sign Up
// </Button>