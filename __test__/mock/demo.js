import axios from 'axios'
export const runCallBack = (callBack)=>{
  callBack();
}


export const getData = ()=>{
  return axios.get('/api').then((res)=>{
    return res.data
  })
  
}