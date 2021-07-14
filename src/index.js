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

  $('#btn-next-section').on('click', ()=>{
    $('html, body').animate({
      scrollTop: $(".services").offset().top
    });
  })


  // // Add smooth scrolling to all links
  // $("a").on('click', function(event) {

  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){

  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });
});