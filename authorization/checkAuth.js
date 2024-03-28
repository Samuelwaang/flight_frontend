const jwt = getCookie('jwt');

fetch('http://localhost:8080/api/auth/login', {
    method: 'GET',
    headers: {
        'jwt': token
    }
    .then(response => {
        if (response.ok) {
            console.log("success");
        } else {
            console.log("fail");
        }
    })
})