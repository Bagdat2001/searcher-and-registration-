var app = angular.module("registration", []);
app.controller("myCtrl", function($scope){
  var data = (localStorage.getItem("registrationList")) ? JSON.parse(localStorage.getItem("registrationList")) : [];
  $("#submit").click(function(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var mobile = $("#mobile").val();
    var address = $("#address").val();
    //var gender = $("#gender").val();
    if(document.getElementById("genderMale").checked){
      var gender = $("#genderMale").val();
    }
    else{
      var gender = $("#genderFemale").val();
    }
    var nationality = $("#nationality").val();
    console.log(gender+" gender");
    if(document.getElementById("alerts").checked){
      var alerts = "on";
    }
    else{
      var alerts = "off";
    }
    
    if(fname=='' || lname=='' || email=='' || password=='' || mobile=='' || address=='' || gender=='' || nationality=='' || nationality=='Select' || alerts==''){
       
       $("#msg").html("Please fill all details!");
       }
    else{
        var dataObject = {
          firstName: fname,
          lastName: lname,
          mail: email,
          pass: password,
          mob: mobile,
          add: address,
          gen: gender,
          nation: nationality,
          alert: alerts
        }
        
        
        
        data.push(dataObject);
        
        dataObjectUpdated();
        console.log(data);
        function dataObjectUpdated(){
         
          localStorage.setItem('registrationList', JSON.stringify(data));
          $("#msg").html("Successfully Submitted");
          var fname = $("#fname").val("");
          var lname = $("#lname").val("");
          var email = $("#email").val("");
          var password = $("#password").val("");
          var mobile = $("#mobile").val("");
          var address = $("#address").val("");
          
          var nationality = $("#nationality").val("Select");
          
        }
    }
  })
});