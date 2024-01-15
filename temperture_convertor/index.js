

function Convert(){

    let a = document.querySelector('#input').value;
    let b = parseInt(a);
    let got_value = (document.getElementById("select1")).value;
    let to_convert = (document.getElementById("select_2")).value;
    let ans;



    console.log(a);
    console.log(b);
    console.log(got_value);
    console.log(to_convert);

switch(got_value){
    case 'C':
        if(to_convert=='C'){
            ans = b;
        }
        else if(to_convert=='K'){
            ans = b + 273;
        }
        else{
            ans = ((b*9)/5)+32;
        }
        break;
    
    case 'K':
        if(to_convert=='C'){
            ans = b - 273;
        }
        else if(to_convert=='K'){
            ans = b;
        }
        else{
            b = b - 273;
            ans = ((b*9)/5)+32;
        }
        break;

    case 'F':
        if(to_convert=='C'){
            ans = ((b-32)*5)/9;
        }
        else if(to_convert=='K'){
            b = ((b-32)*5)/9;
            ans  = b + 273;
        }
        else{
            ans = b;
        }
        break;
}

console.log(ans);

document.getElementById('output').innerHTML = ans + to_convert;

}
