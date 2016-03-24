$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person").val();

    $(".person").text(person1Input.toUpperCase());


    $("#letter").show();
    event.preventDefault();


  });
});
