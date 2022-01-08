'use strict';

const mainDiv = document.querySelector('.selector'),
      planDiv = document.querySelectorAll('.changing_div'),
      switchBtn = document.querySelectorAll('.btn_item'),
      cash = document.querySelectorAll('.cash'),
      marDiv = document.querySelector('.changing');

switchBtn.forEach(element => {
  element.addEventListener('click', event => {
    switchBtn.forEach(element => {
      element.classList.remove('btn_purle');
      element.classList.remove('btn_purle_right');
    });
  
    event.target.classList.add('btn_purle');
    
    cash.forEach(element => {
    if (element == cash[0]) {
      element.innerHTML = '$29<span class="month">/month</span>';
    } else {
      element.innerHTML = '$49<span class="month">/month</span>';
    }
  });

    if(event.target.innerHTML == 'Yearly') {
      event.target.classList.add('btn_purle_right');

      cash.forEach(element => {
        if (element == cash[0]) {
          element.innerHTML = '$261<span class="month">/year</span>';
        } else {
          element.innerHTML = '$441<span class="month">/year</span>';
        }
      });
    }
  });
});

planDiv.forEach(element => {
    element.addEventListener('mouseenter', event => {
      let target = event.target;
      css(marDiv, {
        'transition': 'width 0.3s',
        'width': '1068px',
      });
      planDiv.forEach(element => {
        css(element, {
          "vertical-align": 'middle'
        });
      });
      css(target, {
        'transition': 'width 0.3s, height 0.3s',
        'width': '376px',
        'height': '473px',
        'background': '#FF7143',
        'color': '#FFFFFF'
      });

    element.addEventListener('mouseleave', event => {
      let target = event.target;
      css(marDiv, {
        'width': '1022px'
      });
      planDiv.forEach(element => {
        css(element, {
          "vertical-align": 'middle'
        });
      });
      css(target, {
        'transition': 'width 0.3s, height 0.3s',
        'width': '330px',
        'height': '441px',
        'background': '#F8F8F8',
        'color': '#1D293F'
      });
    });
    
    });
});

function css(element, style) {
    for (const property in style) {
        element.style[property] = style[property];
    }
}
  
console.log(planDiv);