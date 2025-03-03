    document.addEventListener('DOMContentLoaded', () => {
     const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const closeSignupBtn = document.getElementById('close-signup-btn');
    const signupFormElement = signupForm.querySelector('form'); // Signup form element
    const searchBar = document.querySelector('.search-bar-container'); // Search bar container
    let menuOpen = false;

    // Toggle the hamburger menu
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent sidebar toggle from affecting other elements
        menuOpen = !menuOpen;
        sideMenu.classList.toggle('open', menuOpen);
        menuToggle.classList.toggle('open', menuOpen);
    });

    // Open the login form
    loginBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from affecting sidebar
        loginForm.classList.add('active');
        document.querySelector('.background-video').style.filter = 'blur(5px)';
    });

    // Close the login form
    closeLoginBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from affecting sidebar
        loginForm.classList.remove('active');
        document.querySelector('.background-video').style.filter = 'none';
    });

    // Open the sign-up form
    signupBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from affecting sidebar
        signupForm.classList.add('active');
        document.querySelector('.background-video').style.filter = 'blur(5px)';
    });

    // Close the sign-up form
    closeSignupBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from affecting sidebar
        signupForm.classList.remove('active');
        document.querySelector('.background-video').style.filter = 'none';
    });

    // Close the login form when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!loginForm.contains(event.target) && !loginBtn.contains(event.target) && loginForm.classList.contains('active')) {
            loginForm.classList.remove('active');
            document.querySelector('.background-video').style.filter = 'none';
        }
    });

    // Close the sign-up form when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!signupForm.contains(event.target) && !signupBtn.contains(event.target) && signupForm.classList.contains('active')) {
            signupForm.classList.remove('active');
            document.querySelector('.background-video').style.filter = 'none';
        }
    });

    // Prevent clicks on search bar from affecting the sidebar
    searchBar.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Prevent clicks on the login form from opening the sidebar
    loginForm.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Prevent clicks on the signup form from opening the sidebar
    signupForm.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Close the menu or login/signup forms when 'Escape' key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (menuOpen) {
                menuOpen = false;
                sideMenu.classList.remove('open');
                menuToggle.classList.remove('open');
            }
            if (loginForm.classList.contains('active')) {
                loginForm.classList.remove('active');
                document.querySelector('.background-video').style.filter = 'none';
            }
            if (signupForm.classList.contains('active')) {
                signupForm.classList.remove('active');
                document.querySelector('.background-video').style.filter = 'none';
            }
        }
    });

    // Login form validation
    loginForm.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const username = loginForm.querySelector('input[type="text"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();

        // Retrieve stored user data
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Debugging output
        console.log('Stored User:', storedUser);
        console.log('Input Username:', username);
        console.log('Input Password:', password);

        if (!storedUser) {
            alert('No user data found. Please sign up.');
            return;
        }

        if (username === storedUser.username && password === storedUser.password) {
            alert('Successfully logged in!');
            // Redirect to the front page (index.html)
            window.location.href = 'index.html';
        } else {
            alert('Incorrect username or password.');
        }
    });

    // Signup form validation and submission
    signupFormElement.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Check if all required fields are filled
        const inputs = signupFormElement.querySelectorAll('input');
        let allFilled = true;
        let userData = {};

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
                input.style.borderColor = 'red'; // Highlight empty fields
            } else {
                input.style.borderColor = '#ccc'; // Reset border color for filled fields
                // Store input values in userData object
                if (input.placeholder === 'Mobile number or email') {
                    userData.mobile_number_or_email = input.value;
                } else if (input.placeholder === 'Full Name') {
                    userData.full_name = input.value;
                } else if (input.placeholder === 'Username') {
                    userData.username = input.value;
                } else if (input.placeholder === 'Password') {
                    userData.password = input.value;
                }
            }
        });

        if (allFilled) {
            localStorage.setItem('user', JSON.stringify(userData));
            alert('You have created your account successfully!');
            signupForm.classList.remove('active');
            loginForm.classList.add('active'); // Redirect to login form
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // About button click event
    const aboutBtn = document.getElementById('about-btn');
    aboutBtn.addEventListener('click', () => {
        window.location.href = 'about.html';
    });

    // Quizzes button click event
    const quizzesBtn = document.getElementById('quizzes-btn');
    quizzesBtn.addEventListener('click', () => {
        window.location.href = 'quizzes.html';
    });
});

