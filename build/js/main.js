"use strict";var navbar=document.getElementById("navbar");window.onscroll=function(){100<=window.pageYOffset&&900<=document.documentElement.clientWidth?navbar.classList.add("navbar-colored"):navbar.classList.remove("navbar-colored")},window.onload=function(){var e,t;e=document.querySelector(".menu-btn"),t=document.querySelector("nav"),e.addEventListener("click",function(){e.classList.contains("menu-btn-active")?(t.classList.remove("mobile"),e.classList.remove("menu-btn-active")):(t.classList.add("mobile"),e.classList.add("menu-btn-active"))}),function(){for(var e="#slider1",s=document.querySelectorAll(e+" .b-slider__dots .b-slider__dot"),l=document.querySelectorAll(e+" .b-slider__slides .b-slider__slide"),t=0;t<s.length;t++)s[t].addEventListener("click",{handleEvent:i,n:t});function i(e){for(var t=0;t<s.length;t++)s[t].classList.remove("b-slider__dot--active"),l[t].classList.remove("b-slider__slide--show");s[this.n].classList.add("b-slider__dot--active"),l[this.n].classList.add("b-slider__slide--show")}}(),function(){var e="#slider2",s=document.querySelectorAll(e+" .b-slider__dots .b-slider__dot"),l=document.querySelectorAll(e+" .b-slider__slides .b-slider__slide--row");r();for(var t=0;t<s.length;t++)s[t].addEventListener("click",{handleEvent:i,n:t});function i(e){for(var t=0;t<s.length;t++)s[t].classList.remove("b-slider__dot--active"),l[t].classList.remove("b-slider__slide--row--show");s[this.n].classList.add("b-slider__dot--active"),l[this.n].classList.add("b-slider__slide--row--show"),r()}function r(){for(var e=document.querySelectorAll(".b-slider__slide--row--show .b-roundprog"),t=0;t<e.length;t++){var s=e[t].querySelector(".b-roundprog__canvas");d(s.getContext("2d"),s.getAttribute("data-value"))}}function d(e,t){var s=0;e.canvas.width=e.canvas.offsetWidth,e.canvas.height=e.canvas.offsetHeight;var l,i=e.canvas.width,r=e.canvas.height;var d=setInterval(function(){l=s/100*Math.PI*2*10,e.clearRect(0,0,i,r),e.lineWidth=5,e.fillStyle="#464646",e.strokeStyle="#19bd9a",e.textAlign="center",e.font="25px sans-serif",e.fillText(s+"%",60,70),e.beginPath(),e.arc(62,62,57,4.72,l/10+4.72),e.stroke(),t<=s&&clearTimeout(d),s++},30)}}(),function(){for(var l=new Masonry(".b-gallery__grid-wrap",{itemSelector:".b-gallery__item",columnWidth:30,gutter:5,fitWidth:!0}),i=document.querySelectorAll(".b-gallery__item"),e=document.querySelectorAll(".b-gallery__btn"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){for(var t=this.id,s=0;s<i.length;s++){i[s].dataset.category;i[s].style.display="block",i[s].dataset.category!==t&"allworks"!==t&&(i[s].style.display="none"),l.layout()}})}(),function(){var e="#slider3",s=document.querySelectorAll(e+" .b-slider__dots .b-slider__dot"),l=document.querySelectorAll(e+" .b-slider__slides .b-slider__slide");r();for(var t=0;t<s.length;t++)s[t].addEventListener("click",{handleEvent:i,n:t});function i(e){for(var t=0;t<s.length;t++)s[t].classList.remove("b-slider__dot--active"),l[t].classList.remove("b-slider__slide--show");s[this.n].classList.add("b-slider__dot--active"),l[this.n].classList.add("b-slider__slide--show"),r()}function r(){var e=document.querySelectorAll(".b-slider__slide--show .b-progressline__bar");console.log(e);for(var t=0;t<e.length;t++){console.log(e[t]);var s=e[t],l=s.getContext("2d"),i=s.getAttribute("data-value"),r=s.getAttribute("data-name");console.log(l),console.log(i),d(l,i,r)}}function d(e,t,s){var l=0;e.canvas.width=e.canvas.offsetWidth,e.canvas.height=e.canvas.offsetHeight;var i,r=e.canvas.width,d=e.canvas.height;var n=setInterval(function(){i=r/100*l,e.clearRect(0,0,r,d),e.lineWidth=5,e.fillStyle="#777",e.textAlign="left",e.font="18px sans-serif",e.fillText(s.toUpperCase(),0,40),e.textAlign="right",e.fillText(l+"%",r,40),e.fillStyle="#19bd9a",e.fillRect(0,45,i,5),e.stroke(),t<=l&&clearTimeout(n),l++},30)}}(),function(){for(var e="#slider4",s=document.querySelectorAll(e+" .b-slider__dots .b-slider__dot"),l=document.querySelectorAll(e+" .b-slider__slides .b-slider__slide"),t=0;t<s.length;t++)s[t].addEventListener("click",{handleEvent:i,n:t});function i(e){for(var t=0;t<s.length;t++)s[t].classList.remove("b-slider__dot--active"),l[t].classList.remove("b-slider__slide--show");s[this.n].classList.add("b-slider__dot--active"),l[this.n].classList.add("b-slider__slide--show")}}(),function(){for(var e="#slider5",s=document.querySelectorAll(e+" .b-slider__dots .b-slider__dot"),l=document.querySelectorAll(e+" .b-slider__slides .b-slider__slide"),t=0;t<s.length;t++)s[t].addEventListener("click",{handleEvent:i,n:t});function i(e){for(var t=0;t<s.length;t++)s[t].classList.remove("b-slider__dot--active"),l[t].classList.remove("b-slider__slide--show");s[this.n].classList.add("b-slider__dot--active"),l[this.n].classList.add("b-slider__slide--show")}}()};