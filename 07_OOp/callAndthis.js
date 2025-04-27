function setUserName(username){
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email,password){
    setUserName.call(this, username)  
    this.email = email;
    this.password = password
}

const chai = new createUser("chai","chat@hakd.com","124")
console.log(chai)