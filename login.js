document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const payload = {
        email: username, 
        password: password
    };

    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        const token = data.token;
        window.alert(token);
    })
    .catch(error => {
        window.alert("error");
    })


});