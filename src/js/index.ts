let InputData: HTMLInputElement = <HTMLInputElement>document.getElementById("InputData");
let ToGramsButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ToGramsButton");

let Output: HTMLSpanElement = <HTMLSpanElement>document.getElementById("output");


function ConvertToGrams(): void
{
    let number1string: string = InputData.value;
    let number1number = Number(number1string);
    let result : number = number1number * 28.3495231;
    Output.innerHTML = result.toString()
}


ToGramsButton.addEventListener("click", ConvertToGrams);

function ConvertToOz(): void{
    let number1string: string = InputData.value;
    let number1number = Number(number1string);
    let result : number = number1number * 0.0352739619;
    Output.innerHTML = result.toString()
}

let ToOzButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ToOzButton");
 ToOzButton.addEventListener("click", ConvertToOz);

