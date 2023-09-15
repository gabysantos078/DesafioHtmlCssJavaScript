const header = 
`<header>
        <div class="navbar">
            <div class="logo"><a href="#">Gabriely</a></div>
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="exercicio2.html">Idade</a></li>
                <li><a href="exercicio3.html">Média</a></li>
                <li><a href="exercicio4.html">IMC</a></li>
                <li><a href="exercicio5.html">Aumento</a></li>
            </ul>
            <a href="#" class="action_btn">Get Started</a>
            <div class="toggle_btn">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>

        <div class="dropdown_menu">
            <li><a href="index.html">Home</a></li>
                <li><a href="exercicio2.html">Idade</a></li>
                <li><a href="exercicio3.html">Média</a></li>
                <li><a href="exercicio4.html">IMC</a></li>
                <li><a href="exercicio5.html">Aumento</a></li>
                <li><a href="#" class="action_btn">Get Started</a></li>
        </div>
    </header>`

const div = document.createElement('div');
div.innerHTML = header
const body = document.body.appendChild(div);