function toggleMenu(){var e=document.querySelector(".toggle"),t=document.querySelector(".menu");e.classList.toggle("active"),t.classList.toggle("active")}window.addEventListener("scroll",function(){document.querySelector("header").classList.toggle("sticky",window.scrollY>0)});