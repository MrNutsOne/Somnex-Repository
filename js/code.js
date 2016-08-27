jQuery(document).ready(function() {
	jQuery('.content').addClass('visible pos-n').viewportChecker({
	    classToAdd: 'animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 100,
	   });   
});
    
//jQuery(document).ready(function() {
//    setTimeout(function() {
//        $('.content').viewportChecker({
//         classToAdd: 'animated bounceInUp', // Class to add to the elements when they are visible
//         offset: 100,
//        }); 
//    }, 100);
//});
    
$('.bottom').click(function() {
	$('.content').viewportChecker({
	    classToAdd: 'animated bounceOutUp pos-y', // Class to add to the elements when they are visible
	    offset: 100    
    });
    setTimeout(function() {
        $('.content-start').viewportChecker({
            classToAdd: 'visible animated bounceInUp pos-n', // Class to add to the elements when they are visible
            offset: 100    
        });
    }, 800);
});  