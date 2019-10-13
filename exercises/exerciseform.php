

 <!DOCTYPE html>
 <html>
 <head>
 <title>Fahrenheit/Celsius Converter</title>
 <!--set some style properties::: -->
<style>

@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap');

body {
  background-color: #d69da9;
  font-family: 'PT Sans Narrow', sans-serif;
}


div {
  box-shadow: 5px 10px 10px 10px grey;
  background-color: #f3e0db;
  width: 35%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 10px;
}

.formContainer {
  margin-top: 40px;
  /*top: 40px;*/
}

#buttonS {
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 16px;
}

fieldset {
  border: none;
}

#response {
  margin-top: 50px;
}

</style>


 </head>
 <body>


 <div class= "formContainer">
 <!--form -->
 <!-- You need an action att and a method att within the form tag -->



 <form action "exerciseform.php" method="post">
 <!-- group the related elements in a form -->
 <h2> Fahrenheit/Celsius Converter </h2>
 <fieldset>
  <p><label>Name: </label><input type="text" size="40" maxlength = "40" name = "a_name" required> </p>
 <p><label>Email: </label> <input type ="email" size="40" maxlength = "40" name = 'a_email' required/></p>

 </fieldset>

 <fieldset>
   <!-- ONLY number entries  -->
   <p><label>Temperature Input: </label><input type="number" size="5" maxlength = "5" name = "a_temp" required> </p>
   <p><input type="radio" name="tempChoice" value="Celsius"> Convert to Celsius<br>
   <input type="radio" name="tempChoice" value="Fahrenheit"> Convert to Fahrenheit<br></p>
   </fieldset>

 <!-- submit button  -->
  <p><input type = "submit" name = "submit" value = "Submit and Convert" id =buttonS /></p>
 </form>
 </div>
 </body>
 </html>

 <?php
 if($_SERVER['REQUEST_METHOD'] == 'POST')
 {
   //logs the values in array (is to help ... )
   // var_dump($_POST);

   /* Step 1:
   Get the temperature value (a_temp): is a string so we need to
   convert to a number using the in built function intval()
   */
   $tempNum = intval($_POST['a_temp']);
   $name = $_POST['a_name'];
   $tempName = $_POST['tempChoice'];
   $email = $_POST['a_email'];


   /* Step 2:
   Get the radio button choice (tempChoice) and then create a variable to hold the converted value::
   PLEASE USE THE FORMULA BELOW TO WRITE THE CONVERSION ALGORITHM - DO NOT USE ANY LIBRARY ETC
   To convert from Fahrenheit to Celsius: Celsius = (5 / 9) * (Fahrenheit – 32)
   To convert from Celsius to Fahrenheit: Fahrenheit = (9 / 5) * Celsius + 32
 */

 if ($tempName == "Celsius"){
   $convertedTemp = (5/9)*($tempNum - 32);
 }

 if ($tempName == "Fahrenheit"){
   $convertedTemp = (9/5)*($tempNum + 32);
 }


   /* Step 3: using the echo() - display a custom message i.e. Dear ... to notify the user that
   they will get an email eventually with the results (please style the output) -
   and within the message you must include the person's name and email).*/


   echo("<div id='response'><h3>".$convertedTemp." ".$tempName."</h3>");
   echo("<p> Dear ".$name.", you will receive an email at ".$email." with the desired temperature.</p></div>");


 }
  ?>
