function myFunction(s) {
    // event.preventDefault();
    let myEmailValue = document.getElementById('mail').value;
    let usernameValue = document.getElementById('username').value;
    let passwordValue = document.getElementById('password').value;
    // document.getElementsByClassName('mail')
    // console.log(myEmailValue, ' lllssss ', document.getElementsByClassName('mail'));
    alert(JSON.stringify({
        email: myEmailValue,
        username: usernameValue,
        password: passwordValue
    }));
}


function forgotPassword(s) {
    // event.preventDefault();
    let myEmailValue = document.getElementById('mail').value;
    // document.getElementsByClassName('mail')
    // console.log(myEmailValue, ' lllssss ', document.getElementsByClassName('mail'));
    alert(JSON.stringify({
        email: myEmailValue,
    }));
}

function loginPage(s) {
    // event.preventDefault();
    let usernameValue = document.getElementById('username').value;
    let passwordValue = document.getElementById('password').value;
    // document.getElementsByClassName('mail')
    // console.log(myEmailValue, ' lllssss ', document.getElementsByClassName('mail'));
    alert(JSON.stringify({
        username: usernameValue,
        password: passwordValue
    }));
}

function messagePage(s) {
    // event.preventDefault();
   // let myGroup = document.getElementById('id').value;
   // let myMessage = document.getElementById('msg2').value;
    // document.getElementsByClassName('mail')
    // console.log(myEmailValue, ' lllssss ', document.getElementsByClassName('mail'));
    var myGroup = document.createElement("span")
    // var myMessage = document.createElement("span");
    myGroup.innerText = document.getElementById('id').value + " " + document.getElementById('msg2').value;
    // myMessage.innerText = document.getElementById('msg2').value;
    // document.body.appendChild(myMessage);
    document.body.appendChild(myGroup);
};

function contacts(s) {
    console.log('hello, onnlooad')
    var text = " ";
    let arr = ["Qion", "Mikky", "Damilare"];
    var i;
    for (i = 0; i < arr.length; i++) {
        var myOl = document.getElementById("arr")
        var myLi = document.createElement("li");
        myLi.onclick = function handleclick() {
            // console.log('nooooooo')
            myArray = {
                1: "I'm a boy",
                2: "Hello",
                3: "What's up??"
             }
             var myLis = document.createElement("p");
             myLis.innerText = 'hello';
             document.body.appendChild(myLis);
         };
        console.log(myLi)
        myLi.innerText = arr[i]
        myOl.appendChild(myLi)
        // text += arr[i];
    }
    // document.getElemen/tById("arr").innerHTML = text;
}

// function handleclick() {
//    // console.log('nooooooo')
//    myArray = {
//        1: "I'm a boy",
//        2: "Hello",
//        3: "What's up??"
//     }
//     var myLis = document.createElement("p");
//     myLis.innerText = document.getElementById("arr").value;
//     document.body.appendChild(myLis);
// }