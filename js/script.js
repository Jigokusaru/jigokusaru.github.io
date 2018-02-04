var isAdult = false;
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function checkBday() {
    today = new Date()
    var bday=new Date(document.getElementById("bday").value);
    if(bday != "Invalid Date"){
      var one_yr=1000*60*60*24 * 365.2425
      age = Math.floor((today.getTime() - bday.getTime() ) / one_yr);
      isAdult = (age >= 18)? true:false;
      document.getElementById("ageVar").innerHTML = (isAdult)? "<p>You are old enough to be on this page!</p>":"<p>Screw off Kid noone wants you!</p>"        
    }else{
      alert("PLEASE SELECT YOUR BIRTHDAY!");
    }
    if(isAdult){
      restrict = document.getElementsByClassName("restrict");
      for (i = 0; i < restrict.length; i++) {
        restrict[i].className = restrict[i].className.replace("restrict","");
      }
    }

  }
