$(document).ready(function () {

    $("#addQuestion").click(function (e) {
      var person = {
        id: 23,
        question: $("#question").val(),
        answers: {
          a: $("#option1").val(),
          b: $("#option2").val(),
          c: $("#option3").val(),
          d: $("#option4").val(),
        },
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
    $("#patch").click(function (e) {
      $.ajax({
        url: "http://localhost:3000/questions/3",
        type: "PATCH",
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
          alert("written");
        },
        data: JSON.stringify(person),
      });
    });
  });