console.log("team.js loading");
function checkWrap(container, items) {
    let isWrapped = false;
  
    for (let i = 1; i < items.length; i++) {
      if (items[i].offsetTop > items[i - 1].offsetTop) {
        isWrapped = true;
        break;
      }
    }
  
    if (isWrapped) {
      items.forEach((item) => {
        item.style.marginBottom = '30px';
      });
    } else {
      items.forEach((item) => {
        item.style.marginBottom = '0';
      });
    }
  }
  
  const container = document.querySelector('.team-photos');
  const items = document.querySelectorAll('.team-photos-img');
  
  // Initial check
  checkWrap(container, items);
  
  // Re-check on window resize
  window.addEventListener('resize', () => {
    checkWrap(container, items);
  });