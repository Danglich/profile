(function (){
    
    
    let indexSlider = 0
    const app = {
        

        handleSlider: function() {
            const sliderList = document.querySelector('.inspire__list')
            const sliderItems = document.querySelectorAll('.inspire__item')
            const sliderDots = document.querySelectorAll('.inspire__slider-dot')
            const btnPrev = document.querySelector('.slider__prev')
            const btnNext = document.querySelector('.slider__next')
            


            
            btnNext.onclick = function() {
                indexSlider++;
                if(indexSlider ===  1){
                    sliderList.style.transition = "all 0.5s";
                }

                if(indexSlider > sliderItems.length - 1){
                    indexSlider = 0;
                }

                if(indexSlider === 0) {
                    sliderList.style.transition = "all 0s";
                }
                
                sliderList.style.transform = `translateX(-${25 * indexSlider}%)`;
                [...sliderDots].forEach(function(item) {
                    item.classList.remove('active')
                });

               

                sliderDots[indexSlider].classList.add('active')

                
            }

            btnPrev.onclick = function() {
                indexSlider--;
                if(indexSlider < 0){
                    indexSlider = sliderItems.length - 1;
                    
                }
                if(indexSlider === sliderItems.length - 1) {
                    sliderList.style.transition = "all 0s";
                }
                if(indexSlider ===  2){
                    sliderList.style.transition = "all 0.5s";
                }
                
                sliderList.style.transform = `translateX(-${25 * indexSlider}%)`;
                sliderList.style.transform = `translateX(-${25 * indexSlider}%)`;
                [...sliderDots].forEach(function(item) {
                    item.classList.remove('active')
                });

                sliderDots[indexSlider].classList.add('active')
            }

            setInterval(function() {
                btnNext.click();
            }, 4000)


            


            

        },


        handleSkill: function(){
            const htmlElement = document.documentElement
            const skillItems = document.querySelectorAll('.skill__item-value')
            const skillWrap = document.querySelector('.skill')

            //Lấy vị trí của Block chứa Skill
            const positionTopOfSkillWrap = window.scrollY + skillWrap.getBoundingClientRect().top
            const heightOfWindow = window.innerHeight

            

            //Biến phần NavBar
            const navBar = document.querySelector('.nav')
            //const positionNavBarTop = window.scrollY + navBar.getBoundingClientRect().top

            
            window.onscroll = function() {

                //phần xử lí cho navBar
                
                if(htmlElement.scrollTop > 320) {
                    navBar.style.position = 'fixed';
                    navBar.style.top = 0 + 'px';
                    navBar.style["margin-top"] = 36 + 'px';

                } 
                if(htmlElement.scrollTop <= 320){
                    navBar.style.position = 'static';
                    navBar.style["margin-top"] = 0 + 'px';
                }



                
                
                if (htmlElement.scrollTop > 80) {
                    [...skillItems].forEach(function(item) {

                        item.style.animation = `${item.getAttribute('value')}%`;
                        item.style.animation = "growth 0.5s";
                    })
                }
                if (htmlElement.scrollTop < 80) {
                    
                    [...skillItems].forEach(function(item) {
                        item.style.animation = 'none';
                        
                    })

                }
                
            }
        },

        handleNavbarClick: function() {
            const navBarBtns = document.querySelectorAll('.nav__item');
            const contents = document.querySelectorAll('.content__body');
            const myseft = document.querySelector('.myseft')
            const education = document.querySelector('.education');


            [...navBarBtns].forEach(function(item) {
                item.onclick = function() {
                    [...navBarBtns].forEach(function(e) {
                        e.classList.remove('active')
                    })

                    item.classList.add('active')

                    if(item.classList.value.includes('myseft__btn')) {
                        [...contents].forEach(function(e) {
                            e.classList.remove('open')
                        })

                        myseft.classList.add('open')
                    }

                    if(item.classList.value.includes('education__btn')) {
                        [...contents].forEach(function(e) {
                            e.classList.remove('open')
                        })

                        education.classList.add('open')
                    }
                }
            })
            
        },

        start: function(){
            this.handleSkill()
            this.handleNavbarClick()
            this.handleSlider()

            
            
        }
    }

    app.start()

})()









