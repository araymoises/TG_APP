import React from 'react';
import { View, Image, Alert, VStack, HStack, Box, Text } from 'native-base';


const AlertError = ({error}) => {
  const selected= require('./images/error.png')
  const message =error;
  return (
    <View style={{ flex: 3, paddingHorizontal: 20, justifyContent: 'center', width: '100%', marginTop: 20 }} id="alert-register">
      <Image
        justifyContent="center"
        alignItems="center"
        source={selected}
        alt="image"
        size="2xl"
        key="lg"
        resizeMode="cover"
        mx="auto" />
       <Alert maxW="400" status="info" colorScheme="info">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                  <HStack flexShrink={1} space={2} alignItems="center">
                    <Alert.Icon />
                    <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                      Info
                    </Text>
                  </HStack>
                </HStack>
                <Box pl="6" _text={{
                color: "coolGray.600"
              }}>
                 {message}
                </Box>
              </VStack>
            </Alert>
    </View>
  );
};
export default AlertError;