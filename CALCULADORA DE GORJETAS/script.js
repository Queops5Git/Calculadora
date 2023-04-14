function calculateTip(event) {
    event.preventDefault();
    var bill = document.getElementById('bill').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var numOfpeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0 ){
        alert("Por Favor, Preencha os valores");
        return;
    }/*Validador se os valores forma Preenchidos*/

    if(numOfpeople == '' | numOfpeople <= 1){
        numOfpeople = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }/*Validador se a Gorjeta sera Aplicada para mais de uma pessoa ou Nao*/
    
    let total = (bill * serviceQual) / numOfpeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display="block";
}

document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);