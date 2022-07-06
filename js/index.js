"use strict"

const employees=[];

function employee(ID, name,Department,Level,ImageURL,Salary){

    this.ID=ID;
    this.name=name;
    this.Department=Department;
    this.Level=Level;
    this.ImageURL=ImageURL;
    this.Salary = function(){
        if (this.Level==="senior"){
         this.Salary=Math.floor(Math.random() * 2000) + 1500;
         Salary=this.Salary
         return Salary;
        }
        else if(this.Level==="Mid-Senior"){
            this.Salary=Math.floor(Math.random() * 1500) + 1000; 
            Salary= this.Salary;
            return Salary;

        }
        else{
            this.Salary=Math.floor(Math.random() * 1000) + 500; 
            Salary=this.Salary;
            return Salary;
        }


    };


}

const employee1= new employee(1000,"GhaziSamer",["Administration"],"senior","../assests/images.png","");
const employee2= new employee(1001,"Lana Ali",["Finance"],"senior","../assests/images.png","");
const employee3= new employee(1002,"Tamara Ayoub",["Marketing"],"senior","../assests/images.png","");
const employee4= new employee(1003,"Safi Walid",["Administration"],"Mid-Senior","../assests/mids.png","");
const employee5= new employee(1004,"Omar Zaid",["Development"],"senior","../assests/images.png","");
const employee6= new employee(1005,"Rana Saleh",["Development"],"Junior","../assests/mids.png","");
const employee7= new employee(1006,"Hadi Ahmad",["Finance"],"Mid-Senior","../assests/images.png","");
console.log(employee1,employee2,employee3,employee4,employee5,employee6,employee7);



 




