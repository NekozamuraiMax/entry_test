const id = "1657662321-pGPYaMqW";

window.onload = function(e){
	liff.init({
		liffId: id
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		window.alert(err);
		console.log('LIFF Initialization failed ', err);
	});
};

function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済

    } else {
        // 未ログイン
        let result = window.confirm("LINE Loginしますか？");
        if(result) {
            liff.login();
        }
    }
}

function sendText(text){
	if(!liff.isInClient()){
		window.alert('This button is unavailable as LIFF is currently being opened in an external browser.');
	}else{
		liff.sendMessages([
			{
			type: 'text',
			text: text
			}
		]).then(function(){
			liff.closeWindow();
		}).catch(function(error){
			window.alert('Failed to send message ' + error);
		});
	}
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
		let message= '[保護者名]\n' + parentData + '\n[児童名(1人目)]\n' + child1Data + '\n[事業所(1人目)]\n' + office1Data;	//'${parentData}\n${child1Data}\n${office1Data}';

		let child2Data = child2.value;
		let office2Data= office2.value;
		let child3Data = child3.value;
		let office3Data= office3.value;
		if(childentry2.style.display === "block"){
			message = message + '\n[児童名(2人目)]\n' + child2Data + '\n[事業所(2人目)]\n' + office2Data;
			if(childentry3.style.display === "block"){
				message = message + '\n[児童名(3人目)]\n' + child3Data ; '\n[事業所(3人目)]\n' + office3Data;
			}
		}
		sendText(message);
		return false;
	});
});
