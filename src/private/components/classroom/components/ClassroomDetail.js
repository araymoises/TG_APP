import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
  Text,
  View,
  ScrollView,
  Divider,
  Button,
} from 'native-base';
import style from '~styles';
import randomColor from '../../../../services/colorNames';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  LineChart,
  BarChart,
  PieChart,
} from "react-native-chart-kit";
import {getClassroom  } from "../../../../../api";
import AlertError from '../../AlertError';

const ClassroomDetail = ({ navigation,route }) => {
  const navigate = navigation.navigate;
  const  id  = route.params?.id || '';
  const [classroom, setClassroom] = useState([]);
  const [message,setMessage]= useState('');
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

  const dataLineChart = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        data: [
          16,
          15,
          18,
          19,
          17,
          18
        ]
      }
    ]
  };

  const dataBarChart = {
    labels: ["Crisleivys Gil", "Moises Aray", "Pablo Lárez"],
    datasets: [
      {
        data: [
          20,
          19,
          19
        ]
      }
    ]
  };

  const dataPieChart = [
    {
      name: "Por hacer",
      population: 10,
      color: "#c2c2c2",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "En curso",
      population: 2,
      color: "#e3f059",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Finalizadas",
      population: 15,
      color: "#3ec76b",//"#3ec76b",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  const screenWidth = Dimensions.get("window").width - 50;

  const onEdit = () => {
    console.log('edit aula');
    navigate('ClassroomAdminRouter', { screen: 'EditClassroom' });
  }


  const loadClassroom = (id) => {
    getClassroom(id)
      .then((res) => {
        setClassroom(res.data.content);
      })
      .catch((error) => {
        console.log(error);
        if(error.response){
          setMessage(error.response.data.message);
        }
        else{
          setMessage('Ha ocurrido un error interno');
        }
        
      });
  }

  useEffect(() => {
    loadClassroom(id)
  }, [id])

  return (
    <View style={{ flex: 1 }} >
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingVertical:20 }}>
      {message ? <Text style={{color:'red', fontSize:18, textAlign:'center'}}>{message}</Text>:null}
      <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ backgroundColor: randomColor(), height: 150, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 74, elevation: 10 }}>
          {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
          <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{classroom.name}</Text>
          {/* <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{ randomColor() }</Text> */}
        </View>
      </View>

      <View style={{ flex: 2, width: '100%', padding: 20 }}>
        <Text mt={2} style={{ ...style.text.subtitle}}>{classroom.description}</Text>
        <Text mt={2} style={{ ...style.text.md, fontWeight: 'bold'}}>{classroom.name}</Text>
        <Divider my={1} />
      </View>

      <View style={{ flex: 2, width: '100%', padding: 20 }}>
        <Text mt={2} style={{ ...style.text.subtitle}}>Estado de las actividades</Text>
        <PieChart
          data={dataPieChart}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[5, 0]}
          absolute
        />
      </View>

      <View style={{ flex: 2, width: '100%', padding: 20 }}>
        <Text mt={2} style={{ ...style.text.subtitle}}>Mejores calificaciones</Text>
        <BarChart
          data={dataBarChart}
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
        />
      </View>

      <View style={{ flex: 2, width: '100%', padding: 20 }}>
        <Text mt={2} style={{ ...style.text.subtitle}}>Calificación promedio por mes</Text>
        <LineChart
          data={dataLineChart}
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
        />
      </View>
    </ScrollView>
      <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="edit" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onEdit}>Editar Aula</Button>
    </View>
  );
};

export default ClassroomDetail;
