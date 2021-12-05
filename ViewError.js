
import React from "react"
import { Box, Center, NativeBaseProvider } from "native-base"

export const ViewError = () => {
  return (
   <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'rose.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}
    >
    Por favor, inténtelo de nuevo más tarde o comuniquese con soporte gracias! 
    </Box>
  )
}

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
        <ViewError />
      </Center>
    </NativeBaseProvider>
  )
}