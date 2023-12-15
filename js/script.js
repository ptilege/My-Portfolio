let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});

sr.reveal('.home-text span',{delay:600, origin: 'top'});
sr.reveal('.home-text h1',{delay:680, origin: 'left'});
sr.reveal('.home-text p',{delay:750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});

sr.reveal('.share',{delay:950, origin: 'bottom'});

sr.reveal('.home-text p',{delay:750, origin: 'right'});

sr.reveal('.home-img',{delay:1000, origin: 'right'});

sr.reveal('.home-text h2',{delay:680, origin: 'left'});
sr.reveal('.home-text h3',{delay:750, origin: 'right'});
sr.reveal('.home-text h4',{delay:750, origin: 'right'});
sr.reveal('.home-text h5',{delay:750, origin: 'right'});

sr.reveal('.home-card h2',{delay:750, origin: 'right'});
sr.reveal('.home-card input',{delay:750, origin: 'left'});
sr.reveal('.home-card textarea',{delay:750, origin: 'right'});
sr.reveal('.sendbtn',{delay:750, origin: 'bottom'});


sr.reveal('footer ',{delay:750, origin: 'bottom'});
sr.reveal('footer h4',{delay:1000, origin: 'left'});


function sendEmail() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Create a FormData object to send form data
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    // Make an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "sendmail.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // Update content type
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === "success") {
                    alert("Email sent successfully!");
                } else {
                    alert("Error sending email. Please try again.");
                }
            } else {
                console.error("Error:", xhr.statusText);
            }
        }
    };
    xhr.onerror = function () {
        console.error("Request failed");
    };
    xhr.send(formData);
}

