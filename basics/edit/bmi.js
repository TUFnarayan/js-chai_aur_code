const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseFloat(document.querySelector('#txt').value)
    const weight=parseFloat(document.querySelector('#txt2').value)
    const result=document.querySelector(".result");
    if(height<0||isNaN(height)||height===''){
        result.innerHTML="enter valid input";
    }
  else if(weight<0||isNaN(weight)||weight===''){
        result.innerHTML="enter valid input";
    }
   else{
    const bmi=weight/(height*height);
    result.innerHTML=`BMI is ${bmi.toFixed(2)}`;
   }
   
})