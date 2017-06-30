<script>

    document.getElementById("form1").onsubmit=function() {
         happyGender = parseFloat(document.querySelector('input[name = "happyGender"]:checked').value);
         happyAge = parseFloat(document.getElementById("happyAge").value);
         happyRelationship = parseFloat(document.getElementById("happyRelationship").value);
         happyEthnicity = parseFloat(document.getElementById("happyEthnicity").value);
         happyReligion = parseFloat(document.getElementById("happyReligion").value);
         happySex = parseFloat(document.getElementById("happySex").value);
         happyDisability = parseFloat(document.querySelector('input[name = "happyDisability"]:checked').value);

            result = (happyGender + happyAge + happyRelationship + happyEthnicity + happyReligion + happySex + happyDisability) / 7;

                 document.getElementById("grade").innerHTML = parseFloat(result).toFixed(2);

                      return false;
          }

  </script>
