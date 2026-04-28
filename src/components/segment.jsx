<script>
 	var newUserId = ' ' ;
	newUserId=crypto.randomUUID();

function identifyUser() {
	var userId = ' ' ;
	userId = newUserId;

analytics.identify(‘12345’ , {
	email : document.getElementById(‘email’).value,
	phone : document.getElementById(‘phone’).value,
	plan : document.getElementById(‘plan’).value,
	petName : document.getElementById(‘pet’).value,
	firstName: document.getElementById(‘firstName’).value,
	lastName : document.getElementById(‘lastName’).value
	});

}
</script>
