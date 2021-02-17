/*******************nodeJS_param******************
 *1.获取命令行参数,例如:"node ./src/nodeJS/nodeJS_param name=t1 age=21"
 */
let nodeParam=process.argv;
//遍历命令行中参数
nodeParam.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})