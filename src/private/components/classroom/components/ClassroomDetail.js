import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
  Text,
  View,
  ScrollView,
  Divider,
  Button,
  Center,
  Modal
} from 'native-base';
import style from '~styles';
import randomColor from '../../../../services/colorNames';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  LineChart,
  BarChart,
  PieChart,
} from "react-native-chart-kit";
import { getClassroom, getAcivitiesStatusByClassroom, getBestQualificationAverageByStudent, getQualificationAverageByActivity } from "../../../../../api";
import { getUserData,deleteClassroom } from "../../../../../api";
import AlertError from '../../AlertError';

const ClassroomDetail = ({ navigation, route }) => {
  const navigate = navigation.navigate;
  const id = route.params?.id || '';
  const [classroom, setClassroom] = useState([]);
  const [activitiesStatus, setActivitiesStatus] = useState(null);
  const [activitiesStatusLoading, setActivitiesStatusLoading] = useState(true);
  const [bestQualificationAverage, setBestQualificationAverage] = useState(null);
  const [bestQualificationAverageLoading, setBestQualificationAverageLoading] = useState(true);
  const [qualificationAverageByActivity, setQualificationAverageByActivity] = useState(null);
  const [qualificationAverageByActivityLoading, setQualificationAverageByActivityLoading] = useState(true);
  const [Loading, setLoading] = useState(null);
  const [message, setMessage] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const chartConfig = {
    backgroundColor: "#00326F",
    backgroundGradientFrom: "#00326F",
    backgroundGradientTo: "#00326F",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  };

  const resetStates = () => {
    setClassroom([])
    setActivitiesStatus(null)
    setActivitiesStatusLoading(true)
    setBestQualificationAverage(null)
    setBestQualificationAverageLoading(true)
    setQualificationAverageByActivity(null)
    setQualificationAverageByActivityLoading(true)
    setMessage('')
    setIsTeacher(false)
    setShowModal(false)
  }

  const screenWidth = Dimensions.get("window").width - 50;

  const loadClassroom = async (id) => {
    getClassroom(id)
      .then((res) => {
        setClassroom(res.data.content);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          setMessage(error.response.data.message);
        }
        else {
          setMessage('Ha ocurrido un error interno.');
        }

      });
  }
  const loadAcivitiesStatusByClassroom = async (id) => {
    getAcivitiesStatusByClassroom(id)
      .then((res) => {
        if (res.data.content) {
          setActivitiesStatus(res.data.content.statuses);
        } else {
          setActivitiesStatus(null);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          // setMessage(error.response.data.message);
        }
        else {
          setMessage('Ha ocurrido un error interno');
        }
      }).finally(() => {
        setActivitiesStatusLoading(false)
      });
  }

  const loadBestQualificationAverageByStudent = async (id) => {
    getBestQualificationAverageByStudent(id)
      .then((res) => {
        if (res.data.content) {
          setBestQualificationAverage(res.data.content.chart);
        } else {
          setBestQualificationAverage(null);
        }
      })
      .catch((error) => {
        console.log('Error: loadBestQualificationAverageByStudent2222');
        console.log(error);
        if (error.response) {
          // setMessage(error.response.data.message);
        }
        else {
          setMessage('Ha ocurrido un error interno');
        }
      }).finally(() => {
        setBestQualificationAverageLoading(false)
      });
  }

  const loadQualificationAverageByActivity = async (id) => {
    getQualificationAverageByActivity(id)
      .then((res) => {
        if (res.data.content) {
          setQualificationAverageByActivity(res.data.content.chart);
        } else {
          setQualificationAverageByActivity(null);
        }
      })
      .catch((error) => {
        console.log('Error: loadQualificationAverageByActivity3333');
        console.log(error);
        if (error.response) {
          // setMessage(error.response.data.message);
        }
        else {
          setMessage('Ha ocurrido un error interno');
        }
      }).finally(() => {
        setQualificationAverageByActivityLoading(false)
      });
  }

  useEffect(() => {
    resetStates()
    loadClassroom(id)
    loadAcivitiesStatusByClassroom(id)
    loadBestQualificationAverageByStudent(id)
    loadQualificationAverageByActivity(id)
  }, [id])

  const getUser = async () => {
    const user = await getUserData();
    if (user.teacher) {
      setIsTeacher(true);
    }

  }
  useEffect(() => {
    getUser()
  }, [isTeacher])

  const onDelete = () => {
    deleteClassroom(id)
    .then((res) => {
      console.log('Res:')
      console.log(res.data.message)
      setShowModal(false)
      navigate('ClassroomAdminRouter', { screen: 'ClassroomsList',
      params: { messageSuccess: `${res.data.message}` }
      });
    })
    .catch((error) => {
      if(error.response){
        updateError(error.response.data.message, setError);
      }
      else{
        console.log(error)
        updateError('Ha ocurrido un error interno', setError);
      }
    });
  }
  const onEdit = () => {
    console.log('edit aula');
    navigate('ClassroomAdminRouter',
    { screen: 'EditClassroom',
    params: { classroomEdit: classroom}
    });
  }

  return (
    <View style={{ flex: 1 }} >
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingVertical: 20 }}>
        {message ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{message}</Text> : null}
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ backgroundColor: randomColor(), height: 150, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 74, elevation: 10 }}>
            {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
            <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{classroom.name}</Text>
            {/* <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{ randomColor() }</Text> */}
          </View>
        </View>

        <View style={{ flex: 2, width: '100%', padding: 20 }}>
          <View style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 3 }}>
              <Text mt={2} style={{ ...style.text.subtitle }}>{classroom.description}</Text>
            </View>
            {isTeacher &&
              (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Button style={{ backgroundColor: style.color.red, borderRadius: 20 }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }} onPress={() => setShowModal(true)}></Button>
                </View>
              )
            }
          </View>

          <Text mt={2} style={{ ...style.text.md, fontWeight: 'bold' }}>{classroom.name}</Text>
          <Divider my={1} />
        </View>

        <View style={{ flex: 2, width: '100%', padding: 20 }}>
          <Text mt={2} style={{ ...style.text.subtitle }}>Estado de las actividades</Text>
          {!activitiesStatusLoading ?
            (
              activitiesStatus ? <PieChart
                data={activitiesStatus}
                width={screenWidth}
                height={200}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 0]}
                absolute
              /> : <Text mt={2}>Estadística no disponible.</Text>
            ) : <Text mt={2}>Cargando...</Text>
          }
        </View>

        <View style={{ flex: 2, width: '100%', padding: 20 }}>
          <Text mt={2} style={{ ...style.text.subtitle }}>Mejores calificaciones</Text>
          {!bestQualificationAverageLoading ?
            (
              bestQualificationAverage ? <BarChart
                data={bestQualificationAverage}
                width={screenWidth}
                height={220}
                yAxisSuffix="pts"
                chartConfig={{
                  backgroundGradientFrom: "#f0f0f0",
                  backgroundGradientTo: "#f0f0f0",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `#00326F`,
                  labelColor: (opacity = 1) => `#000`,
                }}
                fromZero
                showValuesOnTopOfBars
                verticalLabelRotation={10}
                style={{
                  marginVertical: 8,
                  borderRadius: 5
                }}
              /> : <Text mt={2}>Estadística no disponible.</Text>
            ) : <Text mt={2}>Cargando...</Text>}
        </View>

        <View style={{ flex: 2, width: '100%', padding: 20 }}>
          <Text mt={2} style={{ ...style.text.subtitle }}>Calificación promedio por mes</Text>
          {!qualificationAverageByActivityLoading ?
            (qualificationAverageByActivity ? <LineChart
              data={qualificationAverageByActivity}
              width={screenWidth}
              height={180}
              yAxisSuffix="pts"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: "#f0f0f0",
                backgroundGradientFrom: "#f0f0f0",
                backgroundGradientTo: "#f0f0f0",
                decimalPlaces: 0,
                color: (opacity = 1) => `#5075a3`,
                labelColor: (opacity = 1) => `#000`,
                propsForDots: {
                  r: "5",
                  strokeWidth: "1",
                  stroke: "#F1F1F1"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 5
              }}
            /> : <Text mt={2}>Estadística no disponible.</Text>)
            : <Text mt={2}>Cargando...</Text>}
        </View>
        <Center>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.Body>
                <Text style={{ ...style.text.sm, lineHeight: 20 }}>¿Está seguro que desea eliminar el aula?</Text>
              </Modal.Body>
              <Modal.Footer borderTopWidth={0}>
                <Button.Group space={2}>
                  <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                    setShowModal(false);
                  }}>
                    Cancelar
                  </Button>
                  <Button onPress={onDelete}
                    style={{ backgroundColor: style.color.red }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }}
                  >
                    Eliminar
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>




      </ScrollView>
      {isTeacher &&
        (
          <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="edit" size={15} color={style.color.secondary} />} _text={{ color: style.color.secondary }} onPress={onEdit}>Editar Aula</Button>
        )
      }
    </View>
  );
};

export default ClassroomDetail;
