import { Alert, Box, HStack, Text, VStack } from "native-base";


export function ListEmpty() {
  return(
    <Alert maxW="400" status="info" colorScheme="info" rounded='lg' mt={40}>
    <VStack space={2} flexShrink={1} w="100%">
      <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
        <HStack flexShrink={1} space={2} alignItems="center">
          <Alert.Icon />
          <Text fontSize="md" fontWeight="medium" color="coolGray.800">
            You have not favorited any pokemon.
          </Text>
        </HStack>
      </HStack>
      <Box pl="6" _text={{
      color: "coolGray.600"
    }}>
        You should get some on home screen!
      </Box>
    </VStack>
  </Alert>
  )
}