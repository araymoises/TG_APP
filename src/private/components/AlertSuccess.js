import React, { useState,useEffect } from 'react';
import { View, Image, Alert, VStack, HStack, Box, Text } from 'native-base';


const AlertSuccess = ({success}) => {
  const message =success;
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const hideAlert = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(hideAlert);
  }, []);


  return (
    <>
    {showAlert && (
    <View style={{ flex: 3, paddingHorizontal: 20, justifyContent: 'center', width: '100%', marginTop: 20 }} id="alert-register">
       <Alert maxW="400" status="success" colorScheme="success">
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
    )}
    </>
  );
};
export default AlertSuccess;