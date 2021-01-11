$(document).ready(function () {

    $("#addQuestion").click(function (e) {
      var person = {
        question: $("#question").val(),
          a: $("#option1").val(),
          b: $("#option2").val(),
          c: $("#option3").val(),
          d: $("#option4").val(),
        correctAnswer: $("#correct").val(),
        imageurl:$("#customFile").val(),
      };
      console.log("adding")
      $.ajax({
        url: "http://localhost:3000/questions/",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
          alert("Question Added Successfully!!!");
          
        },
        data: JSON.stringify(person),
      });
      e.preventDefault();
    });
  });