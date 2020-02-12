 ///////////////////////////WHATS NEW IN VERSION 3 /////////////////////////////

 var dt = new Date();
 var utcDate = dt.toDateString();
 var people1 = 0;
 var people2 = 0;
 var people3 = 0;
 var people4 = 0;
 var people5 = 0;
 var people6 = 0;


 var waitList1 = "";
 var waitList2 = "";
 var waitList3 = "";
 var waitList4 = "";
 var waitList5 = "";
 var waitList6 = "";


 var allpeople = [];




 /////////////////////////////////ROOM ONE/////////////////////////////////
 function add1(event) {

     if ((people1 < 4) && (window.event.keyCode == 13)) {
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
         document.getElementById('person').value = " ";
         people1++;

        //Add guest to guestlist
        allpeople.push(r1Name);
        console.log(allpeople);

         /*if (people1 == 3) {
             document.getElementById('room1').style.backgroundColor = "orange";
         }*/
     } else if (window.event.keyCode == 13) {
         var waitList1 = document.getElementById('person').value;
         document.getElementById('person').style.display = "none";

     }
     //Removes list item on click//
    li.onclick = function() {
        this.parentNode.removeChild(this);
        people1 -= 1;

     document.getElementById('person').style.display = "block";
    }

 }

 function remove1All() {
     people1 = 0;
     while (list1.hasChildNodes()) {
         list1.removeChild(list1.lastChild);
     }
     document.getElementById('person').style.display = "block";
 }
 
 function cleanone() {
    current = document.getElementById('person').disabled;
    if(current == true){
      document.getElementById('person').disabled = false;
    }
    else {
      document.getElementById('person').disabled= true;
    }
  };







 function add2(event) {

     if ((people2 < 4) && (window.event.keyCode == 13)) {
         var r2name = document.getElementById('persontwo').value;
         var ol = document.getElementById('list2');
         var li = document.createElement("li");
         var r2NameFinal = document.createTextNode(r2name);
         var r2TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");

         li.appendChild(r2NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r2TimeFinal);

         ol.appendChild(li);
         document.getElementById('persontwo').value = " ";
         people2++;
         
         //Push guest to array & add to guest list
         allpeople.push(r2name);
         console.log(allpeople);


     }else if (window.event.keyCode == 13) {
         var waitList2 = document.getElementById('persontwo').value;
         document.getElementById('persontwo').style.display = "none";
     }
    li.onclick = function() {
        this.parentNode.removeChild(this);
        people2 -= 1;
    //allows the input field to be shown when there is less than 4 guests
     document.getElementById('persontwo').style.display = "block";
    }
 }
 function cleantwo() {
    current = document.getElementById('persontwo').disabled;
    if(current == true){
      document.getElementById('persontwo').disabled = false;
    }
    else {
      document.getElementById('persontwo').disabled= true;
    }
  };






 function add3(event) {
     if ((people3 < 4) && (window.event.keyCode == 13)) {
         var r3Name = document.getElementById('personthree').value;
         var ol = document.getElementById("list3");
         var li = document.createElement("li");
         var r3NameFinal = document.createTextNode(r3Name);
         var r3TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");

         li.appendChild(r3NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r3TimeFinal);
         

         ol.appendChild(li);
         document.getElementById('personthree').value = " ";
         people3++;

         allpeople.push(r3Name);
         console.log(allpeople);

      
        }
            else if (window.event.keyCode == 13) {
                var waitList3 = document.getElementById('personthree').value;
                document.getElementById('personthree').style.display = "none";
            }

        li.onclick = function() {
            this.parentNode.removeChild(this);
            people3 -= 1;
            document.getElementById('personthree').style.display = "block";

        }
 }
 function cleanthree() {
    current = document.getElementById('personthree').disabled;
    if(current == true){
      document.getElementById('personthree').disabled = false;
    }
    else {
      document.getElementById('personthree').disabled= true;
    }
  };





 function add4(event) {

if ((people4 < 4) && (window.event.keyCode == 13)) {
     var r4Name = document.getElementById('personfour').value;
     var ol = document.getElementById("list4");
     var li = document.createElement("li");
     var r4NameFinal = document.createTextNode(r4Name);
     var r4TimeFinal = document.createTextNode("Checked in: " + utcDate);
     var createBreak = document.createElement("br");

     li.appendChild(r4NameFinal);
     li.appendChild(createBreak);
     li.appendChild(r4TimeFinal);

     ol.appendChild(li);
     document.getElementById('personfour').value = " ";
     people4++;

     //
     allpeople.push(r4Name);
     console.log(allpeople);

   
    } else if (window.event.keyCode == 13) {
        var waitList4 = document.getElementById('personfour').value;
        document.getElementById('personfour').style.display = "none";
    }
    li.onclick = function() {
        this.parentNode.removeChild(this);
        people1 -= 1;
        document.getElementById('personfour').style.display = "block";
    }
     
 }
 function cleanfour() {
    current = document.getElementById('personfour').disabled;
    if(current == true){
      document.getElementById('personfour').disabled = false;
    }
    else {
      document.getElementById('personfour').disabled= true;
    }
  };




 function add5(event) {

    if ((people5 < 4) && (window.event.keyCode == 13)) {
         var r5Name = document.getElementById('personfive').value;
         var ol = document.getElementById("list5");
         var li = document.createElement("li");
         var r5NameFinal = document.createTextNode(r5Name);
         var r5TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");
    
         li.appendChild(r5NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r5TimeFinal);
    
         ol.appendChild(li);
         document.getElementById('personfive').value = " ";
         people5++;
    
         //
         allpeople.push(r5Name);
         console.log(allpeople);
    
            
        } else if (window.event.keyCode == 13) {
            var waitList5 = document.getElementById('personfive').value;
            document.getElementById('personfive').style.display = "none";
        }
        li.onclick = function() {
            this.parentNode.removeChild(this);
            people5 -= 1;
            document.getElementById('personfive').style.display = "block";
        }
         
     }
     function cleanfive() {
        current = document.getElementById('personfive').disabled;
        if(current == true){
          document.getElementById('personfive').disabled = false;
        }
        else {
          document.getElementById('personfive').disabled= true;
        }
      };





     function add6(event) {

        if ((people6 < 4) && (window.event.keyCode == 13)) {
             var r6Name = document.getElementById('personsix').value;
             var ol = document.getElementById("list6");
             var li = document.createElement("li");
             var r6NameFinal = document.createTextNode(r6Name);
             var r6TimeFinal = document.createTextNode("Checked in: " + utcDate);
             var createBreak = document.createElement("br");
        
             li.appendChild(r6NameFinal);
             li.appendChild(createBreak);
             li.appendChild(r6TimeFinal);
        
             ol.appendChild(li);
             document.getElementById('personsix').value = " ";
             people6++;
        
             //
             allpeople.push(r6Name);
             console.log(allpeople);
        
                
            } else if (window.event.keyCode == 13) {
                var waitList6 = document.getElementById('personsix').value;
                document.getElementById('personsix').style.display = "none";
            }
            li.onclick = function() {
                this.parentNode.removeChild(this);
                people6 -= 1;
                document.getElementById('personsix').style.display = "block";
            }
             
         }

         function cleansix() {
            current = document.getElementById('personsix').disabled;
            if(current == true){
              document.getElementById('personsix').disabled = false;
            }
            else {
              document.getElementById('personsix').disabled= true;
            }
          };

 ////////////////// GUEST REPORT //////////////////////////
 function guestreport() {
    var gstrpt = allpeople.toString();
    
    localStorage.setItem("allthepeople", gstrpt);
    location.href = "hotelpage2.html";
  }
   