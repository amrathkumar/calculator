const button=document.querySelectorAll(".b")
const inp=document.querySelector(".input")
const out=document.querySelector(".output")
const res=document.querySelector(".reset")
//input value
let ival=""
//getfunction
function getvalue(val){
    ival+=val
    inp.innerText=ival
};
//calculate
function calculate(){
    try{
    out.innerText=eval(ival)
    }catch{
        out.innerText="error"
        ival=""
    }
};

//reset buton
function reset(){
    inp.innerText=""
    ival=""
    out.innerText="0"

}



// main funtion
button.forEach(but =>{
    but.addEventListener("click",()=>{
        const val=but.innerText

    if(val === "=")
    {
        calculate()

    }else if (val=== "RESET")
    {
        reset()
    } else 
    {
        getvalue(val)
    }
    })
})
