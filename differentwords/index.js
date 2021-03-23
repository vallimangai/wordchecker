function getInputValue(){
    // Selecting the input element and get its value 
    var txt1 = document.getElementById("txtarea1").value;
    var txt2 = document.getElementById("txtarea2").value;
    // Displaying the value
    // alert(txt1);
    //alert(txt2);
    text='';
    txt2.split('').forEach(function(val,i){
        console.log(val);
        if(val!=txt1.charAt(i))
            text+="<span class='highlight'>"+val+"</span>";  
        else
              text += val;
    });
    document.getElementById("demo").innerHTML=text;
}
