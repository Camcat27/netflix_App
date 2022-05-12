const APP_KEY = 'vrl-app-key'

const PAS_KEY = 'vrl-pas-key'

const app = Vue.createApp ({
    data () { 
        return {

            test: "Some text",

            watchList : [],

            userDetails : [],

            searchList : "",

        }
    },

    created() {

        //If data has been created we save it
         if (localStorage.getItem(APP_KEY)){
             this.watchList = JSON.parse(localStorage.getItem(APP_KEY))
         } else {
             console.log("Data in storage does not exist")
         }

        if (localStorage.getItem(PAS_KEY)){
            this.userDetails = JSON.parse(localStorage.getItem(PAS_KEY));
            console.log(this.userDetails)
        } else {
            console.log("Data in storage does not exist")
        }
    },

    methods : {

        removeFromList(movie) {
            this.watchList.pop(movie)

            this.watchList = JSON.stringify(this.watchList)

            localStorage.setItem(APP_KEY, this.watchList)

            this.watchList = JSON.parse(this.watchList)

            console.log(this.watchList);  
        },

        myFunction(){ 
            localStorage.clear()
            window.location.replace("/login_Page/login_Page.html");
        }

       

    },

    computed : {

            searchWord() {
                
                return this.watchList.filter( (movie) => {
                    movie.name.toLowerCase().includes(this.searchList.toLowerCase());
                    
                    console.log(this.watchList)

                })
            }

            // return movie.name.included(this.searchList)
        //     // return this.movies.filter(movie => {
        //     //     return (
        //     //       movie.name.toLowerCase().includes(this.searchList.toLowerCase())
        //     //     );
        //     //   });
        // }
            
    }
});


app.mount('#myApp')

// <!--------------- User Name --------------->
   
// myText = localStorage.getItem("userData");
// newObj = JSON.parse(myText);
// let nameDisplay = newObj[0]._username
// console.log(nameDisplay);

// document.getElementById("username").innerHTML = "Hello" + " " + nameDisplay; 

// <!-- <--------------- End --------------->



