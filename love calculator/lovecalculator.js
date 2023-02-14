window.onload = function(){
   let button = document.getElementById('calculate');
   button.addEventListener('click', calculatelove);

}

function calculatelove(){
    let yourName = document.getElementById('your-name').value;
    let crushName = document.getElementById('crush-name').value;

    if(yourName !='' && crushName !=''){
        let resultpercentage = Math.floor(Math.random() * 100 + 1);
        document.getElementById('resultmassage').innerText = yourName  +  ' and '  +  crushName + ' chances of love is :';
        document.getElementById('resultpercentage').innerText = resultpercentage.toString() + '%';
        document.getElementById('resultmassage2').innerText = yourName  +  ' and '  +  crushName + ' And it will end in premium TEARS';


    }
}