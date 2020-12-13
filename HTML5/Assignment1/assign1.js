function reffer()
{
  var a=document.getElementById("prize").value;
  var c=document.getElementById("code").value;
  if(parseInt(a)>=2000 && c=="offer123")
  {
    document.getElementById("final").value=1200;
  }
  else
  {
    document.getElementById("final").value=document.getElementById("prize").value;
  }
}
