
/***********************类型断言************************
 *1.类型断言好比其它语言里的类型转换,但是不进行特殊的数据检查和解构
 *2.类型断言有两种形式:
    1)“尖括号”语法
    2)as语法
 *3.当你在TypeScript里使用JSX时，只有 as语法断言是被允许的
 *4.as是ts的关键字,js没有强类型声明，不需要as
 */

//1.“尖括号”语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

//2.“as”语法
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;


