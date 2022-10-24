1. 3 is printed. i is declared with the keyword i, so it has scope even outside the bloc where it was declared, which is the for loop. Since prices is an array with length 3, the for loop runs for the last time when i = 2, and when it is incremented again to 3, it is no longer les than prices.length, so it exits the for loop. Then i, which is 3 is printed.
2. 150 is printed. Discounted is last changed in the third iteration of the for loop, where i = 2, prices[i] = 300, discount = 0.5. It is changed to 300*(1-0.5)=300*0.5=150
3. 150 is printed. 150*100 gives us 15000, which is already an integer so Math.round will output 15000. Then, 15000/100 will give 150.
4. The program returns an array of size 3, that takes the input [100, 200, 300], applies the discount 0.5 and outputs the discounted prices as [50, 100, 150], which is the input values after discount in the same order. So, the first element outputted 50 is the first input 100 after 50% discount and so on.
5. The line returns an error. The let keyword provides i with block scope and in line 12, we are trying to access the variable outside the block it is defined in, so it returns an error. Its block scope is within the for loop
6. The line returns an error. The let keyword provides discountedPrice with block scope and in line 13, we are trying to access the variable outside the block it is defined in, so it returns an error. Its block scope is within the for loop.
7. 150 is printed. The variable is declared with the keyword let in the function discountPrices, its block scope is the entire function discountPrices. SO, it takes in all the updates that are made and Math.round(150*100)/100 gives us 150 from the third iteration of the for loop.
8. The program returns an array of size 3, that takes the input [100, 200, 300], applies the discount 0.5 and outputs the discounted prices as [50, 100, 150], which is the input values after discount in the same order. So, the first element outputted 50 is the first input 100 after 50% discount and so on. Discounted has the block scope of the function, so the return value won't create any errors in output.
9. There is an error. i is declared in the for loop with keyword let, so it has block scope of the for loop it is declared in. We are attempting to access i outside the scope, so there is an error.
10. 3 is printed. length is the length of the array [100, 200, 300] which is 3. It is declared as a const and the value is not changed so there is no error.
11. The program returns an array of size 3, that takes the input [100, 200, 300], applies the discount 0.5 and outputs the discounted prices as [50, 100, 150], which is the input values after discount in the same order. So, the first element outputted 50 is the first input 100 after 50% discount and so on. discounted is a const, and throughout it points to the same thing, so changing what that address contains does not matter, so no errors will be received.
12. A - student.name;
    B - student["Grad Year"];
    C - student.greeting();
    D - student["Favorite Teacher"].name;
    E - student.courseLoad[0];
13. A - '32'
    B - 1
    C - 3
    D - '3null'
    E - 4
    F - 0
    G - '3undefined'
    H - nan
14. A - true
    B - false
    C - true
    D - false
    E - false
    F - true
15. '==' compares two values and checks whether they are equal or not. '===' compares whether two values are equal and have the same data type or not.
17. [2, 4, 6]. We iterate through the input array [1, 2, 3] element by element. For each element, we call doSomething function on it that multiplies the value by 2. Leaving us with the output array newArr. This array was an empty array that has the outputs of doSomething(1), doSomething(2), doSomething(3) in it, so we get [2, 4, 6].
19. 1
    4
    3
    2
