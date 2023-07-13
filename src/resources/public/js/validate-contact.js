
$(document).ready(() => {

    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                number: true,
                minlength: 9
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: "Invalid name",
            phone: "Invalid name phone number",
            email: "Invalid name email address",
            message: "Please enter a message"
        },
    });

});
