import { Counter } from "./count";
// beforeAll：在所有测试用例执行之前调用（调用一次）
// afterAll：在所有测试用例执行之后调用（调用一次）
// beforeEach：在每个测试用例执行之前调用（调用多次）
// afterEach：在每个测试用例执行之后调用（调用多次）

let counter = null; 
beforeAll(()=>{
  console.log('beforeAll')
})

beforeEach(()=>{
  console.log('beforeEach')
  counter = new Counter(); 
})

afterEach(()=>{
  console.log('afterEach')
})


afterAll(()=>{
  console.log('afterAll')
})


describe('增加',()=>{
  test("test add",()=>{
    counter.addOne();
    expect(counter.number).toBe(1)
  })
})

describe('减少',()=>{
  test("miuns add",()=>{
    counter.minusOne();
    expect(counter.number).toBe(-1)
  })
})

