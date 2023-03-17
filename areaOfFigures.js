function areaOfFigures(input) {
    let figure = input[0];
    let result = 0;

    if (figure === "square") {
        let num = Number(input[1]);
        result = num * num;
    } else if (figure === "rectangle") {
        let num1 = Number(input[1]);
        let num2 = Number(input[2]);
        result = num1 * num2;
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        result = Math.PI * radius * radius;

    } else if (figure === "triangle") {
        let num1 = Number(input[1]);
        let num2 = Number(input[2]);
        result = (num1 * num2) / 2;
    }

    console.log(result.toFixed(3));
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);