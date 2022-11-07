import React, {useState} from 'react';
import { StyleSheet, Platform } from 'react-native';
import {
  Text,
  View,
} from 'native-base';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroBox,
  ViroFlexView,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const [questionText, setQuestionText] = useState('');
  
  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Actividad #1');
      setQuestionText('que animal es este?')
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized} anchorDetectionTypes={'PlanesHorizontal'} displayPointCloud={true}>
      <ViroARPlaneSelector minHeight={0.1} minWidth={0.1} alignment={'Horizontal'}>
        <ViroAmbientLight color="#FFFFFF" />
        {/* <ViroBox position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} /> */}
        <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0.3, 1.0, 0]}
          style={styles.helloWorldTextStyle}
        />
        <ViroText
          text={questionText}
          scale={[0.1, 0.1, 0.1]}
          position={[0.3, 0.7, 0]}
          style={styles.helloWorldTextStyle}
        />
        {/* <Viro3DObject
          source={require('./objects/girl/girl_OBJ.obj')}
          resources={[
            require('./objects/girl/girl_OBJ.mtl'),
            require('./objects/girl/top normal.png'),
            require('./objects/girl/top color.png'),
            require('./objects/girl/FACE Base Color apha.png'),
            require('./objects/girl/COLORS.jpg'),
            require('./objects/girl/bot color.jpg'),
            require('./objects/girl/BOdy Skin Base Color.png'),
          ]}
          type="OBJ"
          scale={[1.5, 1.5, 1.5]}
          position={[0, -1, -1]}
          style={styles.helloWorldTextStyle}
        />  */}
        {/* <Viro3DObject
          source={require('./objects/dog/Doguinho.obj')}
          resources={[
            require('./objects/dog/Doguinho.mtl'),
            require('./objects/dog/Doguinho_low_poly_doguinho_uv_BaseColor.png'),
            require('./objects/dog/Doguinho_low_poly_doguinho_uv_Height.png'),
            require('./objects/dog/Doguinho_low_poly_doguinho_uv_Metallic.png'),
            require('./objects/dog/Doguinho_low_poly_doguinho_uv_Normal.png'),
            require('./objects/dog/Doguinho_low_poly_doguinho_uv_Roughness.png'),
          ]}
          type="OBJ"
          scale={[0.1, 0.1, 0.1]}
          position={[0, 0, 0]}
          rotationPivot={[0, 0, 0]}
          onClick={(position, source) => { console.log('Clickeando al perrito', position); }}
          style={styles.helloWorldTextStyle}
        /> */}
        <Viro3DObject
          source={require('./objects/falcon/halcon.obj')}
          resources={[
            require('./objects/falcon/halcon.mtl'),
          ]}
          type="OBJ"
          scale={[0.4, 0.4, 0.4]}
          position={[0, 0, 0]}
          rotationPivot={[0, 0, 0]}
          onClick={(position, source) => { console.log('Clickeando al objeto', position); }}
          style={styles.helloWorldTextStyle}
        />

      </ViroARPlaneSelector>
    </ViroARScene>
  );
};

export default () => {
  const osVersion = Platform.constants['Release'];
  
  return (
    osVersion >= 8 ? (
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={styles.f1}
      />
    ) : (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Realidad aumentada no disponible en este dispositivo.</Text>
      </View>
    )
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
