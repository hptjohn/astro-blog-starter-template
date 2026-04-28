<script>
 	var newUserId = "" ;
	newUserId=crypto.randomUUID();

function identifyUser() {
	var userId = "" ;
	userId = newUserId;

analytics.identify(‘userId’ , {
	email : document.getElementById(‘email’).value,
	phone : document.getElementById(‘phone’).value,
	plan : document.getElementById(‘plan’).value,
	petName : document.getElementById(‘pet’).value,
	firstName: document.getElementById(‘firstName’).value,
	lastName : document.getElementById(‘lastName’).value
	});
analytics.track('New pet registered' , {
		petName : document.getElementById(“pet”).value
	});

alert{“Thanks for sending the details. We will be in touch soon”)

function trackButtonClicked() {

	analytics.track('Button Clicked' , {
		email : document.getElementById(“email”).value,
		plan : document.getElementById(“plan”).value
	});

	alert{“Button Clicked Triggered!!”)
}
	
}
</script>
