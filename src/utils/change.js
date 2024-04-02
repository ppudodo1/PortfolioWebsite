const changeDiv=()=>{
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");
    rightButton.addEventListener('click',()=>{
        const left = document.getElementById("left");
    const center = document.getElementById("center");
    const right = document.getElementById("right");
  
    right.after(left);

    left.id = "right";
    center.id = "left";
    right.id = "center";
        
       
    })
    leftButton.addEventListener('click',()=>{
        const left = document.getElementById("left");
        const center = document.getElementById("center");
        const right = document.getElementById("right");
        center.after(left);
        left.id="center";
        center.id="right";
        right.id="left";
        
        
    })
}
export default changeDiv;