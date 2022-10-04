const modals = document.getElementsByClassName('modal-card');
const btn1 = document.getElementById('modal-btn1');
const btn2 = document.getElementById('modal-btn2');
const btn3 = document.getElementById('modal-btn3');
const btn4 = document.getElementById('modal-btn4');

const [modal1, modal2, modal3, modal4] = modals;

modalControl(btn1, modal1);
modalControl(btn2, modal2);
modalControl(btn3, modal3);
modalControl(btn4, modal4);

function modalControl(btn, modal){

  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  })

  const close = modal.querySelector('.close');

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  })

  window.addEventListener('click', (e) => {
    if(e.target == modal){
      modal.style.display = 'none';
    }
  })

  window.addEventListener('scroll', () => {
    modal.style.display = 'none';
  });
}