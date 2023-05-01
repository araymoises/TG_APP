import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API = "http://192.168.1.100:3000";
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    if (token !== null) {
      return token;
    }
  } catch (e) {
    throw error;
  }
}

export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData')
    if (userData !== null) {
      return JSON.parse(userData);
    }
  } catch (e) {
    throw error;
  }
}

export const signupTeacher = (teacherInfo) => {
  return axios.post(API + '/auth/teachers/signup', teacherInfo)
};

export const signupStudent = (studentInfo) => {
  return axios.post(API + '/auth/students/signup', studentInfo)
};

export const login = async (userInfo) => {
  return axios.post(API + '/auth/login', userInfo);

};


export const getClassrooms = async () => {
  const token = await getToken();
  return axios.get(API + '/classrooms', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
}


export const saveClassrooms = async (classroom) => {
  const token = await getToken();
  return axios.post(API + '/classrooms/save', classroom, { headers: { 'Authorization': `Bearer ${token}` } });

}

export const getClassroom = async (classroom) => {
  const token = await getToken();
  return axios.get(API + '/classrooms/' + classroom, { headers: { 'Authorization': `Bearer ${token}` } });
}


// Statistics
export const getAcivitiesStatusByClassroom = async (classroom) => {
  const token = await getToken();
  return axios.get(API + '/statistics/activities-status/classroom/' + classroom, { headers: { 'Authorization': `Bearer ${token}` } });
}
export const getBestQualificationAverageByStudent = async (classroom) => {
  const token = await getToken();
  return axios.get(API + '/statistics/best-qualifications-average/classroom/' + classroom, { headers: { 'Authorization': `Bearer ${token}` } });
}
export const getQualificationAverageByActivity = async (classroom) => {
  const token = await getToken();
  return axios.get(API + '/statistics/qualification-average-by-activity/classroom/' + classroom, { headers: { 'Authorization': `Bearer ${token}` } });
}


// CRUD Activities
export const getActivityById = async (activity) => {
  const token = await getToken();
  return axios.get(API + '/activities/' + activity, { headers: { 'Authorization': `Bearer ${token}` } });
}

// CRUD qualifications
export const saveQualification = async (qualification) => {
  const token = await getToken();
  return axios.post(`${API}/qualifications/save/`, qualification, { headers: { 'Authorization': `Bearer ${token}` } });
}

// CRUD contents
export const saveContent = async (content) => {
  const token = await getToken();
  return axios.post(`${API}/contents/save/`, content, { headers: { 'Authorization': `Bearer ${token}` } });
}