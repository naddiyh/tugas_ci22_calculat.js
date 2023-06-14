// arrow function

const operation = (x,y) => {
    const sum = x+y
    const substraction = x-y
    const multiplication = x*y
    const division = x / y

    const max = Math.max(sum,substraction,multiplication,division)
    let maxOperat;
    if (max===sum){
        maxOperat = "addition"
    } else if (max===substraction){
        maxOperat = "substraction"
    } else if (max === multiplication){
        maxOperat = "multiplication"
    } else {(max ===division)
        maxOperat = "division"
    }
    console.log (`${x} + ${y} =`, x+y)
    console.log (`${x} - ${y} =`, x-y)
    console.log (`${x} x ${y} =`, x*y)
    console.log (`${x} / ${y} =`, x/y)
    console.log ("The Largest Operation Result is",maxOperat)
}
operation(4,2)
