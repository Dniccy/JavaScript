// User class

class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const userObject = newUser ("Dom", 29, "dom@example.com");
console.log(userObject);

const newHTML = `
<h1>Hello ${userObject.name}</h1>
<h1>Your age is ${userObject.age}</h1>
<h1>Your email address is${userObject.email}</h1>
`;

document.body.innerHTML = newHTML;