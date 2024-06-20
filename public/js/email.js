function sendMail(event) {
    event.preventDefault();  // Mencegah pengiriman form default

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_dxs0xor";
    const templateID = "template_30utir8";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully");
        })
        .catch((err) => console.log(err));
};
