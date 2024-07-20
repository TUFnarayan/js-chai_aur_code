// const form=document.querySelector('form');
// form.addEventListener('submit',function(e){

//     e.preventDefault();
//     const height=parseFloat(document.querySelector('#txt').value);
//     const weight=parseFloat(document.querySelector('#txt2').value);
//     const result=document.querySelector(".result");
//     if(height<0||isNaN(height)||height===''){
//         result.innerHTML="enter valid input";
//     }
//   else if(weight<0||isNaN(weight)||weight===''){
//         result.innerHTML="enter valid input";
//     }
//    else{
//     const bmi=weight/(height*height);
//     if(bmi<18){
//     result.innerHTML=`BMI is ${bmi.toFixed(2)} underweight`;
//    }
//    else if(bmi>18||bmi<24){ 
//     result.innerHTML=`BMI is ${bmi.toFixed(2)} normal weight`;

//    }
//    else{
//     result.innerHTML=`BMI is ${bmi.toFixed(2)} overweight`;
//    }

//    }
// }
// )
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    //usually form after submitting gives/takes info to server and refreshes webpage,but we want to apply our javascript program after submitting which will not happen, so we will use preventdefault() so  that we can apply our js func
    e.preventDefault();

    // .value gives value in string,so we use parse float to convert it into float
    const height = parseFloat(document.querySelector('#txt').value);
    const weight = parseFloat(document.querySelector('#txt2').value);
    const result = document.querySelector(".result");
    const animatedBg = document.querySelector(".animated-bg");
    const audio = document.querySelector("audio");

    if (height <= 0 || isNaN(height)) {
        result.innerHTML = "Enter valid height";
    } else if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Enter valid weight";
    } else {
        const bmi = weight / (height * height);
        if (bmi < 18.5) {
            result.innerHTML = `BMI is ${bmi.toFixed(2)} (underweight)`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML = `BMI is ${bmi.toFixed(2)} (normal weight)`;
        } else {
            result.innerHTML = `BMI is ${bmi.toFixed(2)} (overweight)`;
        }

        // Trigger the animation and play the audio
        animatedBg.classList.add("active");
        audio.play();
    }
});




