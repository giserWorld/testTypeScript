
/***********************ts-config************************
 *1.如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录
 *2.tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项
 *3.使用tsconfig.json：
    1)不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录
    2)不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件的目录
  *4.tsconfig.json可选属性:
    tsconfig={
        "compilerOptions":{//编译选项,可以被忽略，这时编译器会使用默认值
            "baseUrl": "./src",//解析非相对模块名的基准目录
            "outDir": "./dist",//重定向输出目录
            "sourceMap": false,//生成相应的 .map文件
            "declaration": true,//生成相应的 .d.ts文件
            "module": "es2015",//指定生成哪个模块系统代码
            "target": "es6"//指定ECMAScript目标版本
        }
    }
 */

class ts_index{
    constructor(props:any){
       
    }
}
export default ts_index;