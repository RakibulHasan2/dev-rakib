Site link : https://da-nan.web.app

Technology used in this project - 1
functionalities -2
benefits -3 optional

project diagram 


How to set this project in account........
Step - 1 : Clone the repo code.
Step - 2 : Create a firebase account
goto this link : https://console.firebase.google.com/u/0/

- Add Account 
Step - 3 : Goto Authentication from Left Side bar
Sign in Method.......
Enable Email and Password 
Enable Google Sign in 
Step - 4: Goto Project Code
- Goto Src file > Component Folder > Config > Open firebase.config.js 
Then 
 From your firebase account in top left side bar there is "Project Overview" Click Setting button and goto "Project Setting" Scroll down and you will see  SDK setup and configuration
 note: must select sdk "node"
 Then Copy the code and paste it "firebase.config.js"
  Only This : 
  Example :
  const firebaseConfig = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: ""
            };
Step - 5 : Storage
- Setup Storage for Storing Images and files 
Step - : Hosting ....
Ref Doc: https://firebase.google.com/docs/hosting/quickstart
- Install the Firebase CLI
- Initialize your project
- Deploy to your site...
Thank you ........