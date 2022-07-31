    x = 5
    y = 2
    operador = "+"
    res = 0
    resto = 0

    if (operador==="+")
    {
        res = (x+y)
        console.log("O resultado da operação será "+x+" + "+y+" = "+res)
    }
    if (operador==="-")
    {
        res = (x-y)
        console.log("O resultado da operação será "+x+" - "+y+" = "+res)
    }
    if (operador==="*")
    {
        res = (x*y)
        console.log("O resultado da operação será "+x+" * "+y+" = "+res)
    }
    if (operador==="/")
    {
        res = (x/y)
        resto = (x%y)
        console.log("O resultado da operação será "+x+" / "+y+" = "+res+"<br> E o resto será "+resto)
    }