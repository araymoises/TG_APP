import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'native-base';
import style from '~styles';
import randomColor from '../../../../services/colorNames';

const ClassroomDetail = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ backgroundColor: randomColor(), height: 150, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 74, elevation: 10 }}>
          {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
          <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>1º A</Text>
        </View>
      </View>
      <View style={{ flex: 2, width: '100%', padding: 20 }}>
        <Text style={{ ...style.text.title}}>Mariano Picón Salas</Text>
        <Text style={{ ...style.text.subtitle}}>1º A</Text>
        <Text style={{ ...style.text.sm}}>Progreso de la clase: 42%</Text>
        <Text style={{ ...style.text.sm}}>Cantidad de alumnos: 32</Text>
        <Text style={{ ...style.text.sm}}>Actividades creadas: 7</Text>
        <Text style={{ ...style.text.sm}}>Actividades en curso: 2</Text>
        <Text style={{ ...style.text.sm}}>Actividades finalizadas: 3</Text>
        <Text style={{ ...style.text.sm}}>Calificación promedio: 18/20</Text>
      </View>
    </View>
  );
};

export default ClassroomDetail;
