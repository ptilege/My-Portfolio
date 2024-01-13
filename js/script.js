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
// sr.reveal('.home-text h3',{delay:750, origin: 'right'});
sr.reveal('.home-text h4',{delay:750, origin: 'right'});
sr.reveal('.home-text h5',{delay:750, origin: 'right'});

sr.reveal('.home-card h2',{delay:750, origin: 'right'});
sr.reveal('.home-card input',{delay:750, origin: 'left'});
sr.reveal('.home-card textarea',{delay:750, origin: 'right'});
sr.reveal('.sendbtn',{delay:750, origin: 'bottom'});


sr.reveal('footer ',{delay:750, origin: 'bottom'});
sr.reveal('footer h4',{delay:1000, origin: 'left'});


emailjs.init("YN-ZdX4ac7TAQXR-j");

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if(!email.trim() || !name.trim()){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Both e-mail and Name",
            footer: '<a href="index.html">Go to home</a>'
          });
        return;
    }

    const templateParams = {
        to_name: "Recipient Name",
        from_name: name,
        from_email: email,
        message: message,
    };

    emailjs.send("service_rtxy2en", "template_ybdjd5d", templateParams)
        .then(function(response) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message Sent",
                showConfirmButton: false,
                timer: 1500
              });
        }, function(error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Message Not Sent",
                footer: '<a href="index.html">Go to home</a>'
              });
        });
}

