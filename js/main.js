$(".slider").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  items: 1,
});

$(".lista-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

/// acordeon

const accordionList = document.getElementsByTagName("dt");
const accordionListDd = document.querySelectorAll(".item-accordion");

console.log(accordionList);
console.log(accordionListDd);

for (i = 0; i < accordionList.length; i++) {
  accordionList[i].addEventListener("click", activeAccordion);
}

function activeAccordion() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accordionListDd.length; i++) {
    accordionListDd[i].className = "item-accordion close";
  }
  if (itemClass == "item-accordion close") {
    this.parentNode.className = "item-accordion open";
  }
}

/// validação

const contato = document.querySelector("#contato");

function handleKeyUp(event) {
  const target = event.target;

  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.nextElementSibling.innerText = target.validationMessage;
  }
  event.preventDefault();
}

contato.addEventListener("change", handleKeyUp);

$(".phone_with_ddd").mask("(00) 00000-0000");
