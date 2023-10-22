import { fetchData } from "./fetch";

// test("fetchdata",(done)=>{
//   fetchData((data)=>{
//     expect(data).toEqual({
//       success:true
//     })
//     done()
//   })
// })


// test("fetchdata",async ()=>{
//   const res = await fetchData();
//   expect(res.data).toEqual({
//     success: true
//   });
// })


// test('fetchData 返回结果是404',async ()=>{
//   // 至少要执行几个expect
//   expect.assertions(1);
//   try {
//     return await fetchData();
//   } catch (e) {
//     // console.log(e.toString())
//     expect(e.toString().indexOf('404') > -1).toBe(true);
//   }
// })


// test("fetchdata 返回结果为{success：true}",()=>{
//   return expect(fetchData()).resolves.toMatchObject({
//     data:{
//       success:true
//     }
//   })
// })


// test("fetchdata 返回结果为404",()=>{
//   return expect(fetchData()).rejects.toThrow();
// })