modalFeature();const isOpen="is-open";let counter=0;function modalFeature(){const e=document.getElementById("reset");var t=document.querySelectorAll("[data-open]");const n=document.getElementById("resetAlert");for(const o of t)o.addEventListener("click",function(){var e=this.dataset.open;document.getElementById(e).classList.add(isOpen),incrementCounter(),5<sessionStorage.getItem("counter")?n.classList.remove("hide"):n.classList.add("hide")});for(const s of document.querySelectorAll("[data-close]"))s.addEventListener("click",function(){this.parentElement.parentElement.classList.remove(isOpen)});document.addEventListener("click",e=>{e.target==document.querySelector(".modal.is-open")&&document.querySelector(".modal.is-open").classList.remove(isOpen)}),e.addEventListener("click",()=>{resetCounter()})}function setCounter(e){var t=sessionStorage.getItem("counter");document.getElementById("counter").textContent=t}function incrementCounter(){var e=+document.getElementById("counter").textContent;sessionStorage.setItem("counter",(1+e).toString()),setCounter()}function resetCounter(){sessionStorage.setItem("counter",0..toString()),setCounter()}