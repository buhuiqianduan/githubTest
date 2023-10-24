// 可以看到，这是一个使用 ES6 语法定义的 class：

// 在实例化的时候定义了number，初始值是0
// 定义了静态方法add，执行结果为number加1
// 定义了静态方法minus，执行结果为number减1
export class Counter {
  constructor(){
    this.number = 0
  }
  addOne(){
    this.number += 1
  }
  addTwo(){
    this.number += 2
  }
  minusOne(){
    this.number -= 1
  }
  minusTwo(){
    this.number -= 2
  }
}


