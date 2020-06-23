(function($) {

    var form = $("#signup-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
             element.before(error); 
        },
        rules: {
            First_name : {
                required: true,
            },
            Last_name : {
                required: true,
            },
            user_name : {
                required: true,
            },
            password : {
                required: true,
            },
            email : {
                required: true,
            },
            phone : {
                required: true,
            },
            address: {
                required: true,
            },
            employee_id : {
                required: true,
            },
            designation: {
                required: true,
            },
            department: {
                required: true,
            },
            work_hours: {
                required: true,
            },
            bank_name: {
                required: true,
            },
            holder_name: {
                required: true,
            },
            card_number: {
                required: true,
                number: true,
            },
            cvc: {
                required: true,
            },
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