import { useDisclosure, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

export function LogInButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <>
      <Button
        onClick={onOpen}
        size="lg"
        fontSize="16"
        mr="5"
        ml={["4", "2"]}
        bg="blue.main"
        color="yellow.main"
        _hover={{ opacity: "0.8" }}
        _active={{
          transform: "scale(0.90)",
        }}
        _focus={{
          border: "none",
        }}
      >
        Sign In
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent alignSelf="center" bg="transparent">
          <ModalHeader bg="purple.main" borderTopRadius="20" fontSize="25" color="blue.main">Sign In</ModalHeader>
          <ModalCloseButton color="blue.main" fontSize="15" _focus={{ border: "2px", borderColor: "blue.main" }} />
          <ModalBody pb={6} bg="purple.main">

            <FormControl mt={4}>
              <FormLabel textColor="yellow.main">E-mail adress</FormLabel>
              <Input
                ref={initialRef}
                placeholder="E-mail adress"
                borderColor="blue.main"
                _focus={{
                  border: "2px",
                  borderColor: "blue.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel textColor="yellow.main">Password</FormLabel>
              <Input
                placeholder="Password"
                borderColor="blue.main"
                _focus={{
                  border: "2px",
                  borderColor: "blue.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter bg="purple.main" borderBottomRadius="20">
            <Button
              mr="3"
              bg="blue.main"
              color="yellow.main"
              _hover={{ opacity: "0.8" }}
              _active={{
                transform: "scale(0.90)",
              }}
              _focus={{
                border: "none",
              }}
            >
              Sign In
            </Button>
            <Button
              onClick={onClose}
              bg="yellow.main"
              color="blue.main"
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
