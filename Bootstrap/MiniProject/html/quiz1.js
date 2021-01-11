$(document).ready(function(){
    $('#btn').click(function(){
        $.ajax({
            url:"http://localhost:3000/questions/",
            type:"GET",
            dataType:"json",
            
        });
    });
});