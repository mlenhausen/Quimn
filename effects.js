const imgs = document.querySelectorAll(".pastevents, .upcomingevents, .def, .mission, .pictus, .lavhat, .whithat, .whitcrew, .lavhood, .whittank, .lavshirt");

imgs.forEach((el) => {
  el.classList.add("loadin");
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

imgs.forEach((el) => observer.observe(el));


function toggleSubMenu(element) {
  var submenu = element.querySelector('ul');
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  event.stopPropagation(); // Prevent event bubbling
}

$(document).ready(function() {
  $('a[uk-scroll]').on('click', function() {
    $('#sidebarMenu ul ul').hide();
  });
});


