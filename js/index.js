"use strict"

const employees=[];

function employeeinfo(ID, name,Department,Level,ImageURL){

    this.ID=ID;
    this.name=name;
    this.Department=Department;
    this.Level=Level;
    this.ImageURL=ImageURL;
    employees.push(this)

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min+1) ) + min;
}
  
employeeinfo.prototype.Salary=function(){
    
        if ((this.Level)==="senior"){
         this.Salary=getRndInteger(1500,2000)
         employees.push(this.Salary)
         
        }
        else if(this.Level ==="Mid-Senior"){
            this.Salary=getRndInteger(1000,1500)
            employees.push(this.Salary)
            

        }
        else{
            this.Salary=getRndInteger(500,1000)
            
            employees.push(this.Salary)
            
        }
        


    }
    employeeinfo.prototype.netsalary=function(){

        this.netsalary=Math.floor(this.Salary-(this.Salary * 0.075));
        employees.push(this.netsalary);

    }


    employeeinfo.prototype.printing = function(){
        document.write(`<p> <br> fullname: ${this.name}: first salary: ${this.Salary} : net salary = ${this.netsalary}</p>`)

}


const GhaziSamer = new employeeinfo(1000,"GhaziSamer","Administration","Senior","img","");
const 	LanaAli = new employeeinfo(1001,"LanaAli","Finance","Senior","img","");
const  TamaraAyoub= new employeeinfo(1002,"TamaraAyoub","Marketing","Senior","img","");
const  SafiWalid= new employeeinfo(1003,"SafiWalid","Administration","Mid-Senior","img","");
const OmarZaid = new employeeinfo(1004,"OmarZaid","Development","Senior","img","");
const RanaSaleh = new employeeinfo(1005,"RanaSaleh","Development","Junior","img","");
const  HadiAhmad= new employeeinfo(1006,"HadiAhmad","Finance","Mid-Senior","img","");

console.log(employees);

for( let i=0; i<=employees.length;i++){

    employees[i].Salary();
    employees[i].netsalary();
    employees[i].printing();
}




 




