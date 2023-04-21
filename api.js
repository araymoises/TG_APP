import axios from 'axios';


const API="http://192.168.100.3:3000/classrooms";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0M2ZkZDRjY2M1ZmRmMDM5Y2U4YzM2OCIsIm5hbWUiOiJDcmlzbGVpdnlzIEdpbCIsInRlYWNoZXIiOnsiX2lkIjoiNjQzZmRkNGJjYzVmZGYwMzljZThjMzY3IiwiZmlyc3RuYW1lIjoiQ3Jpc2xlaXZ5cyIsImxhc3RuYW1lIjoiR2lsIiwiZW1haWwiOiJjcmlzbGVpdnlzbmdpbEBnbWFpbC5jb20iLCJwaG9uZSI6IjA0MjYyMjkxOTUxIiwiX192IjowLCJpZCI6IjY0M2ZkZDRiY2M1ZmRmMDM5Y2U4YzM2NyJ9LCJlbWFpbCI6ImNyaXNsZWl2eXNuZ2lsQGdtYWlsLmNvbSIsImNyZWF0ZWQiOiIyMDIzLTA0LTE5VDEyOjIzOjQwLjAxMloiLCJtb2RpZmllZCI6IjIwMjMtMDQtMTlUMTI6MjM6NDAuMDEyWiIsIl9fdiI6MCwiaWQiOiI2NDNmZGQ0Y2NjNWZkZjAzOWNlOGMzNjgifSwiaWF0IjoxNjgyMDg5MjczLCJleHAiOjE2ODIxNzU2NzN9.2ET9cbpPQknoybQOuFZmKjV_wvpb_UR3fzJhidcz6GA"

export const getClassrooms = async() =>{
  const res = await axios.get(API,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return await res;
}