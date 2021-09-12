              // first splash screen
              
const splashScreen = document.querySelector('#splash');
const progressIndicator = document.querySelector('.indicator');
const app = document.querySelector('#app');
let unit = 0;


let interval = setInterval(function (){
    progressIndicator.style.width = `${ unit += 80}%`;
    if (unit >= 100) {
        clearInterval(interval);
        splashScreen.style.display = 'none';
         app.style.opacity = 1;
         
        }
    }, 1500);
    
    
    
    
    
    
const createAcctForm =   document.querySelector('#CreateAcctForm');
const nav = document.querySelector('#nav');
const main = document.querySelector('#main');
const image = document.querySelector('.image');

               /* create
               section   */

function createAcctBtn(){
    CreateAcctForm.style.display="block";
    main.style.visibility="hidden";
    nav.style.opacity="1";
    balance.style.visibility="hidden";
    image.style.visibility="hidden";
    
}
let balance = document.getElementById('balance');
let button = document.getElementById('closebtn');

function closeBtn(){ 
        CreateAcctForm.style.display="none";
        main.style.visibility="visible";
        balance.style.visibility="visible";
        image.style.visibility="visible";

}
/* deposite/ Transfer
                    section   */
const transferAcctForm =   document.querySelector('#transferAcctForm');

function depositeMoney (){
    transferAcctForm.style.display="block";
    main.style.opacity="0";
    nav.style.opacity="1";
}
               /* withdraw
                    section   */



const fname = document.querySelector('#Fname')
const acctNum = document.querySelector('#acctNum')
const amount = document.querySelector('#amount')
const transType = document.querySelector('#transType')
let transDate = document.querySelector('#transDate');
const remark = document.querySelector('#remark')



transDate = new Date()
const table = document.getElementById('table');

const transactionsbtn = document.getElementById('transactionsbtn');


transactionsbtn.addEventListener('click', () =>{
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    if(fname.value === '' ){
        fname.style.border='1px solid red';
        table.removeChild(tableRow);
    }else if(acctNum.value===''){
        acctNum.style.border='1px solid red';
        table.removeChild(tableRow);
    }else if(amount.value===''){
        amount.style.border='1px solid red';
        table.removeChild(tableRow);
    }else if( remark.value===''){
        remark.style.border='1px solid red';
        table.removeChild(tableRow);
    }else if(transType.value===''){
        transType.style.border='1px solid red';
        table.removeChild(tableRow);
    } else{
    tableRow.innerHTML=`
                        <td>${fname.value}</td>       
                        <td>${acctNum.value}</td>       
                        <td>$${amount.value}</td>       
                        <td>${transType.value}</td>       
                        <td>${transDate}</td>       
                        <td>${remark.value}</td>`
    alert(`Yu have just ${transType.value} $${amount.value}.Thanks for banking with us.`)
    transferAcctForm.style.display="none";
    main.style.opacity="1";

    fname.value='';
    acctNum.value='';
    amount.value='';
    transType.value='';
    remark.value='';
    }
} )
const customer = document.querySelector('#customer-care');
const logo = document.querySelector('#logo');


function customerCare (){
    customer.style.display="block";
    main.style.opacity="0";
  
 }

// const backbtn = document.querySelector('#backbtn');

 function backbtn(){
    CreateAcctForm.style.display="none";
    transferAcctForm.style.display="none";
    customer.style.display="none";
    main.style.opacity="1";
    nav.style.opacity="1";
    nav.style.height="auto";
    balance.style.visibility="visible";
    image.style.visibility="visible";
};






