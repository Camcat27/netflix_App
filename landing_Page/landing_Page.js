const APP_KEY = 'vrl-app-key'

const PAS_KEY = 'vrl-pas-key'


const app = Vue.createApp ({
    data () { 
        return {

            test: "Some text",
            
            userDetails : [],

            movies : [{ 
                            id : 'bond', 
                            name : 'No Time To Die',
                            genre : 'action', 
                            comingSoon : false, 
                            availDate : 21/01/2022, 
                            thumbnail : '/Images/james_bond.jpg', 
                            preview : 'string'
                        },

                        {   id : 'ava',
                            name : 'Avatar 2', 
                            genre : 'fantasy', 
                            comingSoon : false, 
                            availDate : 22/12/2021, 
                            thumbnail : '/Images/avatar_2.jpg', 
                            preview : 'string'
                        },

                        {   id : 'strange',
                            name : 'Dr Strange', 
                            genre : 'fantasy', 
                            comingSoon : true, 
                            availDate : 06/05/2022, 
                            thumbnail : '/Images/Dr_Strange.jpg', 
                            preview : 'string'
                        },

                        {   id : 'bad',
                            name : 'The Bad Guys', 
                            genre : 'animation', 
                            comingSoon : true, 
                            availDate : 22/05/2022, 
                            thumbnail : '/Images/the_bad_guys.jpg', 
                            preview : 'string'
                        },
                        

    
            ],

            watchList : [],

        }
    },

    methods : {

        addToList(movie) {

            this.watchList.push(movie)

            this.watchList = JSON.stringify(this.watchList)

            localStorage.setItem(APP_KEY, this.watchList)

            this.watchList = JSON.parse(this.watchList)

            console.log(this.watchList);
        },

        myFunction(){ 
            localStorage.clear()
            window.location.replace("../login_Page/login_Page.html");
        }
        
    },

    created() {
        //If data has been created we save it
        if (localStorage.getItem(PAS_KEY)){
            this.userDetails = JSON.parse(localStorage.getItem(PAS_KEY))
        } else {
            console.log("Data in storage does not exist")
        }

    }
});


app.mount('#myApp')

// // <!--------------- User Name --------------->
   
// myText = localStorage.getItem("userData");
// newObj = JSON.parse(myText);
// let nameDisplay = newObj[0]._username
// console.log(nameDisplay);

// document.getElementById("username").innerHTML = "Hello" + " " + nameDisplay; 

// // <!-- <--------------- End --------------->


