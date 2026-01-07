function toggleSidebar() {
    let side = document.getElementById("sidebar");

    if (side.style.left === "0px") {
        side.style.left = "-250px";  
    } else {
        side.style.left = "0px";    
    }
}