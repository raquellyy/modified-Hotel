 ///////////////////////////WHATS NEW IN VERSION 3 /////////////////////////////

 var dt = new Date();
 var utcDate = dt.toDateString();
 var peeps1 = 0;

 var waitList1 = "";


 var allpeople = [];




 /////////////////////////////////ROOM ONE/////////////////////////////////
 function add1(event) {

     if ((peeps1 < 3) && (window.event.keyCode == 13)) {
         var r1Name = document.getElementById('person').value;
         var ol = document.getElementById("list1");
         var li = document.createElement("li");
         var r1NameFinal = document.createTextNode(r1Name);
         var r1TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");

         li.appendChild(r1NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r1TimeFinal);

         ol.appendChild(li);
         document.getElementById('person').value = "";
         peeps1++;

        //Add guest to guestlist
        allpeople.push(r1Name);
        console.log(allpeople);

         if (peeps1 == 3) {
             document.getElementById('room1').style.backgroundColor = "orange";


         }
     } else if (window.event.keyCode == 13) {
         var waitList1 = document.getElementById('person').value;
         document.getElementById('person').style.display = "none";

     }
     //Removes list item on click//
    li.onclick = function() {
        this.parentNode.removeChild(this);
        peeps1 -= 1;

     document.getElementById('person').style.display = "block";
    }

 }

 function remove1All() {
     peeps1 = 0;
     while (list1.hasChildNodes()) {
         list1.removeChild(list1.lastChild);
     }
     document.getElementById('person').style.display = "block";
 }
 


 ////////////////// GUEST REPORT //////////////////////////
 function guestreport() {
    var gstrpt = allpeople.toString();
    
    localStorage.setItem("allthepeople", gstrpt);
    location.href = "hotelpage2.html";
  }
  