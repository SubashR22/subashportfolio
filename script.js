document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
  });
  
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Typed.js for dynamic text animation
    var typed = new Typed(".Text", {
        strings: ["Full Stack Java Developer","Backend Java Developer" ,"Spring Boot Enthusiast", "Web Developer"],
        typeSpeed: 150,
        backSpeed: 80,
        loop: true
    });

    // Initialize EmailJS
    emailjs.init("t09q6dO_B_M4ppeU8");
});

function sendMail(event) {
    event.preventDefault();

    var params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        number: document.getElementById("number").value.trim(),
        message: document.getElementById("message").value.trim(),
    };

    const serviceId = "service_to0zdbg";
    const templateId = "template_9f9a2fn";

    if (!params.name || !params.email || !params.message) {
        alert("Please fill in all required fields.");
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(params.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("contact-form").reset();
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.log("Error sending email:", err);
            alert("Something went wrong. Please try again later.");
        });
}

// Back to Top Button
var backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "↑";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
