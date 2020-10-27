// Déroulement du menu mobile

$(document).ready( function($) {


	$('.logo-burger').on('click', function(){
		$('.menu-mobile-links').toggleClass('open');
	})


// Menu déroulant jeux (menu desktop)
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    if(scroll > 80) {
	       $('nav.menu').addClass('menu-padd');
       } else if(scroll <= 80) {
	       $('nav.menu').removeClass('menu-padd');
       }
  })


  
  
  /**
   * gestion des liste de departements boutique
   */

  $(".listeDepartement").hide();
	// Au clic sur un item de la liste déroulante
  $(".dropdown-item").on("click", function(){
    // cache une éventuelle liste affichée
    $(".listeDepartement").hide()
    // console.log de l'id du département sélectionnée
    console.log("clic2" + $(this).data().id);
    // on sauvegarde le département sélectionné par son id dans une variable
    var departementAdr= "#liste" + $(this).data().id;
    // On affiche ou on cache la liste correspondante
    $(departementAdr).show()
  })
  




  // Partie validation du formulaire

  // Wait for the DOM to be ready
  $(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='form-contact']").validate({
      // Specify validation rules
      rules: {
        nom: "required",
        prenom: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        votreMessage: "required",
      },
      // Specify validation error messages
      messages: {
        nom: "Merci d'entrer votre nom",
        prenom: "Merci d'entrer votre prénom",
        votreMessage: "Merci d'entrer votre message",
        email: "l'adresse email est invalide",
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });




   /**
  * gestion du popup rgpd
  */
 var popupRgpd = $('#popup');
 var btnsRgpd = $('.btnRgpdOpen');
 var btnClose = popupRgpd.children('.popupClose');
 var rgpdCheck = $("#rgpdCheck");



 btnsRgpd.on('click',function(event){
   event.preventDefault();
   popupRgpd.css({display:"block"});

 })
 btnClose.on('click',function(event){
   event.preventDefault();
   popupRgpd.css({display:"none"});

 })

})






// Gestion du rechargement //
$(".nolink").on("click", function(event){
  event.preventDefault()
})
;