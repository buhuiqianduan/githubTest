import { runCallback } from "./mock";
// Mock 函数提供的以下三种特性，在我们写测试代码时十分有用：
// 捕获函数调用情况
// 设置函数返回值
// 改变函数的内部实现

// 测试回调是否调用
test("测试 runCallback", () => {
  const func = jest.fn(); // 生成 mock 函数，捕获函数的调用
  runCallback(func); // 调用 mock 函数
  expect(func).toBeCalled(); // toBeCalled 匹配器用来检查函数是否被调用过
});

// 检查函数调用次数是否正确
test("测试调用次数", () => {
  const func = jest.fn(); // 生成 mock 函数，捕获函数的调用
  runCallback(func); // 第一次调用 mock 函数
  runCallback(func); // 第二次调用 mock 函数
  runCallback(func); // 第三次调用 mock 函数
  expect(func.mock.calls.length).toBe(3); // 检查函数是否被调用了三次
});


// 检测函数是否返回undefined
test("测试返回值", () => {
  const func = jest.fn(); // 生成 mock 函数，捕获函数的调用
   expect(runCallback(func)).toBeUndefined(); // 检查函数是否返回 undefined
 });
  


