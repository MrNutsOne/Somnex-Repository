jQuery(document).ready(function () {
    jQuery('.content').viewportChecker({
        classToAdd: 'animated bounceInUp',
        offset: 100,
    });
});

jQuery('.bottom').click(function () {
    jQuery('.content').viewportChecker({
        classToAdd: 'animated bounceOutUp',
        offset: 100,
    });
    setTimeout(function () {
        jQuery('.content').addClass('pos-a').viewportChecker({
            classToAdd: 'pos-a',
            offset: 100
        });
    }, 900);
    setTimeout(function () {
        jQuery('.content-start').viewportChecker({
            classToAdd: 'visible animated bounceInUp visible',
            offset: 100
        });
    }, 900);
});