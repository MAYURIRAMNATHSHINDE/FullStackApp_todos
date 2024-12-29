export const navbar = ()=>{
    let navContainer=`<div id="nav">
    <h1>Todos</h1>
    <a href="./signup.html">SignUP</a>
    <a href="./login.html">Login</a>
    </div>`;



    const container = document.getElementById("nav-cont");
    container.innerHTML=navContainer;
}