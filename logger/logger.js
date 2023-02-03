// export thường, có thể export vô số, dùng destruturing để lấy

// export let TYPE_LOG = 'log';
// export let TYPE_WARN = 'warn';
// export let TYPE_ERROR = 'error'

import {TYPE_LOG} from '../constans.js';

function logger (log, type= 'log') {
    console[type](log)
}

// Mặc định xuất ra logger
// Một module chỉ export được default một cái còn lại có thể export vô số kiểu export thường
export default logger

