(function($) {

    var form = $("#signup-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
             element.before(error); 
        },rules: {
            Password: {
                required: true,
            },
            Confirm_password: {
                equalTo: "#Password"
            },
            Social_security_number: {
                required: true,
            },
            Social_security_number_confirm: {
                equalTo: "#Social_security_number"
            }
        },
        messages: {
            First_name: {
                required: "Enter your First Name"
            },
            Last_name: {
                required: "Enter your Last Name"
            },
            Email: {
                required: "Enter your Email Address"
            },
            Username: {
                required: "Enter your Username"
            },
            Password: {
                required: "Enter your Password"
            },
            Confirm_password: {
                required: "Enter your Confirm Password",
                equalTo: "Please enter the same password"
            },
            Address: {
                required: "Enter your Street Address & Unit"
            },
            City: {
                required: "Enter your City"
            },
            State: {
                required: "Select your State"
            },
            Zip: {
                required: "Enter your Zip Code"
            },
            Phone: {
                required: "Enter your Phone Number"
            },
            Card_number: {
                required: "Enter your Credit Card Number"
            },
            Cvc: {
                required: "Enter your Security Code"
            },

            Social_security_number: {
                required: "Enter your SSN"
            },
            Social_security_number_confirm: {
                required: "Enter your Confirm SSN"
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
        highlight : function(element, errorClass, validClass) {
            $(element.form).find('.actions').addClass('form-error');
            $(element).removeClass('valid');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element.form).find('.actions').removeClass('form-error');
            $(element).removeClass('error');
            $(element).addClass('valid');
        }
    });
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : 'Previous',
            next : 'Next',
            finish : 'Submit',
            current : ''
        },
        titleTemplate : '<span class="title">#title#</span>',
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            form.submit();
            console.log(event, currentIndex);
            alert('Sumited');
        },
        // onInit : function (event, currentIndex) {
        //     event.append('demo');
        // }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
        
})(jQuery);