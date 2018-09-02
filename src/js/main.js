"use strict";
var navbar = document.getElementById('navbar');

window.onscroll = function () {
    "use strict";
    if (window.pageYOffset >= 100 && document.documentElement.clientWidth >= 900) {
        navbar.classList.add("navbar-colored")
    } else
        navbar.classList.remove("navbar-colored");
}

window.onload = function () {
    // *************************************************************************************
    var menubut = function () {
        let menubtn = document.querySelector(".menu-btn");
        let nav = document.querySelector('nav');
        menubtn.addEventListener("click", function () {
            if (menubtn.classList.contains('menu-btn-active')) {
                nav.classList.remove("mobile");
                menubtn.classList.remove('menu-btn-active');
            } else {
                nav.classList.add("mobile");
                menubtn.classList.add('menu-btn-active');
            }
        })
    }();
    // var scrolpage = function () {
    //     // собираем все якоря; устанавливаем время анимации и количество кадров
    //     const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    //         animationTime = 300,
    //         framesCount = 20;

    //     anchors.forEach(function (item) {
    //         // каждому якорю присваиваем обработчик события
    //         item.addEventListener('click', function (e) {
    //             // убираем стандартное поведение
    //             e.preventDefault();

    //             // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    //             let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

    //             // запускаем интервал, в котором
    //             let scroller = setInterval(function () {
    //                 // считаем на сколько скроллить за 1 такт
    //                 let scrollBy = coordY / framesCount;

    //                 // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
    //                 // и дно страницы не достигнуто
    //                 if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
    //                     // то скроллим на к-во пикселей, которое соответствует одному такту
    //                     window.scrollBy(0, scrollBy);
    //                 } else {
    //                     // иначе добираемся до элемента и выходим из интервала
    //                     window.scrollTo(0, coordY);
    //                     clearInterval(scroller);
    //                 }
    //                 // время интервала равняется частному от времени анимации и к-ва кадров
    //             }, animationTime / framesCount);
    //         });
    //     });
    // }();
    // *************************************************************************************
    var slider1 = function () {
        var sliderId = "#slider1";
        let dots = document.querySelectorAll(sliderId + " .b-slider__dots .b-slider__dot");
        //console.log(dots);
        let slides = document.querySelectorAll(sliderId + " .b-slider__slides .b-slider__slide");
        //console.log(slides);

        //dots[0].addEventListener("click", selectCurrent);

        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", {
                handleEvent: selectCurrent,
                n: i
            });
        }

        function selectCurrent(event) {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("b-slider__dot--active");
                slides[i].classList.remove("b-slider__slide--show");
            }
            dots[this.n].classList.add("b-slider__dot--active");
            slides[this.n].classList.add("b-slider__slide--show");
        }
    }();
    // Функция для реализации слайдера с услугами
    var slider2 = function () {
        "use strict";
        var sliderId = "#slider2";
        let dots = document.querySelectorAll(sliderId + " .b-slider__dots .b-slider__dot");
        //console.log(dots);
        let slides = document.querySelectorAll(sliderId + " .b-slider__slides .b-slider__slide--row");
        //console.log(slides);
        setProgress();
        //dots[0].addEventListener("click", selectCurrent);

        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", {
                handleEvent: selectCurrent,
                n: i
            });
        }

        function selectCurrent(event) {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("b-slider__dot--active");
                slides[i].classList.remove("b-slider__slide--row--show");
            }
            dots[this.n].classList.add("b-slider__dot--active");
            slides[this.n].classList.add("b-slider__slide--row--show");
            setProgress();
        }


        function setProgress() {
            let progRound = document.querySelectorAll('.b-slider__slide--row--show .b-roundprog');
            //console.log(progRound);
            for (let i = 0; i < progRound.length; i++) {
                //console.log(progRound[i]);
                let element = progRound[i].querySelector('.b-roundprog__canvas');
                let ctx = element.getContext('2d');
                let val = element.getAttribute('data-value');
                //console.log(ctx);
                //console.log(val);
                animateProg(ctx, val);
                //setInterval(animateProg(ctx), 50);
            }
        }


        //_______________________________________________________________
        //Function for animate round progress bar
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function animateProg(ctx, val) {

            var no = 0; // Starting Point
            var pointToFill = 4.72; //Point from where you want to fill the circle
            ctx.canvas.width = ctx.canvas.offsetWidth;
            ctx.canvas.height = ctx.canvas.offsetHeight;
            var cw = ctx.canvas.width; //Return canvas width
            var ch = ctx.canvas.height; //Return canvas height
            var diff; // find the different between current value (no) and trageted value (100)

            function fillCounter() {
                diff = ((no / 100) * Math.PI * 2 * 10);

                ctx.clearRect(0, 0, cw, ch); // Clear canvas every time when function is call

                ctx.lineWidth = 5; // size of stroke

                ctx.fillStyle = '#464646'; // color that you want to fill in ctx/circle

                ctx.strokeStyle = '#19bd9a'; // Stroke Color

                ctx.textAlign = 'center';

                ctx.font = "25px sans-serif"; //set font size and face

                ctx.fillText(no + '%', 60, 70); //fillText(text,x,y);

                ctx.beginPath();
                ctx.arc(62, 62, 57, pointToFill, diff / 10 + pointToFill); //arc(x,y,radius,start,stop)

                ctx.stroke(); // to fill stroke

                // now add condition

                if (no >= val) {
                    clearTimeout(fill); //fill is a variable that call the function fillcounter()
                }
                no++;
            }

            //now call the function

            var fill = setInterval(fillCounter, 30);
        }

    }();
    //__________________________________________________________________
    //Gallery
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var gallery = function () {

        var msnry = new Masonry(".b-gallery__grid-wrap", {
            itemSelector: '.b-gallery__item',
            columnWidth: 30,
            gutter: 5,
            fitWidth: true
        });

        let items = document.querySelectorAll('.b-gallery__item');
        //console.log(items);
        let toggles = document.querySelectorAll('.b-gallery__btn');
        //console.log(toggles);
        for (let i = 0; i < toggles.length; i++) {
            toggles[i].addEventListener("click", function (event) {
                //console.log(this);
                let id = this.id;
                //console.log(id);
                for (let j = 0; j < items.length; j++) {
                    let itemId = items[j].dataset.category;
                    items[j].style.display = "block";
                    if (items[j].dataset.category !== id & id !== 'allworks') {
                        items[j].style.display = "none";
                    }
                    msnry.layout()
                }
            });
        }
    }();
    //__________________________________________________________________
    // Slider3
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var slider3 = function () {
        var sliderId = "#slider3";
        let dots = document.querySelectorAll(sliderId + " .b-slider__dots .b-slider__dot");
        //console.log(dots);
        let slides = document.querySelectorAll(sliderId + " .b-slider__slides .b-slider__slide");
        //console.log(slides);
        setProgress();
        //dots[0].addEventListener("click", selectCurrent);

        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", {
                handleEvent: selectCurrent,
                n: i
            });
        }

        function selectCurrent(event) {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("b-slider__dot--active");
                slides[i].classList.remove("b-slider__slide--show");
            }
            dots[this.n].classList.add("b-slider__dot--active");
            slides[this.n].classList.add("b-slider__slide--show");
            setProgress();
        }

        function setProgress() {
            let progBar = document.querySelectorAll('.b-slider__slide--show .b-progressline__bar');
            console.log(progBar);
            for (let i = 0; i < progBar.length; i++) {
                console.log(progBar[i]);
                let element = progBar[i];
                let ctx = element.getContext('2d');
                let val = element.getAttribute('data-value');
                let nam = element.getAttribute('data-name');

                console.log(ctx);
                console.log(val);
                animateProg(ctx, val, nam);
                //setInterval(animateProg(ctx), 50);
            }
        }

        //_______________________________________________________________
        //Function for animate round progress bar
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function animateProg(ctx, val, nam) {

            var no = 0; // Starting Point
            var pointToFill = 0; //Point from where you want to fill the circle
            ctx.canvas.width = ctx.canvas.offsetWidth;
            ctx.canvas.height = ctx.canvas.offsetHeight;
            var cw = ctx.canvas.width; //Return canvas width
            var ch = ctx.canvas.height; //Return canvas height
            var diff; // find the different between current value (no) and trageted value (100)

            function fillCounter() {
                diff = cw / 100 * no;

                ctx.clearRect(0, 0, cw, ch); // Clear canvas every time when function is call

                ctx.lineWidth = 5; // size of stroke

                ctx.fillStyle = '#777';

                ctx.textAlign = 'left';

                ctx.font = "18px sans-serif";

                ctx.fillText(nam.toUpperCase(), 0, 40)

                // color that you want to fill in ctx/circle               

                ctx.textAlign = 'right';

                ctx.fillText(no + '%', cw, 40); //fillText(text,x,y);

                ctx.fillStyle = '#19bd9a';
                //ctx.beginPath();
                ctx.fillRect(0, 45, diff, 5); //arc(x,y,radius,start,stop)

                ctx.stroke(); // to fill stroke

                // now add condition

                if (no >= val) {
                    clearTimeout(fill); //fill is a variable that call the function fillcounter()
                }
                no++;
            }

            //now call the function

            var fill = setInterval(fillCounter, 30);
        }

    }();

    var slider4 = function () {
        var sliderId = "#slider4";
        let dots = document.querySelectorAll(sliderId + " .b-slider__dots .b-slider__dot");
        //console.log(dots);
        let slides = document.querySelectorAll(sliderId + " .b-slider__slides .b-slider__slide");
        //console.log(slides);

        //dots[0].addEventListener("click", selectCurrent);

        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", {
                handleEvent: selectCurrent,
                n: i
            });
        }

        function selectCurrent(event) {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("b-slider__dot--active");
                slides[i].classList.remove("b-slider__slide--show");
            }
            dots[this.n].classList.add("b-slider__dot--active");
            slides[this.n].classList.add("b-slider__slide--show");
        }
    }();

    var slider5 = function () {
        var sliderId = "#slider5";
        let dots = document.querySelectorAll(sliderId + " .b-slider__dots .b-slider__dot");
        //console.log(dots);
        let slides = document.querySelectorAll(sliderId + " .b-slider__slides .b-slider__slide");
        //console.log(slides);

        //dots[0].addEventListener("click", selectCurrent);

        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", {
                handleEvent: selectCurrent,
                n: i
            });
        }

        function selectCurrent(event) {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("b-slider__dot--active");
                slides[i].classList.remove("b-slider__slide--show");
            }
            dots[this.n].classList.add("b-slider__dot--active");
            slides[this.n].classList.add("b-slider__slide--show");
        }
    }();

    //msnry.layout();
}


//slider1();