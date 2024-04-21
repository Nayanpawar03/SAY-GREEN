let body = document.querySelector("body")

let header = ` 
<header class="container">
<div>
    <a href="./" class="logo" aria-label="Home Page" style="margin-bottom:0;padding-bottom:0">
    <img src="./images/saygreen-removebg-preview.png" style="width:3rem;aspect-ratio=1/1;"></img>
    </a>
    <nav class="navbar">
        <a href="/">HOME</a>
        <a href="./guidance.html">GUIDANCE</a>
        <a href="./degradation.html">DEGRADATION</a>
        <a href="./nearby.html">FIND RECYCLING UNITS</a>
        <a href="./#contact">CONTACT</a>
    </nav>
    <input type="text" disabled name="search" placeholder="search">
</div>
<div class="mobile-nav">
    <nav>
        <a href="/">HOME</a>
        <a href="./guidance.html">GUIDANCE</a>
        <a href="./degradation.html">DEGRADATION</a>
        <a href="./nearby.html">FIND RECYCLING UNITS</a>
        <a href="./#contact">CONTACT</a>
    </nav>
</div>
</header>
`

let footer = `
<footer class="container">
<div style="display: flex;justify-content: center;">
    <p>
        Copyright &copy; 2027 - www.SayGreen.com - All rights reserved
    </p>
</div>
</footer>
`

body.innerHTML = header + body.innerHTML + footer