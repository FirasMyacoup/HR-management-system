"use strict";

const allEmployees=[];
const workers= document.getElementById("workers")
let prenter;

function Employeeinfo(employeeID,fullname,department,level,imageURL){

    this.employeeID=employeeID;
    this.fullname=fullname;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    
   
    
    allEmployees.push(this);

}

  
Employeeinfo.prototype.salary=function(){

(this.level.toLowerCase()==="senior")?this.salary = getRndInteger(1500,2000):
(this.level.toLowerCase()==="mid senior")?this.salary = getRndInteger(1000,1500):
this.salary = getRndInteger(500,1000)

allEmployees.push(this.salary);

}


    
      
    Employeeinfo.prototype.netsalary=function(){

        this.netsalary=Math.floor(this.salary - (this.salary * 0.075));
        allEmployees.push(this.netsalary);

    }


    Employeeinfo.prototype.render= function(prenter){
    
        

        const Card=document.createElement("div");
        prenter.appendChild(Card);
        Card.className="employee card";

        const imgdiv=document.createElement("div");
        Card.appendChild(imgdiv);
        imgdiv.className="img-div";

        const yimg=document.createElement("img");
        imgdiv.appendChild(yimg);
        yimg.className="employee-img";
        yimg.src=this.imageURL;

        const infodiv= document.createElement("div");
        eCard.appendChild(infodiv);
        infodiv.className="info-div";
        const nameID=document.createElement("p");
        infodiv.appendChild(nameID);
        nameID.textContent=`${this.fullname}:${this.employeeID}`;

        const deplvl=document.createElement("p")
        infodiv.appendChild(deplvl);
        deplvl.textContent=`dep:${this.department}, lvl:${this.level}`;

        const esalary= document.createElement("p");
        infodiv.appendChild(esalary);
        esalary.textContent=`salary: ${this.salary}`;


}

function renderemployees(){

for(let i=0 ; i<allEmployees.length;i++){
    switcher=document.getElementById(`${allEmployees[i].department}cards`);
    allEmployees[i].render(prenter);
}
}
renderemployees();




const GhaziSamer = new Employeeinfo(1000,"GhaziSamer","Administration","senior","assests/Ghazi.jpg","");
const 	LanaAli = new Employeeinfo(1001,"LanaAli","Finance","senior","assests/Lana.jpg","");
const  TamaraAyoub= new Employeeinfo(1002,"TamaraAyoub","Marketing","senior","assests/Tamara.jpg","");
const  SafiWalid= new Employeeinfo(1003,"SafiWalid","Administration","Mid-Senior","assests/Safi.jpg","");
const OmarZaid = new Employeeinfo(1004,"OmarZaid","Development","senior","assests/Omar.jpg","");
const RanaSaleh = new Employeeinfo(1005,"RanaSaleh","Development","Junior","assests/Rana.jpg","");
const  HadiAhmad= new Employeeinfo(1006,"HadiAhmad","Finance","Mid-Senior","assests/Hadi.jpg","");

 

for( let i=0; i <  allEmployees.length; i++){
    if(typeof allEmployees[i]!=="number"){
        console.log(i,allEmployees[i]);


    allEmployees[i].salary();
    allEmployees[i].netsalary();
    allEmployees[i].render();
}
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}





const eContainer= document.createElement("div");
const Administration= document.createElement("div");
const Marketing= document.createElement("div");
const Development= document.createElement("div");
const Finance= document.createElement("div");
const AdministrationCards= document.createElement("div");
const MarketingCards= document.createElement("div");
const DevelopmentCards= document.createElement("div");
const FinanceCards= document.createElement("div");
document.body.appendChild(eContainer);
document.body.appendChild(Administration);
document.body.appendChild(Marketing);
document.body.appendChild(Development);
document.body.appendChild(Finance);
document.body.appendChild(AdministrationCards);
document.body.appendChild(MarketingCards);
document.body.appendChild(DevelopmentCards);
document.body.appendChild(FinanceCards);
Administration.className="cards";
Marketing.className="cards";
Development.className="cards";
Finance.className="cards";
eContainer.id="employee-container";
AdministrationCards.id="AdministrationCards";
MarketingCards.id="MarketingCards";
DevelopmentCards.id="DevelopmentCards";
FinanceCards.id="FinanceCards";

const Administrationhead=document.createElement("h3");
const Marketinghead=document.createElement("h3");
const Financehead=document.createElement("h3");
const Developmenthead=document.createElement("h3");
Administration.appendChild(Administrationhead);
Marketing.appendChild(Marketinghead);
Development.appendChild(Developmenthead);
Finance.appendChild(Financehead);

Administrationhead.textContent="Administration";
Marketinghead.textContent="Marketing";
Developmenthead.textContent="Development"
Financehead.textContent="Finance";





























 




