<script>

    document.getElementById("form1").onsubmit=function() {
         happyGender = parseInt(document.querySelector('input[name = "happyGender"]:checked').value);
         happyAge = parseInt(document.getElementById("happyAge").value);
         happyRelationship = parseInt(document.getElementById("happyRelationship").value);
         happyEthnicity = parseInt(document.getElementById("happyEthnicity").value);
         happyReligion = parseInt(document.getElementById("happyReligion").value);
         happySex = parseInt(document.getElementById("happySex").value);
         happyDisability = parseInt(document.querySelector('input[name = "happyDisability"]:checked').value);

            result = (happyGender + happyAge + happyRelationship + happyEthnicity + happyReligion + happySex + happyDisability) / 7;

                 document.getElementById("grade").innerHTML = result;

                      return false;
          }

</script>
