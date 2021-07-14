import '../styles/index.css'
import '@fortawesome/fontawesome-free/js/all'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

window.addEventListener('load', function(event) {
  document.querySelector('.call-to-action').addEventListener('click', 
    openModal(document.querySelector('.modal'), document.querySelector('.body-blackout'))
  )
})

function openModal(modal, blackout) {
  return () => {
    modal.classList.add('visible')
    blackout.classList.add('visible')

    blackout.onclick = closeModal(modal, blackout)
  }
}

function closeModal(modal, blackout) {
  return () => {
    modal.classList.remove('visible')
    blackout.classList.remove('visible')
  }
}

$(document).ready(function(){

  $('#btn-next-to-services').on('click', ()=>{
    $('html, body').animate({
      scrollTop: $(".services").offset().top
    });
  })

  $('#btn-next-to-testimonials').on('click', ()=>{
    $('html, body').animate({
      scrollTop: $(".testimonials").offset().top
    });
  })

});