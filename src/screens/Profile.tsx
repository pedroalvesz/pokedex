import { HStack, IconButton, VStack } from "native-base";
import { CaretLeft } from "phosphor-react-native";

export function Profile() {
  return(
    <VStack flex={1}>
      <HStack>
        <IconButton
        w="24px"
        h="24px"
        icon={<CaretLeft size={24} color="black"/>}
        />
      </HStack>
    </VStack>
  )
}