/*******************nodeJS_process******************
 *1.node环境中全局process对象
    process={
       argv:[//包含所有命令行调用参数的数组
            'D:\\nodeJS\\node.exe',//第一个参数是 node 命令的完整路径
            'E:\\codeSpace\\testTypeScript\\src\\nodeJS\\nodeJS_param',//第二个参数是正被执行的文件的完整路径
            'name=t1',//所有其他的参数从第三个位置开始
            'age=21'
        ],  
    }
    
 */
let p=process;
console.log(p);