$(document).ready(function(){
    for(var i=1;i<=20;i++){
      $('#c'+i).hide();
    }
  var arr = [
                  "accompaniment","archeologist","authenticate","camouflage","circumference",
                  "compromise","correspondence","exaggeration","handkerchief","outrageous",
                  "perseverance","personification","phenomenon","philanthropist","predecessor",
                  "psychiatrist","questionnaire","scandalized","scavenger","sophomore"
                ];
  var soal=[];
  var s=["dd"];
  var m=0;
  $("#submit").click(function(){
    for(var i=1;i<=20;i++){
      if ($('#e'+i).is(':checked')) { soal.push(i);}
    }
    $("#intro").hide();
    for(var i=0;i<soal.length;i++){
      var m=Math.floor((Math.random() * 100) + 1)%soal.length;
      var n=Math.floor((Math.random() * 100) + 1)%soal.length;
      var temp = soal[m];
      soal[m] = soal[n];
      soal[n] = temp;
    }
    $('#c'+soal[0]).show();
  });
  var total=0;
      

  for(var i=1;i<=20;i++){
      $("#submits"+i).click(function(){
        if(arr[soal[m]-1]==$('#j'+soal[m]).val()){
          total++;
          $("ul").append("<li class='list-group-item'>"+(m+1)+". correct</li>");
        }
        else{
          $("ul").append("<li class='list-group-item'>"+(m+1)+". wrong</li>");
        }
        m++;
        if(m!=soal.length){
          $('#c'+soal[m-1]).hide();
          $('#c'+soal[m]).show();
        }
        else{
          $('#c'+soal[m-1]).hide();
          $('#score').append("<h1 align='center'>SCORE:<br>"+(total/soal.length)*100+"</h1>");
         
        }
      });
  }
  
});