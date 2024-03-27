document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const payload = {
            email: username, 
            password: password
        };

        fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            const token = data.accessToken;

            window.alert(token);
        })
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            console.error("error");
        })
    });
});
