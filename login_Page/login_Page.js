
const PAS_KEY = 'vrl-pas-key'

const app = Vue.createApp ({
    data () { 
        return {

            test: "Some text",

            userDetails : {
                userName : "",
                userPassword : "",
            },

            savedDetails : [],


        }
    },

    methods : {

        loginUser() {

            this.savedDetails.push(this.userDetails)
            

            this.savedDetails = JSON.stringify(this.savedDetails)

            localStorage.setItem(PAS_KEY, this.savedDetails)

            this.savedDetails = JSON.parse(this.savedDetails)

            console.log(this.savedDetails)

            window.location.replace("../landing_Page/landing_Page.html");   
        }
        
    },
});


app.mount('#myApp')




//------------------------Class----------------------

// class loginDetails {
//     _username;
//     _password;

//     constructor(username, password){
//         this._username = username;
//         this._password = password;
//     }
// }

// end of class

//------------------------myObj----------------------

// let myObj = [

// ];

// end of obj

//------------------------Function----------------------

// function Login(){
//     var a = document.getElementById('uname').value;
//     console.log(a)
//     var b = document.getElementById('psw').value;
//     console.log(b)

//     let dogs = new loginDetails(a,b);
//     console.log(dogs)
//     myObj.push(dogs);

//     myData = JSON.stringify(myObj);
//     localStorage.setItem("userData", myData);

//     myText = localStorage.getItem("userData");
//     newObj = JSON.parse(myText);

//     window.location.replace("/landing_Page/landing_Page.html");
// };

// end of function


