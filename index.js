// module: 
//import: nạp vào 
//export: xuất ra

// Nạp logger từ logger.js
import {logger2} from './logger/index.js'
// import {TYPE_ERROR,TYPE_LOG,TYPE_WARN} from './constans.js' 
import * as constants from './constans.js' 
//as tất cả các file export 
console.log(constants)

logger2('日本語を勉強してる', constants.TYPE_WARN) 

