const jwt = "";
const cookies = document.cookie.split(';');
for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'jwt') {
        jwt = value;
    }
}

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
