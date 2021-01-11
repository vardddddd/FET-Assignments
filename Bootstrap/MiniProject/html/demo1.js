$(document).ready(function(e){
   var a;
    $(".btn").on('click',function(){
       $button=$(this);
       targetid=$button.data('content');
       console.log("in button"+targetid);
       a=targetid;
       $.ajax({
        url:"http://localhost:3000/questions/",
        type:"GET",
        dataType:"json",
        success:function(data){
            for(var i=0;i<data.length;i++)
            {
                if(data[i].id==targetid)
                {
                    $("#question").val(data[i].question);
                    $("#option1").val(data[i].a);
                    $("#option2").val(data[i].b);
                    $("#option3").val(data[i].c);
                    $("#correct").val(data[i].correctAnswer);
                    console.log("a:"+a);
                }
            }
        } 
    });
   });
$("#addQuestion").click(function (e) {
    var patch = {
      //id:1,
      question: $("#question").val(),
        a: $("#option1").val(),
        b: $("#option2").val(),
        c: $("#option3").val(),
        d: $("#option4").val(),
      correctAnswer: $("#correct").val(),
    };
    console.log("a="+a);
    console.log("Updating")
    $.ajax({
      url: "http://localhost:3000/questions/1",
      type: "PATCH",
      dataType: "json",
      contentType: "application/json",
      success: function (data) {
        alert("written");
        alert(data)
      },
      data: JSON.stringify(patch),
    });
  });
});
