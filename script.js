function showInputs(){
    let inputs  = document.getElementById('inputs');
    let task = Number(document.getElementById('task').value);
    inputs.innerHTML = " "
    switch(task){
        case 5:
            inputs.innerHTML = `<label for="months">Ilość miesięcy (X):</label>
            <input type="number" id="months" placeholder="np. 12">
            <label for="savings">Kwota oszczędności (Y):</label>
            <input type="number" id="savings" placeholder="np. 100">`
        break;
    }

}
function calculate(){
    let task = Number(document.getElementById('task').value);
    let output = document.getElementById('result');
    output.innerText = '';
    let suma = 0;
    switch(task){
        case 1:
            let numb = 0;
            for(let i = 1; i <= 10; i++){
                numb++
                output.innerText += " "+ numb + ' ';
            }
            
            //Та ну его
            // let i = 0;
            // while (i <= 10) {
            //     output.innerText += i;
            //     i++
            // }
        break;
        
        case 2:
            for(let i = 20; i <= 10; i-- ){
                output.innerText += " "+ i + ' ';
            }
        break;

        case 3:
            for(let i = 0; i < 11; i++){
                suma += i;
                output.innerText = suma;
            }
        break;
        
        case 4:
            let calkowite = 0;
            for(let i = 0; i <= 10; i++){
                calkowite += 2;
                output.innerText += " "+ calkowite + " ";
            }
        case 5:
            let months  = Number(document.getElementById("months").value);
            let savings  = Number(document.getElementById("savings").value);
            let cash = 0;
            savings = savings / 100 * 8;
            console.log(savings)
            for(let i =  1; i <= months; i++){
                cash += savings;
            }
            output.innerText = cash;
            break;
        
        case 6:
            let ciagLiczb = 5;
            let sumaCiagu;
            for(let i = 0; i <= 100; i++){
                sumaCiagu = ciagLiczb *= 10;
                output.innerText = sumaCiagu;
            }
        break;
        case 7:
            let celglaNum = 0;
            for(let i = 1; i <= 10; i++){
                celglaNum += 10;
                output.innerText = celglaNum;

            }
        break;
    }

}