function  Get() {
    // Get the input values
    var name = document.getElementById("name").value;
    var dob = new Date(document.getElementById("dob").value);

    // Calculate age
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--; }

   // Display the result
    document.getElementById("result").textContent = name + ", you are " + age + " years old.";
   }
 


