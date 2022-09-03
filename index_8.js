// Q8. Write a program to check if all the brackets are closed in a given code snippet.?//

    function isBalanced(exp){
    
    let flag = true
        
    let count = 0


    for(let i=0;i<exp.length;i++){
        if (exp[i] == '(')
            count += 1
        else
            
            count -= 1

        if (count < 0){

                    flag = false
            break
        }
    }

    if (count != 0)
        flag = false

    return flag
    }

   
    let exp1 = "((()))()()"

    if (isBalanced(exp1))
    document.write("Balanced","</br>")
    else
    document.write("Not Balanced","</br>")

    let exp2 = "())((())"

    if (isBalanced(exp2))
    document.write("Balanced","</br>")
    else
    document.write("Not Balanced","</br>")
  
    console.log((isBalanced(exp1)),(isBalanced(exp2)));
