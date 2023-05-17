import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API = "https://api-arclassroom-tesis.herokuapp.com";
//const API = "http://192.168.100.3:3000";
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

export const deleteClassroom = async (classroom) => {
  const token = await getToken();
  return axios.delete(API + '/classrooms/delete/' + classroom, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const updateClassroom = async (classroom, id) => {
  const token = await getToken();
  console.log('classroom')
  console.log(classroom)
  return axios.patch(API + '/classrooms/update/' + id, classroom, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const updateTeacherById = async (teacher, id) => {
  const token = await getToken();
  return axios.patch(API + '/teachers/update/' + id, teacher, { headers: { 'Authorization': `Bearer ${token}` } });
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

export const getActivities = async (classroom) => {
  const token = await getToken();
  return axios.get(`${API}/activities/classroom/${classroom}`, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const deleteActivity = async (activity) => {
  const token = await getToken();
  return axios.delete(`${API}/activities/delete/${activity}`, { headers: { 'Authorization': `Bearer ${token}` } });
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

export const getContents = async (classroom) => {
  const token = await getToken();
  return axios.get(`${API}/contents/classroom/${classroom}`, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const getContentById = async (content) => {
  const token = await getToken();
  return axios.get(`${API}/contents/${content}`, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const deleteContent = async (content) => {
  const token = await getToken();
  return axios.delete(`${API}/contents/delete/${content}`, { headers: { 'Authorization': `Bearer ${token}` } });
}

//CRUD students
export const getStudents = async (classroom) => {
  const token = await getToken();
  return axios.get(API + '/students/classroom/' + classroom, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
}

export const getStudentById = async (student) => {
  const token = await getToken();
  return axios.get(API + '/students/' + student, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const updateStudent = async (student, id) => {
  const token = await getToken();
  return axios.patch(API + '/students/update/' + id, student, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const deleteStudent = async (student) => {
  const token = await getToken();
  return axios.delete(API + '/students/delete/' + student, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const unlinkStudent = async (student) => {
  const token = await getToken();
  console.log('token');
  console.log(token);
  return axios.patch(API + '/students/unlink/' + student, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const studentInvite = async (invitation) => {
  const token = await getToken();
  return axios.post(`${API}/students/invite/`, invitation, { headers: { 'Authorization': `Bearer ${token}` } });
}

// CRUD Teachers
export const updateTeacher = async (teacher, id) => {
  const token = await getToken();
  return axios.patch(`${API}/teachers/update/${id}`, teacher, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const getObjects = async () => {
  const token = await getToken();
  return axios.get(`${API}/objects/`, { headers: { 'Authorization': `Bearer ${token}` } });
}

export const getActivityTypes = async () => {
  const token = await getToken();
  return axios.get(`${API}/activity-types/`, { headers: { 'Authorization': `Bearer ${token}` } });
}