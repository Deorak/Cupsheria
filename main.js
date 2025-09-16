const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });


  function updateCartCount(){
const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
const notif = document.querySelector(".notifications-count");

let count = Number(0);

      
      Object.entries(cart).forEach(([key, value]) => {
        count+=Number(value.quantity);
      });
         
      notif.textContent = count;
    }
updateCartCount();