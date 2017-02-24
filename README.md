# Voicebot for claims

This project is to enable a simple voicebot in your project to help you with raising a claim.

### find the sample project in dist/index.html and be sure to run it behind a server

Things you need to do to run this:

# #Step 1
### Include jquery

  - https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js

# #Step 2
### Add Font-Awesome Dependency to the head element

 -https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

# #Step 3
### Download voicebot.js into your project and include it in index.html

  - voicebot.js
  
  
# #Step 4
### Add the following javascript snippet in your project

  - If using index.html
  
        $(document).ready(function(){
            $("#bot").voicebot();
        });
    
