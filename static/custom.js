var jobDetailsModal = document.getElementById("jobDetails");

var btn = document.getElementById("jobDetailsBtn");

var close = document.getElementById("jobDetailsClose");

btn.onclick = function() {
  jobDetailsModal.style.display = "block";
}

close.onclick = function() {
  jobDetailsModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == jobDetailsModal) {
    jobDetailsModal.style.display = "none";
  }
}

function openNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function () {
  $('.sidenav').sidenav()
})

$('.slider').each(function () {
  var $this = $(this)
  var $group = $this.find('.slide_group')
  var $slides = $this.find('.slide')
  var bulletArray = []
  var currentIndex = 0
  var timeout

  function move(newIndex) {
    var animateLeft, slideLeft

    advance()

    if ($group.is(':animated') || currentIndex === newIndex) {
      return
    }

    bulletArray[currentIndex].removeClass('active')
    bulletArray[newIndex].addClass('active')

    if (newIndex > currentIndex) {
      slideLeft = '100%'
      animateLeft = '-100%'
    } else {
      slideLeft = '-100%'
      animateLeft = '100%'
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft,
    })
    $group.animate(
      {
        left: animateLeft,
      },
      function () {
        $slides.eq(currentIndex).css({
          display: 'none',
        })
        $slides.eq(newIndex).css({
          left: 0,
        })
        $group.css({
          left: 0,
        })
        currentIndex = newIndex
      },
    )
  }

  function advance() {
    clearTimeout(timeout)
    
  }

  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>')

    if (index === currentIndex) {
      $button.addClass('active')
    }
    $button
      .on('click', function () {
        move(index)
      })
      .appendTo('.slide_buttons')
    bulletArray.push($button)
  })

  advance()
})


$('.jobSlider').each(function () {
  var $this = $(this)
  var $group = $this.find('.job_slide_group')
  var $slides = $this.find('.jobSlide')
  var bulletArray = []
  var currentIndex = 0
  var timeout

  function move(newIndex) {
    var animateLeft, slideLeft

    advance()

    if ($group.is(':animated') || currentIndex === newIndex) {
      return
    }

    bulletArray[currentIndex].removeClass('active')
    bulletArray[newIndex].addClass('active')

    if (newIndex > currentIndex) {
      slideLeft = '100%'
      animateLeft = '-100%'
    } else {
      slideLeft = '-100%'
      animateLeft = '100%'
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft,
    })
    $group.animate(
      {
        left: animateLeft,
      },
      function () {
        $slides.eq(currentIndex).css({
          display: 'none',
        })
        $slides.eq(newIndex).css({
          left: 0,
        })
        $group.css({
          left: 0,
        })
        currentIndex = newIndex
      },
    )
  }

  function advance() {
    clearTimeout(timeout)
    
  }

  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>')

    if (index === currentIndex) {
      $button.addClass('active')
    }
    $button
      .on('click', function () {
        move(index)
      })
      .appendTo('.job_slide_buttons')
    bulletArray.push($button)
  })

  advance()
})