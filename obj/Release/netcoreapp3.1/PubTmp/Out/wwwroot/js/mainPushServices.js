(function($) {

    var form = $("#signup-form");
    form.validate({
        rules: {
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
        focusInvalid: false,
        invalidHandler: function (form, validator) {
            if (!validator.numberOfInvalids())
                return;
            console.log(validator);
            console.log(validator.errorList[0].element, $(validator.errorList[0].element).offset(), $(validator.errorList[0].element).offset().top );
            $('html, body').animate({
                scrollTop: $(validator.errorList[0].element).offset().top
            }, 1500);
        }
    });

    $(document).ready(function () {
        $('#signup-form input').focus(function () {
            var err = this.name + '-error';
            $('#' + err).remove();
        });
    })
    
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

    $('#gender').parent().append('<ul class="list-item" id="newgender" name="gender"></ul>');
    $('#gender option').each(function(){
        $('#newgender').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#gender').remove();
    $('#newgender').attr('id', 'gender');
    $('#gender li').first().addClass('init');
    $("#gender").on("click", ".init", function() {
        $(this).closest("#gender").children('li:not(.init)').toggle();
    });
    
    var allOptions = $("#gender").children('li:not(.init)');
    $("#gender").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#gender").children('.init').html($(this).html());
        allOptions.toggle();
    });

    $('#country').parent().append('<ul class="list-item" id="newcountry" name="country"></ul>');
    $('#country option').each(function(){
        $('#newcountry').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#country').remove();
    $('#newcountry').attr('id', 'country');
    $('#country li').first().addClass('init');
    $("#country").on("click", ".init", function() {
        $(this).closest("#country").children('li:not(.init)').toggle();
    });
    
    var CountryOptions = $("#country").children('li:not(.init)');
    $("#country").on("click", "li:not(.init)", function() {
        CountryOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#country").children('.init').html($(this).html());
        CountryOptions.toggle();
    });

    $('#payment_type').parent().append('<ul  class="list-item" id="newpayment_type" name="payment_type"></ul>');
    $('#payment_type option').each(function(){
        $('#newpayment_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#payment_type').remove();
    $('#newpayment_type').attr('id', 'payment_type');
    $('#payment_type li').first().addClass('init');
    $("#payment_type").on("click", ".init", function() {
        $(this).closest("#payment_type").children('li:not(.init)').toggle();
    });
    
    var PaymentsOptions = $("#payment_type").children('li:not(.init)');
    $("#payment_type").on("click", "li:not(.init)", function() {
        PaymentsOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#payment_type").children('.init').html($(this).html());
        PaymentsOptions.toggle();
    });

    //$('#Suffix').parent().append('<ul  class="list-item" id="newSuffix" name="Suffix"></ul>');
    //$('#Suffix option').each(function () {
    //    $('#newSuffix').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    //});
    //$('#Suffix').remove();
    //$('#newSuffix').attr('id', 'Suffix');
    //$('#Suffix li').first().addClass('init');
    //$("#Suffix").on("click", ".init", function () {
    //    $(this).closest("#Suffix").children('li:not(.init)').toggle();
    //});

    //var SuffixOptions = $("#Suffix").children('li:not(.init)');
    //$("#Suffix").on("click", "li:not(.init)", function () {
    //    SuffixOptions.removeClass('selected');
    //    $(this).addClass('selected');
    //    $("#Suffix").children('.init').html($(this).html());
    //    SuffixOptions.toggle();
    //});
    $.dobPicker({
        daySelector: '#birth_date',
        monthSelector: '#birth_month',
        yearSelector: '#birth_year',
        dayDefault: 'Day',
        monthDefault: 'Month',
        yearDefault: 'Year',
        minimumAge: 0,
        maximumAge: 120
    });

    $.dobPicker({
        daySelector: '#expiry_date',
        monthSelector: '#expiry_month',
        yearSelector: '#expiry_year',
        dayDefault: 'Day',
        monthDefault: 'Month',
        yearDefault: 'Year',
        minimumAge: 0,
        maximumAge: 120
    });
        
})(jQuery);