//------------------------------------------------
// Add toggle functionality to abstract and bibtex buttons in publications
//------------------------------------------------
$('a.abstract').click(function() {
    console.log("clicked");
    $(this).parent().parent().find(".abstract.bib-hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.bib-hidden.open").toggleClass('open');
});
$('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.bib-hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.bib-hidden.open").toggleClass('open');
});
$('a').removeClass('waves-effect waves-light');

//------------------------------------------------
// Creates margin between team photos if they wrap
//------------------------------------------------
// function checkWrap(container, items) {
//     let isWrapped = false;
  
//     for (let i = 1; i < items.length; i++) {
//       if (items[i].offsetTop > items[i - 1].offsetTop) {
//         isWrapped = true;
//         break;
//       }
//     }
  
//     if (isWrapped) {
//       items.forEach((item) => {
//         item.style.marginBottom = '60px';
//       });
//     } else {
//       items.forEach((item) => {
//         item.style.marginBottom = '0';
//       });
//     }
//   }
  
// const team_container = document.querySelector('.team-photos');
// const team_items = document.querySelectorAll('.team-photos-img');

// // Initial check
// checkWrap(team_container, team_items);

// // Re-check on window resize
// window.addEventListener('resize', () => {
// checkWrap(team_container, team_items);
// });

//------------------------------------------------
// Project Slider event listener and auto rotate
//------------------------------------------------
$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
 });

 let activeIndex = 0;
 let numOptions = $('.option').length;
 let autoSwitch;
 
 const switchActive = () => {
   $('.option').removeClass('active');
   $(`.option:eq(${activeIndex})`).addClass('active');
 };
 
 const autoSwitchActive = () => {
   if (autoSwitch) clearInterval(autoSwitch);
   
   autoSwitch = setInterval(() => {
     activeIndex = (activeIndex + 1) % numOptions;
     switchActive();
   }, 5000);
 };
 
 switchActive();
 autoSwitchActive();
 
 $('.option').hover(
   () => clearInterval(autoSwitch),
   () => autoSwitchActive()
 );