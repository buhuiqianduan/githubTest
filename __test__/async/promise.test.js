import { getData } from "./index";

// 方法一 promise语法
// 在测试成功返回值的时候，需要在.then里面执行测试用例，而且必须在开头加上return，返回整个异步代码，否则这个测试是没有意义的。
// 如果你忽略了这个return，你的测试将在异步函数返回的 promise 解析之前完成。
describe('异步代码promise格式',()=>{
  test("测试 getData 的返回值为 { success: true }", () => {
    return getData().then(res => {
      expect(res.data).toEqual({ success: true });
    });
  });
  //  在测试失败返回值的时候，需要在.catch里面执行测试用例，但是这样做的话，如果请求发送成功，异步函数走进了.then回调，.catch里面的内容不会被执行，相当于这个测试用例没有做任何事情，还是照样能通过测试。
  // 要解决这个问题，需要在前面加上expect.assertions(1);，用来断言这个测试用例调用了一定数量的expect。如果调用次数不够，测试用例就不会通过。

  test("测试 getData 的返回值包含 404", () => {
    return getData().catch(err => {
      // 至少调用一次expect
      expect.assertions(1);
      expect(err.toString()).not.toMatch("404");
    });
  });
})


// 方法二：.resolves 匹配器 / .rejects 匹配器
// 你也可以在 expect 语句中使用.resolves匹配器，Jest将等待该 Promises 函数被 resolve。
// 如果 Promises 函数被 reject，测试用例将自动失败。
// 同理，你也可以在 expect 语句中使用.rejects匹配器，Jest将等待该 Promises 函数被 reject。
// 如果 Promises 函数被 resolve，测试用例将自动失败
describe(".resolves 匹配器 / .rejects 匹配器",()=>{
  // test("测试 getData 的返回值为 { success: true }", () => {
  //   return expect(getData()).resolves.toEqual({ success: true });
  // });

  // test("测试 getData 的返回值包含 404", () => {
  //   return expect(getData()).rejects.toMatch("404");
  // });
})




// 方法三： Async / Await
describe("async/await",()=>{
  test("测试 getData 的返回值为 { success: true }", async () => {
    const { data } = await getData();
    expect(data).toEqual({ success: true });
  });
  
  // test("测试 getData 的返回值包含 404", async () => {
  //   expect.assertions(1);
  //   try {
  //     await getData();
  //   } catch (err) {
  //     expect(err.message).toMatch("404");
  //   }
  // });
})



// 方法四： Async、Await 和 .resolves、.rejects 结合使用
describe("Async、Await 和 .resolves、.rejects 结合使用",()=>{
  // test("测试 getData 返回成功", async () => {
  //   await expect(getData()).resolves.toEqual({ success: true });
  // });
  // test("测试 getData 返回失败", async () => {
  //   await expect(getData()).rejects.toMatch("404");
  // });
})




