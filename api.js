import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API="http://192.168.100.3:3000";
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    if(token !== null) {
      return token;
    }
  } catch(e) {
    throw error;
  }
}
export const signup = (userInfo) => {
    return axios.post(API+'/auth/signup', userInfo)
};

  export const login = async (userInfo) => {
    try {
      const response = await axios.post(API+'/auth/login', userInfo);
      if(response.data.success){
        const token=response.data.content.token;
        await AsyncStorage.setItem('token',token);
      }
      
      return response.data;
    } catch (error) {
      throw error;
    }
  };


export const getClassrooms = async () => {
  const token = await getToken();
  try {
    const response = await axios.get(API + '/classrooms', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}
  

export const saveClassrooms = async(classroom) =>{
  const token= await getToken();
  return axios.post(API+'/classrooms/save', classroom,{headers: {'Authorization': `Bearer ${token}`}});

}