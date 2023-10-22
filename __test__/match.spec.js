// 测试用例
// toBe 相当于object.is
test('adds 1 + 2 to equal 3', () => {
  expect(10).toBe(10);
});


// toEqual
// 测试对象内容相等
test('测试对象内容相等',()=>{
  // toEqual 匹配器
  const a = {one:1}
  expect(a).toEqual({one:1})
})


// toBeNull
test('测试对象内容相等',()=>{
  // toEqual 匹配器
  const a = null
  expect(a).toBeNull()
})



// tobeUndefined
test('测试对象内容相等',()=>{
  // toEqual 匹配器
  const a = undefined
  expect(a).toBeUndefined()
})

// tobedefined
test('测试对象内容相等',()=>{
  // toEqual 匹配器
  const a = 1
  expect(a).toBeDefined()
})


test('测试对象内容相等',()=>{
  // toEqual 匹配器
  const a = 1
  expect(a).toBeTruthy()
})


test('测试对象内容相等',()=>{
  // toEqual 匹配器
  const a = 0
  expect(a).toBeFalsy()
})


test('测试对象内容相等',()=>{
  // toEqual 匹配器
  const a = 1
  expect(a).not.toBeFalsy()
})




// 数字
test('大于',()=>{
  // toEqual 匹配器
  const count = 10
  expect(count).toBeGreaterThan(9)
})


// 小于
test('小于',()=>{
  // toEqual 匹配器
  const count = 10
  expect(count).toBeLessThan(11)
})


// 浮点
test('tomatch',()=>{
  const firstCount = 0.1
  const secondCount = 0.2
  expect(firstCount + secondCount).toBeCloseTo(0.3)
})


// String
test('tomatch',()=>{
  const Str = 'www.bai-du.com'
  expect(Str).toMatch('bai')
})


test('tomatch',()=>{
  const Str = 'www.bai-du.com'
  expect(Str).toMatch(/bai-du/)
})


// 数组
test('toContain',()=>{
  const arr = ['dell','lee','imooc']
  const data = new Set(arr)
  expect(data).toContain('dell')
})


// 异常
const throwNewErrorFunc = ()=>{
  throw new Error('this is a new error')
}
test('toThrow',()=>{
  expect(throwNewErrorFunc).toThrow();
})