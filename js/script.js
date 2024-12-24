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


function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!email.trim() || !name.trim()) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Both e-mail and Name",
            footer: '<a href="index.html">Go to home</a>'
        });
        return;
    }

    // Send the form data to the PHP script via AJAX
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch("/.netlify/functions/send-email", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Email sent successfully!") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message Sent",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Message Not Sent",
                footer: '<a href="index.html">Go to home</a>'
            });
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Message Not Sent",
            footer: '<a href="index.html">Go to home</a>'
        });
    });
}

function sendEmail(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (!email.trim() || !name.trim() || !message.trim()) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required",
            footer: '<a href="index.html">Go to home</a>'
        });
        return;
    }

    // Prepare data to send as JSON
    const data = {
        name: name,
        email: email,
        message: message
    };

    // Send the data to the Netlify function
    fetch("/.netlify/functions/send-email", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Set content type to JSON
        },
        body: JSON.stringify(data)  // Send data as JSON string
    })
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        console.log(data);  // Log the response to check it

        // Check if email was sent successfully
        if (data.message === "Email sent successfully!") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message Sent",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            // If something went wrong, show an error message
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Message Not Sent",
                footer: '<a href="index.html">Go to home</a>'
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);  // Log errors
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "There was an error sending your message.",
            footer: '<a href="index.html">Go to home</a>'
        });
    });
}


