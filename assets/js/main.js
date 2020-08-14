/* mobile navbar trigger and animation */

const hiddenNav = () => {
    const navIcon = document.querySelector('.nav-mobile');
    const nav = document.querySelector('.nav-icon');
    const navItems = document.querySelectorAll('.nav-icon li');
    
    navIcon.addEventListener('click', () => {
        nav.classList.toggle('nav-expanded');
        
        navItems.forEach((item,index) =>{
            if(item.style.animation){
                item.style.animation = ``;
            } else {item.style.animation = `showNavItem 0.5s ease forwards ${index/3}s`;
            }
        });
        navIcon.classList.toggle('open');
    });
};


hiddenNav();
