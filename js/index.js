var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Testing Toasts', duration: 1000});
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you hungry?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Yes!', 'No!']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Take a break, Get some food in ya.", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'Keep working ya lazy git.', duration: 3000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}