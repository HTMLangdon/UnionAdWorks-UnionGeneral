$(document).ready(function () {
    // set and cache some variables, change var forms to whatever forms you want to validate
    var forms = $('section.contact-contents div.form-container form'),
        formsCount = forms.length,
        items = forms.find('input[required]'),
        count = items.length;

    var canvas = document.createElement('canvas');
    if (canvas && canvas.getContext && canvas.getContext('2d')) {

    } else {
        //        document.write('<script src="js/jquery.js"><\/script>');
        // loop though each required input and set the required and type class jQuery validate needs
        for (var i = 0; i < count; i += 1) {
            var obj = items[i];
            $(obj).attr('class', 'required ' + obj.getAttribute('type')).removeAttr('required');
        };


        for (var i = 0; i < formsCount; i += 1) {
            $(forms[i]).validate();
        }

    }
})
