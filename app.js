const three = document.querySelector("#three");
const threeImg = document.querySelector("#collapseImgThree");
const one = document.querySelector("#one");
const oneImg = document.querySelector(".collapseImgOne");
const two = document.querySelector("#two");
const twoImg = document.querySelector(".twoImg");
const four = document.querySelector(".four");
const fourImg = document.querySelector(".fourImg");

three.onclick = () => {
  if (threeImg.style.transform == "rotate(180deg)") {
    threeImg.style.transform = "rotate(0deg)";
  } else {
    threeImg.style.transform = "rotate(180deg)";
  }
};
one.onclick = () => {
  if (oneImg.style.transform == "rotate(180deg)") {
    oneImg.style.transform = "rotate(0deg)";
  } else {
    oneImg.style.transform = "rotate(180deg)";
  }
};
two.onclick = () => {
  if (twoImg.style.transform == "rotate(180deg)") {
    twoImg.style.transform = "rotate(0deg)";
  } else {
    twoImg.style.transform = "rotate(180deg)";
  }
};
four.onclick = () => {
  if (fourImg.style.transform == "rotate(180deg)") {
    fourImg.style.transform = "rotate(0deg)";
  } else {
    fourImg.style.transform = "rotate(180deg)";
  }
};

const counters = document.querySelectorAll(".count");
const speed = 200;

const startCounters =()=>{
  counters.forEach((counter) =>{
    const updateCount = ()=>{
      const target = parseInt(+counter.getAttribute('data-target'));
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);

      if(count < target){
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);

      }else{
        count.innerText = target;
      }
    };
    updateCount();
  })
}
window.addEventListener('scroll', startCounters, {
  once: true
});

const footBtn = document.querySelector(".foot-btn");
const email = document.querySelector('#email');
const iconErr = document.querySelector(".icon-err");
const inputErr = document.querySelector(".input-err");

footBtn.onclick =()=>{
  if(email.value == ''){
    iconErr.style.display = 'block';
    inputErr.style.display  =  'block';
  }else{
    iconErr.style.display = 'none';
    inputErr.style.display  =  'none';
  }
}

const simpleClick = document.querySelector('.simpleClick');
const speedyClick = document.querySelector('.speedyClick');
const easyClick = document.querySelector('.easyClick');
simpleClick.onclick =()=>{
  simpleClick.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
  speedyClick.style.border = 'none';
  easyClick.style.border ='none'
}
speedyClick.onclick =()=>{
  speedyClick.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
  simpleClick.style.border = 'none';
  easyClick.style.border = 'none';
}
easyClick.onclick =()=>{
  easyClick.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
  simpleClick.style.border = 'none';
  speedyClick.style.border = 'none';
}
const iconBtn = document.querySelector(".icon-btn");
const openNav = document.querySelector('.nav-edit');
const closeNav = document.querySelector('.icon-close');
iconBtn.onclick =()=>{
  openNav.style.display = 'block';
}
closeNav.onclick =()=>{
  // console.log('clicked');
  openNav.style.display = 'none';
}
