import axios from 'axios'
import { runCallBack , getData } from "./demo";

// mock的三个作用
// 1.捕获函数的调用和返回结果 以及this和调用顺序
// 2.让我们自由的设置返回结果
// 3.改变函数的内部实现


// mock 可以捕获函数的调用
// toBeCall 查看是否被调用
// test('测试 runCallBack',()=>{
//   const func = jest.fn();
//   runCallBack(func)
//   runCallBack(func)
//   runCallBack(func)
//   expect(func.mock.calls.length).toBe(3)
//   expect(func).toBeCalled();
// })


// mock 可以模拟函数调用
// test('测试 runCallBack',()=>{
//   const func = jest.fn();
//   runCallBack(func)
//   runCallBack(func)
//   func.mockReturnValueOnce('dell').mockReturnValueOnce('dell')
//   expect(func).toBeCalled();
//   console.log(func.mock)
// })


jest.mock('axios')
// test('测试 getData',async()=>{
//   axios.get.mockResolvedValue( {data:"hello"} )
//   await getData().then((data)=>{
//     expect(data).toBe('hello')
//   })
// })


test('测试 runCallBack',()=>{
  const func = jest.fn();
  func.mockImplementationOnce(()=>{
    return "dell";
  })
  func.mockImplementationOnce(()=>{
    return "li";
  })
  runCallBack(func)
  runCallBack(func)
  console.log(func.mock)
})


