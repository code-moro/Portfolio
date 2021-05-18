const togglebtn=document.getElementsByClassName('toggle')[0]
const navbar=document.getElementsByClassName('links')[0]

togglebtn.addEventListener('click',()=>
{
navbar.classList.toggle('active')    
})

const text=['Wanderlust','Designer','Web Developer','Coder'];
let index=0;
let count=0;
let current='';
let letter='';

(function type(){
if(count===text.length)
{
    count=0;
}
current=text[count];
letter=current.slice(0,++index);

document.querySelector('.typing').textContent=letter;
if(letter.length===current.length)
{
count++;
index=0;    
}
setTimeout(type,1000);
})();

gsap.to('.layer1',{y:'-100vh',delay:.5});
gsap.to('.layer2',{y:'-100vh',delay:.7});
gsap.to('.layer3',{y:'-100vh',delay:.9});
gsap.to('.overlay',{y:'-100vh',delay:1.5});

const sr=ScrollReveal
({origin: 'top',distance:'80px',duration:2000,
reset:true
})

sr.reveal('.home_text',{})
sr.reveal('.home_btn',{delay:200})
sr.reveal('.home_img',{delay:300})
sr.reveal('.icon',{interval:400})

sr.reveal('.title',{})
sr.reveal('.about_img',{delay:200})
sr.reveal('.about_text',{delay:200})


sr.reveal('.skill_text',{delay:200})
sr.reveal('.skill_img',{delay:200})
sr.reveal('.skill_data',{interval:200})

sr.reveal('.work_img',{interval:200})

sr.reveal('.contact_input',{interval:200})


