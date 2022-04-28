const btnScrollToTop = document.querySelector("#btnScrollToTop");
  
    btnScrollToTop.addEventListener("click",function(){
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
    });
    let accordions = document.querySelectorAll('.accordion-container .accordion');

    accordions.forEach(acco =>{
        acco.onclick = () =>{
            accordions.forEach(subAcco => { subAcco.classList.remove('active') });
            acco.classList.add('active');
        };
    });
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
