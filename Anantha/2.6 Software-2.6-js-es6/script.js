console.log("JS ES6");

function solveQuadraticEquation(){
    var roots = [];
    var discriminant = false;
    var qe = {};

    var a = 0;
    var b = 0;
    var c = 0;
    var setValueOfabc = function (_a,_b,_c)  {
        a = _a;
        b = _b;
        c = _c;
        findRoots(); 
    };
    var findRoots = function () {
        let root1 = 0;
        let root2 = 0;
        let d = [(b**2) - (4 * a * c)];
        if(a != 0 && d > 0){
            root1 = [(-b/(2 * a)) + (((d)**0.5) / (2 * a))];
            root2 = [(-b/(2 * a)) - (((d)**0.5) / (2 * a))];
            discriminant = true;
        }
        else if(a != 0 && d == 0){
            discriminant = true;
        }
        else{
            discriminant = false;
        }
        roots.push(root1);
        roots.push(root2);    
        qe["roots"] = roots.flat();
        qe["discriminant"] = d;
        qe["discriminantIsPositiveOrEqualToZero"] = discriminant;
    }
    return{
        SetValueOfabc1 : setValueOfabc,
        RootsOfQuadraticEquation : qe,
        Discriminant : discriminant
    }
}

const GetRoots = (() => {
   

    function findRoots(){
        let a=0,b=0,c=0;
        let solveQE = new solveQuadraticEquation();
        const aVal = document.getElementById("valueOfa").value;
        if(aVal != "")
        {
             a = parseInt(aVal);
             b = parseInt(document.getElementById("valueOfb").value);
             c = parseInt(document.getElementById("valueOfc").value);
             
             solveQE.SetValueOfabc1(a,b,c);
        }
        const roots = solveQE.RootsOfQuadraticEquation;
        if(roots.discriminant)
        {
            if(roots.roots.length > 0)
            {
                document.getElementById("result").innerText =  roots.roots[0] + " & " + roots.roots[1];
            }
            else if(roots.roots.length == 0)
            {
                document.getElementById("result").innerText = "zero is the repeated roots for the quadratic equation."; 
            }
            else
            {
                document.getElementById("result").innerText = "Qudratic equation has no real roots.";
            }
        }
    }
    document.getElementById("btnGetRoots").addEventListener("click",findRoots);
})();

