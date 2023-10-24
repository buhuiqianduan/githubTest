import axios from "axios";

// 这是一串异步代码
export const getData = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};

