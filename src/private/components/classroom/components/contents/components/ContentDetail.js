import React,{useEffect,useState} from 'react';
import {
  Text,
  View,
  Image,
  Center,
  ScrollView,
  AspectRatio,
  Button,
} from 'native-base';
import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getUserData  } from "../../../../../../../api";


const ContentDetail = ({ navigation}) => {
  const navigate = navigation.navigate;
  const [isTeacher,setIsTeacher] = useState(false);

  const onActivity = () => {
    console.log('Nuevo contenido.');
    //navigate('ContentsRouter', { screen: 'ContentEdit' });
    navigate('ActivityView');
  }
  const onEdit = () => {
    console.log('Editar contenido.');
    navigate('ContentsRouter', { screen: 'ContentEdit' });
  }

  const getUser = async()=>{
    const user =  await getUserData();
    if(user.teacher)
    {
      setIsTeacher(true);
    }

  }
  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <View>
   
    <ScrollView contentContainerStyle={{  flexGrow: 1,justifyContent: 'flex-start', paddingHorizontal:20, paddingVertical:20}}>      
         <View>
             <Text marginBottom={5} marginTop={5} style={{ ...style.text.title, color: style.color.primary, fontWeight: 'bold'}}>La lectura</Text>
         </View>
          <View style={{paddingVertical:10}}>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{
              uri: "https://www.foroabierto.org/wp-content/uploads/2020/11/Fomento-de-la-Lectura.jpg"
            }} alt="image" />
            </AspectRatio>
          </View>
          <View style={{paddingVertical:10}}>
              <Text style={{ ...style.text.title,fontSize: 16, textAlign: 'justify', marginBottom:8 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Text>
          </View>
          <View style={{paddingVertical:10}}>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{
              uri: "https://i0.wp.com/www.orientacionandujar.es/wp-content/uploads/2017/04/tarjetas-para-fomentar-la-lectura-a-todo-color-6.jpg?resize=1024%2C709&ssl=1"
            }} alt="image" />
            </AspectRatio>
          </View>
          <View style={{paddingVertical:10}}>
              <Text style={{ ...style.text.title,fontSize: 16, textAlign: 'justify', marginBottom:8 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Text>
              <Text style={{ ...style.text.title,fontSize: 16, textAlign: 'justify', marginBottom:8 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Text>
              <Text style={{ ...style.text.title,fontSize: 16, textAlign: 'justify', marginBottom:8 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </Text>
          </View>
     
      </ScrollView>
      {!isTeacher &&
        (
      <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} rightIcon={<Icon name="play" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onActivity}>Realizar actividad</Button>
      )
      }

      {isTeacher &&
        (<Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="edit" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onEdit}>Editar Contenido</Button>
        )
      }
</View>





  );
};

export default ContentDetail;
