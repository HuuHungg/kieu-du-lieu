//  Default parameter value : Định nghĩa ra giá trị mặc định cho những tham số

function logger(log, type = 'log') {
    console[type](log)
}

logger('Message...', 'error');