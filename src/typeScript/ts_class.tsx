
/*************************ts_class**********************
 *1.传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件
 *2.类的特性
    1)继承,通过关键字extends实现类的继承
    2)多态,通过基类实现多态
 *3.类从基类中继承了属性和方法,派生类通常被称作 子类，基类通常被称作 超类
 *4.派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 
    而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 
    这个是TypeScript强制执行的一条重要规则
 *5.TypeScript 可以使用三种访问修饰符（Access Modifiers），
    分别是 public、private 和 protected
    1)public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
    2)private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
    3)protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

 */

//定义一个class
class Greeter{
    static age:number=20;//静态属性，直接通过"类名.name访问"
    greeting: string;//成员属性
    private _name:string="私有属性";
    constructor(message:string){//构造方法
        this.greeting = message;
    }
    greet(){//成员方法
        return "Hello, " + this.greeting;
    }
   
}//e

console.dir(Greeter);
let instance1=new Greeter("world");//类实例
console.log(instance1.greet());//调用成员方法
console.log(Greeter.age);//调用静态属性

export default Greeter;