const isOpen = "is-open";
let counter = 0;

function modalFeature () {
  const resetBtn = document.getElementById('reset')
  const openBtn = document.querySelectorAll('[data-open]');
  const resetAlert = document.getElementById('resetAlert')

  // Click open button
  for (const el of openBtn) {
    el.addEventListener("click", function() {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isOpen);
      
      incrementCounter()

      // Reset Info triger
      sessionStorage.getItem('counter') > 5 ? resetAlert.classList.remove('hide') : resetAlert.classList.add('hide')

    })
  }
  
  const closeBtn = document.querySelectorAll('[data-close]')
  // Click cross button to close
  for (const el of closeBtn) {
    el.addEventListener("click", function () {
      this.parentElement.parentElement.classList.remove(isOpen);
    })
  }
  
  // Clicking outside modal to close
  document.addEventListener("click", (e)=>{
    if (e.target == document.querySelector(".modal.is-open")) {
      document.querySelector(".modal.is-open").classList.remove(isOpen);
    }}
    )
  // Click to reset counter
  resetBtn.addEventListener('click', ()=>{
    resetCounter()
  })
    
}


function setCounter(reset) {
  const counter = sessionStorage.getItem('counter');
  document.getElementById('counter').textContent = counter
  
}

function incrementCounter(){
  const presentVal = +document.getElementById('counter').textContent
  sessionStorage.setItem('counter', (presentVal + 1).toString() )

  setCounter()
}

function resetCounter(){
  sessionStorage.setItem('counter', (0).toString() )

  setCounter()
}

