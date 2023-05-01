import React, { useEffect, useState } from 'react';
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
import { getActivityById, saveQualification, getUserData } from './../../../../../../../api';

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
      console.log('Inicializado.');
      setText(activity.title);
      setQuestionText(activity.question)
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      console.log('No se ve.');
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
          outerAngle={20} />
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

        {/* <Viro3DObject
          source={objects[activity.object.name].obj}
          resources={objects[activity.object.name].resources}
          type={activity.object.type}
          scale={[parseFloat(activity.object.scale.x), parseFloat(activity.object.scale.y), parseFloat(activity.object.scale.z)]}
          position={[parseFloat(activity.object.position.x), parseFloat(activity.object.position.y), parseFloat(activity.object.position.z)]}
          rotationPivot={[parseFloat(activity.object.rotationPivot.x), parseFloat(activity.object.rotationPivot.y), parseFloat(activity.object.rotationPivot.z)]}
          onClick={(position, source) => { console.log('Clickeando al objeto', position); }}
          style={styles.helloWorldTextStyle}
        /> */}

        {
          activity ? <Viro3DObject
            source={objects[activity.object.code].sourcePath}
            resources={objects[activity.object.code].resources}
            type={activity.object.type}
            scale={[parseFloat(activity.object.scale[0]), parseFloat(activity.object.scale[1]), parseFloat(activity.object.scale[2])]}
            position={[parseFloat(activity.object.position[0]), parseFloat(activity.object.position[1]), parseFloat(activity.object.position[2])]}
            rotationPivot={[parseFloat(activity.object.rotationPivot[0]), parseFloat(activity.object.rotationPivot[1]), parseFloat(activity.object.rotationPivot[2])]}
            onClick={(position, source) => { console.log('Clickeando al objeto', position); }}
            style={styles.helloWorldTextStyle}
          /> : null
        }
      </ViroARPlaneSelector>
    </ViroARScene>
  );
};

const Activity = ({ navigation, route }) => {
  const osVersion = Platform.constants['Release'];
  const navigate = navigation.navigate;
  const id = route.params?.id || '';
  const [activity, setActivity] = useState(null);
  const [buttonStyle, setButtonStyle] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const loadActivity = (id) => {
    getActivityById(id).then((res) => {
      console.log('getActivityById')
      console.log(res.data.content)
      const result = res.data.content
      let _activity = JSON.parse(JSON.stringify(result))
      _activity.answers = result.answers.map((answer) => {
        let _answer = JSON.parse(JSON.stringify(answer))
        _answer.selected = false
        return _answer
      })
      console.log('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');

      const _buttonStyle = result.answers.map(answer => {
        return {
          id: answer._id,
          styles: {
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
          }
        }
      })
      console.log('_buttonStyle');
      console.log(_buttonStyle);
      setButtonStyle(_buttonStyle)

      setActivity(_activity)
    })
  }

  useEffect(() => {
    loadActivity(id)
  }, [id])

  useEffect(() => {
    console.log('______activity');
    console.log(activity);
  }, [activity])
  const isPlaneSelected = useSelector((state) => state.classroomTitle.isPlaneSelected);

  const onPressOption = (answerId, index) => {

    // console.log(event);
    let _selectedAnswers = JSON.parse(JSON.stringify(selectedAnswers))
    let isAlredyIn = false
    _selectedAnswers = _selectedAnswers.map((selectedAnswer) => {
      if (selectedAnswer == answerId) {
        isAlredyIn = true
        return false
      }
      else {
        return selectedAnswer
      }
    }).filter((selectedAnswer) => selectedAnswer)

    if (!isAlredyIn) {
      _selectedAnswers.push(answerId)
    }
    console.log('_selectedAnswers');
    console.log(_selectedAnswers);
    setSelectedAnswers(_selectedAnswers)
    buttonStyleFunction(_selectedAnswers)
  }

  const buttonStyleFunction = (selectedAnswers) => {
    _selectedAnswers = JSON.parse(JSON.stringify(selectedAnswers))
    _buttonStyle = JSON.parse(JSON.stringify(buttonStyle))

    _buttonStyle = _buttonStyle.map((bs, index) => {
      let _bs = JSON.parse(JSON.stringify(bs))
      if (selectedAnswers.includes(bs.id)) {
        return {
          id: bs.id,
          styles: {
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 5,
            backgroundColor: "#5eba7d",
            alignSelf: "flex-start",
            marginHorizontal: "1%",
            marginBottom: 8,
            minWidth: "48%",
            textAlign: "center",
            fontSize: 12,
            fontWeight: "500"
          }
        }
      } else {
        return {
          id: bs.id,
          styles: {
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
          }
        }
      }
    })

    console.log('_buttonStyle');
    console.log(_buttonStyle);
    setButtonStyle(_buttonStyle)
  }

  const onPressFinish = async () => {
    let isCorrect = []
    console.log('selectedAnswers');
    console.log(selectedAnswers);
    console.log('answer.id');
    activity.answers.map((answer) => {
      console.log(answer.id);
      console.log('selectedAnswers.includes(answer.id)');
      console.log(selectedAnswers.includes(answer.id));
      console.log('answer.isCorrect');
      console.log(answer.isCorrect);
      if (selectedAnswers.includes(answer.id) == answer.isCorrect) {
        console.log('isCorrect.push(true)');
        isCorrect.push(true)
      }
    })

    const { id } = await getUserData()
    let qualification = {
      activity: activity.id,
      student: id
    }

    let result
    if (isCorrect.length && isCorrect.length == activity.answers.length) {
      console.log('¡Es correcto!')
      result = true
      qualification.qualification = activity.max_qualification
    } else {
      console.log('Es incorrecto.')
      result = false
      qualification.qualification = '0'
    }

    console.log('qualification');
    console.log(qualification);
    saveQualification(qualification).then((res) => {
      console.log('¡Guardado!');
      console.log(res.data);
    }).catch((error) => {
      console.log('Error al guardar calificacion.');
      console.log(error);
      console.log(error.response.data);
    }).finally(() => {
      navigate('ActivityRouter', { screen: 'ActivityCompletion', params: { isCorrect: result } });
    })
  }

  return (
    activity ?
      osVersion >= 8 ? (
        <View style={{ flex: 1, height: '100%' }}>
          <ViroARSceneNavigator
            autofocus={true}
            initialScene={{ scene: ARActivity }}
            style={{ flex: 1 }}
            viroAppProps={activity}
          />
          {
            isPlaneSelected ? (
              <>
                <View style={styles.containerButtons}>
                  <View style={styles.boxButtons}>
                    {
                      activity.answers.map((answer, index) => {
                        return (
                          <TouchableOpacity
                            key={answer.id}
                            onPress={(event) => onPressOption(answer.id, index)}
                            style={buttonStyle[index].styles}
                          >
                            <Text style={styles.buttonLabel}> {answer.title} </Text>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
                  <View style={styles.boxButtons}>
                    <TouchableOpacity
                      onPress={() => onPressFinish()}
                      style={styles.finishActivityButtonLabel}
                    >
                      <Text style={styles.buttonLabel}> Finalizar Actividad </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (<View></View>)
          }
        </View >
      ) : (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Realidad aumentada no disponible en este dispositivo.</Text>
        </View>
      )
      : (<View></View>)
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
