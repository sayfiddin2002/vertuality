window.addEventListener('DOMContentLoaded', () => {


    const myMenuIcon = document.getElementById("myMenuIcon");
    const myList = document.getElementById("myList");
    const inputbtn = document.querySelector('.btn-input');
    const clickbtn = document.querySelector('.section6-2');
    const li = document.querySelectorAll('li')
    let isOpen = false;


    myMenuIcon.addEventListener('click', () => {
        myList.classList.toggle("active");
        if (!isOpen) {
            myMenuIcon.classList.add("fa-times");
            myMenuIcon.classList.remove("fa-bars");
            isOpen = true;
        } else {
            myMenuIcon.classList.remove("fa-times");
            myMenuIcon.classList.add("fa-bars");
            isOpen = false;
        }
    })

    clickbtn.addEventListener('click', () => {
        inputbtn.value = '';
    })


    class ServiceCard {
        constructor(src, alt, tittle, descr, learn) {
            this.src = src;
            this.alt = alt;
            this.tittle = tittle;
            this.descr = descr;
            this.learn = learn;
        }
    }

    const a = new ServiceCard(
        "./img/icon1.svg",
        "Error",
        "Order Management",
        " Aperiam delectus laboriosam eveniet impedit  ipsa sapiente corporis architecto numquam quidem dolores, repudiandae laborum Esse",
        "Learn more",
    );

    const b = new ServiceCard(
        "img/icon6.svg",
        "Error",
        "Social Assistant",
        "Pariatur saepe cum itaque alias corrupti quis praesentium! Sunt quia sed amet error perferendis hic dolore iste inventore culpa?",
        "Learn more",
    );

    const d = new ServiceCard(
        "./img/icon4.svg",
        "Error",
        "Crypto Platform",
        "Voluptatum cupiditate illum at. Sed, eos! so Accusantium facere, eius autem, recusandae sit mollitia porro hic dolores quae blanditiis officiis ",
        "Learn more",

    );

    const e = new ServiceCard(
        "./img/icon3.svg",
        "Error",
        "Smart Trading Modules",
        "A alias laboriosam quibusdam veritatis! Eius laboriosam ipsum voluptatem praesentium non amet tempora assumenda  inventore rerum? ",
        "Learn more",

    );

    const f = new ServiceCard(
        "./img/icon2.svg",
        "Error",
        "Module of Price Notification",
        "Distinctio maiores, laboriosam numquam eos fuga possimus obcaecati molestias rem et similique commodi architecto iusto nostrum ",
        "Learn more",

    );

    const g = new ServiceCard(
        "./img/icon4.svg",
        "Error",
        "Crypto Platform",
        "Adipisci sunt totam in aliquid laborum sint quaerat, eligendi reiciendis distinctio deserunt impedit autem ducimus a. Repellat fugit",
        "Learn more",

    );


    const ServiceTotal = [a, b, d, e, f, g];

    const section_2 = document.querySelector(".section2-3");

    ServiceTotal.forEach((person) => {
        section_2.innerHTML += `
        <div data-aos="fade-up" class="section2-4">
            <div class="circlee">
                <img src=${person.src} alt=${person.alt}>
            </div>
            <h2>${person.tittle}</h2>
            <p>${person.descr}</p>
            <div class="circle-footer">
                <p>${person.learn}</p>
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </div>
        </div>
        `
    });





    class UserCard {
        constructor(img, name, job) {
            this.img = img;
            this.name = name;
            this.job = job;
        }
    }

    const one = new UserCard(
        "./img/card1.png",
        "Sunny Khan",
        "Executive officer",

    );

    const two = new UserCard(
        "./img/card2.png",
        "Alina Jesia",
        "UX/UI DESIGNER",

    );

    const three = new UserCard(
        "./img/card3.png",
        "Alex Sohag",
        "BUSINESS DEVELOPMENT",

    );

    const four = new UserCard(
        "/img/card4.png",
        "Alina Jesia",
        "Head of marketing",

    );


    const userTotal = [one, two, three, four];

    const user = document.querySelector('.section5-2');

    userTotal.forEach((child) => {
        user.innerHTML += `
        <div data-aos="flip-left" class="section5-3">
            <img src=${child.img} alt="">
            <h2>${child.name}</h2>
            <p>${child.job}</p>
            <div class="section5-footer">
                <div class="round">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div class="round">
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div class="round">
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <div class="round">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
            </div>
        </div>
        `
    })
})