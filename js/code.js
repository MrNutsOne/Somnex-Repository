//first call from index page

$(document).ready(function() {
    $('.content').addClass("animated bounceInUp");
}); 

//call content, start, history

jQuery('.bottom').click(function () { //click from content
    jQuery('.content').viewportChecker({ 
        classToAdd: 'animated bounceOutUp',
        offset: 100,
    });
    setTimeout(function () { //addClass 'absolute' to Content (fix white bg)
        jQuery('.content').addClass('pos-a').viewportChecker({
            classToAdd: 'pos-a',
            offset: 100
        });
    }, 900);
    setTimeout(function () { //call content-start 
        jQuery('.content-start').viewportChecker({
            classToAdd: 'visible animated bounceInUp',
            offset: 100
        });
    }, 900);
    setTimeout(function () { //call content-history from info.html
        jQuery('.content-history').viewportChecker({
            classToAdd: 'visible animated bounceInUp',
            offset: 100
        });
    }, 900);    
});

//call auth-form

$("#auth").click(function () { //click from navbar
    $('#auth-form').addClass("visible animated slideInDown");
});

$("#auth-content").click(function () { //click from content
    $('#auth-form').addClass("visible animated slideInDown");
});

$("#auth-close").click(function () { //hide reg-form
    $('#auth-form').addClass("animated slideOutUp");
});

$("#auth-close").click(function () { //clear class  name
    setTimeout(function () {
        $('#auth-form').removeClass("visible animated slideInDown slideOutUp");
    }, 1500);
});

//call reg-form

$("#reg").click(function () { //click from navbar
    $('#reg-form').addClass("visible animated slideInDown");
});

$("#reg-content").click(function () { //click from content
    $('#reg-form').addClass("visible animated slideInDown");
});

$("#reg-close").click(function () { //hide reg-form
    $('#reg-form').addClass("animated slideOutUp");
});

$("#reg-close").click(function () { //clear class  name
    setTimeout(function () {
        $('#reg-form').removeClass("visible animated slideInDown slideOutUp");
    }, 1500);
});

//call and del launcher-form

//$("#launcher").click(function() { //click from navbar
//    $('#launcher-form').addClass("visible animated slideInDown");
//});

$("#launcher-content").click(function () { //click from content
    $('#launcher-form').addClass("visible animated slideInDown");
});

$("#launcher-close").click(function () { //hide launcher-form
    $('#launcher-form').addClass("animated slideOutUp");
});

$("#launcher-close").click(function () { //clear class  name
    setTimeout(function () {
        $('#launcher-form').removeClass("visible animated slideInDown slideOutUp");
    }, 1500);
});