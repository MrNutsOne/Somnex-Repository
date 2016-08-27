jQuery(document).ready(function() {
	jQuery('.content').viewportChecker({
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
	    classToAdd: 'animated bounceOutUp', // Class to add to the elements when they are visible
	    offset: 100,
    });
    setTimeout(function() {
        $('.content-start').viewportChecker({
            classToAdd: 'visible animated bounceInUp visible', // Class to add to the elements when they are visible
            offset: 100    
        });
    }, 800);
    setTimeout(function() {
        $('.content').viewportChecker({
            classToAdd: 'pos-a', // Class to add to the elements when they are visible
            offset: 100    
        });
    }, 900);    
});  