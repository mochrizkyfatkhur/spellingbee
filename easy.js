$(document).ready(function(){
    for(var i=1;i<=20;i++){
      $('#c'+i).hide();
    }
  var arr = [
                  "busy","chicken","cook","river","determine",
                  "chimney","disappear","enjoyment","flies","foot",
                  "forecast","handsome","inside","life","message",
                  "noise","people","perhaps","shelter","touch"
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
      
  for(var j=1;j<=20;j++){
      $("#hint"+j).click(function(){
        var dummy="";
        for (var i=0;i<arr[soal[j-21]-1].length;i++){
          if(i==0){ 
            dummy+=arr[soal[j-21]-1].substring(0, 1);
          }
          else if(i==arr[soal[j-21]-1].length-1){ 
            dummy+=arr[soal[j-21]-1].substring(arr[soal[j-21]-1].length-1, arr[soal[j-21]-1].length);
          }
          else{
            dummy+="_";
          }
          
          //alert(dummy);
        }
        $('#j'+soal[j-21]).val(dummy);
      });
  }
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