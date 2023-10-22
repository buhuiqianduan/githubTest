import { Counter } from "./count";



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

