(function ( $ ) {
 
    $.fn.voicebot = function() {
        var content = 
          "<div id='bot-class'"+
            " style='cursor: pointer;background: #333;"+
            " height: 50px;width: 50px;border-radius: 50px;"+
            " display: flex; flex-direction: column;justify-content: center;align-items: center;'>"+
              "<i class='fa fa-microphone' style='color: white'></i>"+
          "</div>"+
          "<div id='bot-content'></div>";
        this.append(content);

        $(this).click(function(){
          if (!('webkitSpeechRecognition' in window)) {
            upgrade();
          } else {
            var recognition = new webkitSpeechRecognition();
            recognition.onstart = function() { 
              console.log("recognittion started");
            }
            recognition.onresult = function(event) { 
              console.log(event);
              var text = event.results["0"]["0"].transcript;
              text = encodeURIComponent(text.trim());
              var data = {"message": text};
              $.ajax({
                  url: "https://register-claim.herokuapp.com/message", 
                  data: data,
                  success: function(result){
                      console.log(result);
                      var utterance = new SpeechSynthesisUtterance(result[0].speech);
                      window.speechSynthesis.speak(utterance);
                      for(var i=1; i< result.length; i++) {
                        $("#bot-content").append(result[i].policyHolderName+"----"+result[i].policyId+"<br><hr>");
                      }
                  }
              });
            }
            recognition.onerror = function(event) { 
              console.log(event);
            }
            recognition.onend = function() { 
              console.log("rec end");
            }
            recognition.start(); 
          }
        });


        return this;
    };
 
}( jQuery ));
