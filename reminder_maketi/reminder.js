document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.scroll-up').onclick = scrollToTop;

    var signinModal = document.getElementById("Signin");
    var loginModal = document.getElementById("Login");
    var recoveryModal = document.getElementById("Recovery");
    var captchaModal = document.getElementById("Captcha");
    var openSigninBtns = document.getElementsByClassName("openSigninForm");
    var openLoginBtns = document.getElementsByClassName("openLoginForm");
    var openCaptchaLinks = document.getElementsByClassName("openCaptchaForm");
    var closeBtns = document.getElementsByClassName("close");
    var CaptchaImg = document.getElementById("CaptchaImg");
    const registerSuccessMessage = document.getElementById("registerSuccessMessage");
    const userExistsMessage = document.getElementById("userExistsMessage");
    const loginErrorMessage = document.getElementById("loginErrorMessage");
    const recoveryMessage = document.getElementById("recoveryMessage");
    const captchaErrorMessage = document.getElementById("captchaErrorMessage");
    

    Array.from(openSigninBtns).forEach(button => {
        button.onclick = function () {
            signinModal.style.display = "block";
        }
    });

    Array.from(openLoginBtns).forEach(button => {
        button.onclick = function () {
            loginModal.style.display = "block";
        }
    });

    Array.from(openCaptchaLinks).forEach(link => {
        link.onclick = function () {
            captchaModal.style.display = "block";
        }
    });

    Array.from(closeBtns).forEach(button => {
        button.onclick = function () {
            this.parentElement.parentElement.style.display = "none";
            captchaErrorMessage.style.display = "none";
        }
    });

    window.onclick = function (event) {
        if (event.target == signinModal || event.target == loginModal || event.target == recoveryModal || event.target == captchaModal) {
            event.target.style.display = "none";
            captchaErrorMessage.style.display = "none";
        }
    }

    document.getElementById("LoginForm").onsubmit = function (event) {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const bannedEmail = "banned@gmail.com";
        const nonExistentUser  = "non-existent";
        const adminEmail = "admin@gmail.com";
        const validPassword = "12345";

        document.getElementById("loginErrorMessage").style.display = "none";
        document.getElementById("bannedMessage").style.display = "none";
        document.getElementById("nonExistentMessage").style.display = "none";

        if (email === nonExistentUser ) {
            document.getElementById("nonExistentMessage").style.display = "block";
            return;
        }
        if (email === bannedEmail) {
            document.getElementById("bannedMessage").style.display = "block";
            return;
        }
        if (password !== validPassword) {
            document.getElementById("loginErrorMessage").style.display = "block";
            return;
        }
        if (email === adminEmail) {
            window.location.href = "admin.html";
        } else {
            window.location.href = "user.html";
        }
    };

    document.getElementById("SignInForm").onsubmit = function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("password2").value;
        const login = document.getElementById("login").value;
    
        // Скрываем сообщения об ошибках и успехе
        document.getElementById("registerSuccessMessage").style.display = "none";
        document.getElementById("userExistsMessage").style.display = "none";
        document.getElementById("passwordMismatchMessage").style.display = "none";
        document.getElementById("loginExistsMessage").style.display = "none";

        if (email === "admin@gmail.com") {
            document.getElementById("userExistsMessage").style.display = "block";
        } else {
            document.getElementById("registerSuccessMessage").style.display = "block";
        }

        if (password !== confirmPassword) {
            document.getElementById("passwordMismatchMessage").style.display = "block";
            return;
        }

        if (login === "Avelgar") {
            document.getElementById("loginExistsMessage").style.display = "block";
            return;
        }
    };
    

    document.getElementById("RecoveryForm").onsubmit = function (event) {
        event.preventDefault();
        const email = document.getElementById("recoveryEmail").value;
        recoveryMessage.style.display = "block";
    };

    document.getElementById("CaptchaForm").onsubmit = function (event) {
        event.preventDefault();
        const captchaInput = document.getElementById("captchaInput").value;
        
        if ((captchaInput === "докежь") && (CaptchaImg.src.includes("capcha.jpg"))) {
            captchaModal.style.display = "none";
            recoveryModal.style.display = "block";
        } else if (CaptchaImg.src.includes("capcha.jpg")) {
            CaptchaImg.src = "capcha2.png";
            captchaErrorMessage.style.display = "block";
        } else if ((captchaInput === "hsmhn") && (CaptchaImg.src.includes("capcha2.png"))) {
            captchaModal.style.display = "none";
            recoveryModal.style.display = "block";
        } else if (CaptchaImg.src.includes("capcha2.png")){
            CaptchaImg.src = "capcha.jpg";
            captchaErrorMessage.style.display = "block";
        }
    };
});