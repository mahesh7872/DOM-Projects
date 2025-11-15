// Function and Array Practice Question
// Q1. Write a BMI Calcuter Function

    function BMI(weight, height){
      //wt. in KG , height in feet  
        let x = (Math.floor(weight/height)) ;
        console.log (x);
    }
    BMI(56,5.5);

//Q2. Create a greet function with default name 
    function greet(name){
        console.log(` Hello..! ${name} `);
    }
    greet('Maheshwar');

//Q3. sum all numbers using rest operator
    function sum(...val){
        return nums.reduce((acc, val) => acc + val, 0);
    }
    let nums = [1,2,3]
    console.log(sum('nums'));
    
//Q4. Create a counter function with closure
    function outer(){
        counter = 0;

        return function inner(){
            counter++;
            console.log(counter);
            
        };
    }
    let closure = outer();
    closure(); closure(); closure();
    console.log("Question 4 answer");

//Q5. Write a function to return another function
//Q6. Use a function to log even numbers in array
    function even(nums){
        for (let i=0; i <= nums.length; i++){
            if([i]%2 === 0){
            console.log(nums[i]); }
            }}
    let numbers = [1,2,3,4,5,6];
    even(numbers);
    
    

