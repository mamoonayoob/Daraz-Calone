const enddate = "September 25, 2024 23:59:00"; 
const inputs=document.querySelectorAll(".subbox")
function clock() {
    const end = new Date(enddate);
    const now = new Date();
    console.log(end, now);
    const diff=(end-now)/1000;
    console.log(diff);
    if (diff<0) return;
    inputs[0].value=Math.floor(diff/3600);
    inputs[1].value=(Math.floor(diff/60)%60)
    inputs[2].value=(Math.floor(diff)%60)
}
clock();
setInterval(
    ()=>{
        clock()
    },
    1000
)