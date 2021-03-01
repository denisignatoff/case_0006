// burder-menu

jQuery('.menuicon').on('click', function() {
  jQuery(this).toggleClass('active')
  jQuery('.header__contacts').toggleClass('active')
})

// phone-mask

jQuery('.form-inv__num').mask('+7 (999) 999-99-99')

// popup

function openPopup() {
  jQuery('.popup__wrapper').css('display', 'flex')
  jQuery('body').css('overflow', 'hidden')
}

function closePopup() {
  jQuery('.popup__wrapper').css('display', 'none')
  jQuery('body').css('overflow', 'auto')
}

jQuery('.open-popup').on('click', openPopup)
jQuery('.popup__close').on('click', closePopup)

jQuery('.popup__wrapper').on('click', function(e) {
  if (e.target.classList.contains('popup__wrapper')) closePopup()
})