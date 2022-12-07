$(window).load(function(){
	const liffId = "1657662321-nR14gmQy";
	initializeLiff(liffId);
});

function initializeLiff(liffId){
	liff.init({
		liffId:liffId
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		console.log('LIFF Initialization failed ', err);
	});
}

function sendText(text){
	liff.sendMessages([{
		'type': 'text',
		'text': text
	}]).then(function(){
		liff.closeWindow();
	}).catch(funciont(error){
		window.alert('Failed to send message ' + error);
	});
}

const params = (new URL(document.location)).searchParams;
const key = params.get('key');

const childentry1 = document.getElementById('childentry1');
const childentry2 = document.getElementById('childentry2');
const childentry3 = document.getElementById('childentry3');
const parent = document.getElementById('parent');
const child1 = document.getElementById('child1');
const child2 = document.getElementById('child2');
const child3 = document.getElementById('child3');
const office1= document.getElementById('office1');
const office2= document.getElementById('office2');
const office3= document.getElementById('office3');
const child1Msg = document.getElementById('child1-msg');
const child2Msg = document.getElementById('child2-msg');
const child3Msg = document.getElementById('child3-msg');
const parentMsg = document.getElementById('parent-msg');
const office1Msg= document.getElementById('office1-msg');
const office2Msg= document.getElementById('office2-msg');
const office3Msg= document.getElementById('office3-msg');
const submit = document.getElementById('submit');
const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');

$(function(){
	$('form').submit(function(){
		let parentData = parent.value;
		let child1Data = child1.value;
		let office1Data= office1.value;
		let message= '${parentData}\n${child1Data}\n${office1Data}';

		let child2Data = child2.value;
		let office2Data= office2.value;
		let child3Data = child3.value;
		let office3Data= office3.value;
		if(childentry2.style.display === "block"){
			message = message + '\n${child2Data}\n${office2Data}';
			if(childentry3.style.display === "block"){
				message = message + '\n${child3Data}\n${office3Data}';
			}
		}
		sendText(message);
		return false;
	});
});