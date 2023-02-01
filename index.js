let courseApi ="http://localhost:3000/course"

fetch(courseApi)
    .then(function(responsive) {
        return responsive.json()
    })

    .then((course)=> {
        console.log(course)
    })


//  CRUD 
    // - Create: Tạo mới - POST: Tạo dữ liệu
    // - Read: Lấy dữ liệu - GET: Lấy dữ liệu
    // - Update: Chỉnh sửa  - PUT/ PATCH: Chỉnh sửa
    // - Delete: Xoá dữ liệu - DELETE: Xoá 

// Rest API 
        