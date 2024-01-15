function Calculate(){
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;

    let k = h*h;
    let l = k/10000;
    let ans = w/l;
    let ullu = parseInt(ans);

    document.getElementById('output').innerHTML = ullu + " is your BMI index";
}