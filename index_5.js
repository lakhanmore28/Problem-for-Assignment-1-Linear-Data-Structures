//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it?.


function toh(n,src,des,aux)
{
if(n>=1)  
{
    toh(n-1,src,aux,des);
    console.log("Move disk from tower ",src,"to tower",des);
    toh(n-1,src,des,aux);
}
return;


}
    toh(4,"A","B","C");

console.log(toh(2,"A","B","C"));