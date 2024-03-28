const jwt = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzExNjYzMjA1LCJleHAiOjE3MTE2NjMyNzV9.5paeuRV9NKcWMNRb1wdacUtc4Pwzw-up3xJo_guEpSIGgYzN6cY9YnFBLMMEVWCUhpmCUR4-U8Bi1HU7KkOZxg";
// const cookies = document.cookie.split(';');
// for (let cookie of cookies) {
//     const [name, value] = cookie.trim().split('=');
//     if (name === 'jwt') {
//         jwt = value;
//     }
// }

fetch('http://localhost:8080/api/auth/login/check-auth', {
    method: 'GET',
    headers: {
        'jwt': jwt
    }
})
.then(response => {
    if (response.ok) {
        console.log("success");
    } else {
        console.log("fail");
    }
})
