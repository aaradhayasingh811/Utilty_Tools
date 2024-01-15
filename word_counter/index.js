function lower(){
    let a = document.getElementById('input').value ;
    let b = a.toLowerCase();
    // console.log(b);
    document.getElementById("output").innerHTML=b;
    
}


function upper(){
    let a = document.getElementById('input').value ;
    let b = a.toUpperCase();
    // console.log(b);
    document.getElementById("output").innerHTML=b;
}

function tilt(){
    let str = document.getElementById('input').value ;
  let titleCase = "";
    str.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
  });
  document.getElementById("output").innerHTML=titleCase;
}

function deletef(){
  var x = document.getElementById("input").value;
  document.getElementById("input").innerHTML=null;
  document.getElementById("output").innerHTML=null;
  document.getElementById('summ').setAttribute('class','summ');
  document.getElementById('p').innerHTML=null;

}

function work(){
  var x = document.getElementById("input").value;
  // 12 words and 21 characters
  // console.log(x.split(' ').length + " words " + x.length + " characters ");
  document.getElementById('summ').setAttribute('class','hell');
  document.getElementById('p').innerHTML = x.split(' ').length + " words " + x.length + " characters ";
}