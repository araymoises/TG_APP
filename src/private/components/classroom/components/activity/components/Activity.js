import React, { useState } from 'react';
import { StyleSheet, Platform, Alert, TouchableOpacity } from 'react-native';
import { Text, View } from 'native-base';
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
   ViroOrbitCamera,
   ViroSpotLight,
} from '@viro-community/react-viro';
import { useSelector, useDispatch } from 'react-redux';
import { setPlaneSelected } from './../../../../../../redux/reducers/classroomTitle';
//import * as objects from './objects/index';
import * as objects from './objects/index';
import style from '../../../../../../styles';

const ARActivity = (props) => {
  const dispatch = useDispatch();
  const activity = props.arSceneNavigator.viroAppProps;
   const [text, setText] = useState('Inicializando Actividad');
   const [questionText, setQuestionText] = useState('');
   const [arePointsDisplayed, setArePointsDisplayed] = useState(true);
   const onInitialized = (state, reason) => {
    console.log('onTrackingUpdated: ', state);
      console.log('guncelleme', state, reason);
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
         setText(activity.title);
         setQuestionText(activity.question)
      } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
        dispatch(setPlaneSelected(false))
      }
   }

   const planeSelected = () => {
      console.log('Panel selected succesfully');
      dispatch(setPlaneSelected(true))
      setArePointsDisplayed(false)
    }

   return (
      <ViroARScene onTrackingUpdated={onInitialized} anchorDetectionTypes={'PlanesHorizontal'} displayPointCloud={arePointsDisplayed}>
          <ViroARPlaneSelector minHeight={0.1} minWidth={0.1} alignment={'Horizontal'} onPlaneSelected={planeSelected}>
            <ViroOrbitCamera position={[0, 0, -0]} focalPoint={[0, 0, -1.15]} />
            <ViroSpotLight 
              position={[0, -0.25, 0]}
              color="#777777"
              direction={[0, 0, -1]}
              attenuationStartDistance={5}
              attenuationEndDistance={10}
              innerAngle={5}
              outerAngle={20}/>
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
               scale={[0.4, 0.4, 0.4]}
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
            /> */}
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
               source={objects[activity.object.name].obj}
               resources={objects[activity.object.name].resources}
               type={activity.object.type}
               scale={[parseFloat(activity.object.scale.x), parseFloat(activity.object.scale.y), parseFloat(activity.object.scale.z)]}
               position={[parseFloat(activity.object.position.x), parseFloat(activity.object.position.y), parseFloat(activity.object.position.z)]}
               rotationPivot={[parseFloat(activity.object.rotationPivot.x), parseFloat(activity.object.rotationPivot.y), parseFloat(activity.object.rotationPivot.z)]}
               onClick={(position, source) => { console.log('Clickeando al objeto', position); }}
               style={styles.helloWorldTextStyle}
            />
         </ViroARPlaneSelector>
      </ViroARScene>
   );
};

const Activity = ({ navigation }) => {
   const osVersion = Platform.constants['Release'];
   const navigate = navigation.navigate;
   const [activity, setActivity] = useState({
    title: 'Actividad #1',
    question: '¿Qué animal es éste?',
    type: {
      code: 'SIMPLE_SELECTION',
      name: 'Selección Simple'
    },
    answers: [
      {
        title: 'Rana',
        isCorrect: false
      },
      {
        title: 'Caballo',
        isCorrect: false
      },
      {
        title: 'Halcón',
        isCorrect: true
      },
      {
        title: 'Perro',
        isCorrect: false
      },
    ],
    object: {
      name: 'halcon',
      sourcePath: './objects/falcon/halcon2.obj',
      resources: [
        './objects/falcon/halcon.mtl'
      ],
      type: 'OBJ',
      scale: {
        x: '0.4',
        y: '0.4',
        z: '0.4'
      },
      position: {
        x: '0.3',
        y: '0',
        z: '0'
      },
      rotationPivot: {
        x: '0',
        y: '0',
        z: '0'
      }
    }
   });
   const isPlaneSelected = useSelector((state) => state.classroomTitle.isPlaneSelected);

   const onPressOption = (isCorrect, value, event) => {
    console.log(event);
     if (isCorrect) {
       console.log('¡Respuesta correcta!');
     } else {
       console.log('Respuesta incorrecta.');
     }
     // navigate('ActivityCompletion', { isCorrect, value });
   }

   return (
      osVersion >= 8 ? (
         <View style={{ flex: 1, height: '100%' }}>
            <ViroARSceneNavigator
               autofocus={true}
               initialScene={{ scene: ARActivity}}
               style={{ flex: 1 }}
               viroAppProps={activity}
            />
            {
              isPlaneSelected ? (
                <>
                  <View style={styles.containerButtons}>
                    <View style={styles.boxButtons}>
                      {
                        activity.answers.map(answer => {
                          return (
                            <TouchableOpacity
                              key={answer.title}
                              onPress={(event) => onPressOption(answer.isCorrect, answer.title, event)}
                              style={styles.button}
                            >
                              <Text style={styles.buttonLabel}> {answer.title} </Text>
                            </TouchableOpacity>
                          )
                        })
                      }
                    </View>
                    <View style={styles.boxButtons}>
                      <TouchableOpacity
                        onPress={() => console.log('hola')}
                        style={styles.finishActivityButtonLabel}
                      >
                        <Text style={styles.buttonLabel}> Finalizar Actividad </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              ) : (<View></View>)
            }
         </View>
      ) : (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Realidad aumentada no disponible en este dispositivo.</Text>
         </View>
      )
   );
};

var styles = StyleSheet.create({
   containerButtons: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: "flex-end",
      padding: 10,
      height: '30%',
      backgroundColor: 'transparent',
      bottom: 0
   },
   boxButtons: {
      flex: 1,
      flexWrap: 'wrap',
      marginTop: 8,
      backgroundColor: 'transparent',
      maxHeight: 100,
      alignContent: 'space-between'
   },
   helloWorldTextStyle: {
      fontFamily: 'Arial',
      fontSize: 20,
      color: '#ffffff',
      textAlignVertical: 'center',
      textAlign: 'center',
      width: 50
   },
   button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 5,
      backgroundColor: "#61DAFB",
      alignSelf: "flex-start",
      marginHorizontal: "1%",
      marginBottom: 8,
      minWidth: "48%",
      textAlign: "center",
      fontSize: 12,
      fontWeight: "500"
   },
   buttonLabel: {
      fontSize: 14,
      fontWeight: "500",
      color: "#FFFF",
      textAlign: 'center'
   },
   finishActivityButtonLabel: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
    backgroundColor: style.color.primary,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 8,
    minWidth: "48%",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500"
   },
});

export default Activity
