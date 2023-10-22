import axios from 'axios'

// export const fetchData = (fn)=>{
//   axios.get('http://www.dell-lee.com/react/api/demo.json').then((response)=>{
//     // console.log(response.data)
//     fn(response.data)
//   },(error)=>{
//     // console.log(error)
//   })
// }


export const fetchData = (fn)=>{
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}