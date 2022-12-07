childentry2.style.display = "none";
childentry3.style.display = "none";

function add1Click(){
	add1.style.display = "none";
	child2.value = "";
	office2.selectedIndex = 0;
	child2Msg.style.display = "none";
	office2Msg.style.display= "none";
	childentry2.style.display = "block";
	add2.style.display = "block";
}

function delete1Click(){
	if(childentry2.style.display == "block"){
		child1.value = child2.value;
		office1.selectedIndex = office2.selectedIndex;
		if(child2Msg.style.display === "block") child1Msg.style.display = "block";
		else child1Msg.style.display = "none";
		if(office2Msg.style.display === "block") office1Msg.style.display = "block";
		else office1Msg.style.display= "none";

		if(childentry3.style.display == "block"){
			child2.value = child3.value;
			office2.selectedIndex = office3.selectedIndex;
			childentry3.style.display = "none";
			add2.style.display = "block";
			if(child3Msg.style.display === "block") child2Msg.style.display = "block";
			else child2Msg.style.display = "none";
			if(office3Msg.style.display=== "block") office2Msg.style.display = "block";
			else office2Msg.style.display = "none";
		}else{
			childentry2.style.display = "none";
			add2.style.display = "none";
			add1.style.display = "block";
			child2Msg.style.display = "none";
			office2Msg.style.dispay = "none";
		}
		$('#delete-msg1').fadeIn("slow", function(){
			$(this).delay(3000).fadeOut("slow");
		});
	}else{
		child1.value = "";
		office1.selectedIndex = 0;
		$('#delete-msg1').fadeIn("slow", function(){
			$(this).delay(3000).fadeOut("slow");
		});
	}
}

function add2Click(){
	add2.style.display = "none";
	child3.value = "";
	office3.selectedIndex = 0;
	child3Msg.style.display = "none";
	office3Msg.style.display= "none";
	childentry3.style.display = "block";
}

function delete2Click(){
	if(childentry3.style.display == "block"){
		child2.value = child3.value;
		office2.selectedIndex = office3.selectedIndex;
		childentry3.style.display = "none";
		$('#delete-msg2').fadeIn("slow", function(){
			$(this).delay(3000).fadeOut("slow");
		});
		add2.style.display = "block";
	}else{
		childentry2.style.display = "none";
		add2.style.display = "none";
		child2.value = "";
		office2.selectedIndex = 0;
		$('#delete-msg2').fadeIn("slow", function(){
			$(this).delay(3000).fadeOut("slow");
		});
		add1.style.display = "block";
	}
}

function delete3Click(){
	childentry3.style.display = "none";
	child3.value = "";
	office3.selectedIndex = 0;
	$('#delete-msg3').fadeIn("slow", function(){
		$(this).delay(3000).fadeOut("slow");
	});
	add2.style.display = "block";
}