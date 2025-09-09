// Login Form
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // demo login credentials
            const validEmail = 'mac@miller.com';
            const validPassword = 'swimming';
            
            if (email && password) {
                if (email === validEmail && password === validPassword) {
                    alert('Login successful! Redirecting to albums...');
                    // Redirect to albums page after successful login
                    setTimeout(function() {
                        window.location.href = 'albums.html';
                    }, 1000);
                } else {
                    alert('Invalid email or password. Please try again.');
                }
            } else {
                alert('Please fill in all fields');
            }
        });
    }
});

