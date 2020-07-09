var friends = ["Mayank", "Rajat", "Saurav", "Sachit"];

function loadfriends(){
	document.getElementById("friend").innerHTML = friends;
}
function myfunction(){
	var add=prompt("Add your best Friend");
	friends.push(add);
	document.getElementById("friend").innerHTML= friends;
}
function del(){
	var x=prompt("Enter index you want to delete");
	friends.splice(x,1);
	document.getElementById("friend").innerHTML = friends;
}