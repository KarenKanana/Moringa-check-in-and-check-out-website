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