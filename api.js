import axios from 'axios';

const API="http://192.168.100.3:3000";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0M2ZkZDRjY2M1ZmRmMDM5Y2U4YzM2OCIsIm5hbWUiOiJDcmlzbGVpdnlzIEdpbCIsInRlYWNoZXIiOnsiX2lkIjoiNjQzZmRkNGJjYzVmZGYwMzljZThjMzY3IiwiZmlyc3RuYW1lIjoiQ3Jpc2xlaXZ5cyIsImxhc3RuYW1lIjoiR2lsIiwiZW1haWwiOiJjcmlzbGVpdnlzbmdpbEBnbWFpbC5jb20iLCJwaG9uZSI6IjA0MjYyMjkxOTUxIiwiX192IjowLCJpZCI6IjY0M2ZkZDRiY2M1ZmRmMDM5Y2U4YzM2NyJ9LCJlbWFpbCI6ImNyaXNsZWl2eXNuZ2lsQGdtYWlsLmNvbSIsImNyZWF0ZWQiOiIyMDIzLTA0LTE5VDEyOjIzOjQwLjAxMloiLCJtb2RpZmllZCI6IjIwMjMtMDQtMTlUMTI6MjM6NDAuMDEyWiIsIl9fdiI6MCwiaWQiOiI2NDNmZGQ0Y2NjNWZkZjAzOWNlOGMzNjgifSwiaWF0IjoxNjgyMjA3MjMyLCJleHAiOjE2ODIyOTM2MzJ9.sdg656EJqA9iLLsUTHQB2PwEBL8HAP0152Mlsy4ajlw"

export const getClassrooms = async() =>{
  const res = await axios.get(API+'/classrooms',{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return await res;
}

export const signup = (userInfo) => {
    return axios.post(API+'/auth/signup', userInfo)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
};

  export const login = (userInfo)=>{
    return axios.post(API+'/auth/login', userInfo)
    .then(response => {

      return response.data;
    })
    .catch(error => {

      throw error;
    });

  }