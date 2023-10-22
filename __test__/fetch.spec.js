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


test('fetchData 返回结果是404',async ()=>{
  // 至少要执行几个expect
  expect.assertions(1);
  try {
    // console.log(1111111111111)
    return await fetchData();
  } catch (e) {
    // console.log(2222222222222222)
    // console.log(e.toString())
    expect(e.toString().indexOf('404') > -1).toBe(true);
  }
})