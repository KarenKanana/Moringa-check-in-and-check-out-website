localStorage.setItem('karen', 'sheila','Diana','Isaac');
localStorage.getItem('karen'); //karen
//or 
localStorage // all stores
const getLogin = () => {
    let login;
    if(localStorage.getItem('login') === null){
        login = [];
    }else {
        login = JSON.parse(localStorage.getItem('login'));
    }
    return login;
}
const saveLogin = inputData => {
    const login = getLogin();
    login.push(inputData);
    localStorage.setItem('login', JSON.stringify(login));
}
savelogin(input.value);


const addLogin = e => {
    e.preventDefault();

    let li = document.createElement('li');
    li.textContent =  input.value;
    saveLogin(input.value);
    loginUl.appendChild(li);
    input.value = '';
}
const deleteLogin = (login, e) => {
    const targetLi = login.indexOf(e.target.textContent);
    login.splice(targetLi, 1);
    localStorage.setItem('login', JSON.stringify(login));
}
$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
}