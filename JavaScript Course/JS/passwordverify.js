function check(){
	var pswd1=document.getElementById('enter');
	var pswd2=document.getElementById('repeat');
	if (pswd1.value != pswd2.value){
		alert("Passwords do not match!!");
		return false;
	}
}