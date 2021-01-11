$(document).ready(function(e){
    var a;
     $(".btn").on('click',function(){
        $button=$(this);
        targetid=$button.data('content');
        $("#addQuestion").attr('data-content',targetid);
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
                     $("#option4").val(data[i].d);
                     $("#correct").val(data[i].correctAnswer);
                     console.log("a:"+a);
                 }
             }
         } 
     });
    });
 $("#addQuestion").click(function (e) {
     $button=$(this);
     var a=$button.data('content');
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
       url: "http://localhost:3000/questions/"+a,
       type: "PATCH",
       dataType: "json",
       contentType: "application/json",
       success: function (data) {
         alert("Data Updated Successfully!!!");
       },
       data: JSON.stringify(patch),
     });
   });
 });