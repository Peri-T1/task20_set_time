const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')  //foto
const tabsWrapper = document.querySelector('.tabheader__items')

const hideTabContent = () => {
    tabsContent.forEach((item) => {
            
            item.style.display = 'none'
    })
    tabs.forEach((item) => { 
               item.classList.remove('tabheader__item_active')
    })
}
hideTabContent()

const showTabContent = (i = 0) => {
   tabsContent[i].style.display = 'block'
   
   tabs[i].classList.add('tabheader__item_active')
   
} 
   
let i = 0
showTabContent(i)
setInterval(() => { 
    hideTabContent()
   showTabContent(i)
 i++
 if(i >= tabs.length) i = 0;
}, 2000)

tabsWrapper.addEventListener('click', (e) => {
    const target = e.target
    if(target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if(target === item){
                hideTabContent()
                showTabContent(i)
            }
                })    }
        }) 
          
    const modal = document.querySelector('.modal')
    const modalOpenBtn = document.querySelector('.btn_white')
     const modalCloseBtn = document.querySelector('.modal__close')
        const handleOpenModal = () => {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.classList.add('overflow')
        }
                     
    const handleCloseModal = (event) => {
        modal.classList.remove('show')
        modal.classList.add('hide')
        document.body.classList.remove('overflow')
       }

       modal.addEventListener('click', function(event){
        if(!event.target.closest('.modal__content')){
            handleCloseModal(event.target.closest('.modal')) 
        }})
    
    modalOpenBtn.addEventListener('click', handleOpenModal)
    modalCloseBtn.addEventListener('click', handleCloseModal)
    
            const modalImg = document.querySelector('.modalImg')
                 
        const handleOpenModalImg = () => {
            modalImg.classList.add('show')
            modalImg.classList.remove('hide')
            document.body.classList.add('overflow')
            }
                               
        const handleCloseModalImg = (event) => {
            modalImg.classList.remove('show')
            modalImg.classList.add('hide')
            document.body.classList.remove('overflow')
             }
             modalImg.addEventListener('click', function(event){
                if(!event.target.closest('.modalImg_content')){
                    handleCloseModalImg(event.target.closest('.modalImg')) 
                }
             })
           
//-------menu--------

            class Menu {
                constructor(img, alt, title, description, price){
                    this.img = img
                    this.alt = alt
                    this.title = title
                    this.description = description
                    this.price = price
                }
                render(){
                    const wrapper = document.querySelector("#cardWrapper")
                    const block = document.createElement("div")
        
                    block.innerHTML = `
                    <div class="menu__item">
                        <img src="${this.img}" alt="${this.alt}">
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.description}
                            
                        </div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                    </div>
                    `
                    wrapper.append(block)
                }
              }              

            const fetchMenu = async () => {
                const request = await fetch('data.json')
                const response = await request.json()
                return response
                          }
                          
            fetchMenu().then((data) => {
                data.menu.forEach(({img, alt, title, description, price}) => {
                    new Menu(img, alt, title, description, price).render()
                })
                
            })
           

            // timer ----------------


const deadline = "2024-5-14 18:40"
const getTime = (deadline) => {
    const time = new Date(deadline) - new Date
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((time / (1000 * 60 )) %60) 
    const seconds = Math.floor(time / (1000) % 60)

    return {
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}
const setTime = (deadline) => {
    const days = document.querySelector("#days")
    const hours = document.querySelector("#hours")
    const minutes = document.querySelector("#minutes")
    const seconds = document.querySelector("#seconds")
   
    const makeZero = (num) => {
        if(num > 0 && num < 10) {
            return `0${num}`
        }else{
            return num
        }
        }
    
    const updateClock = () => {
        const t = getTime(deadline)
        days.innerHTML = makeZero(t.days)
        hours.innerHTML = makeZero(t.hours)
        minutes.innerHTML = makeZero(t.minutes)
        seconds.innerHTML = makeZero(t.seconds)
        if(t.total <= 0){
              days.innerHTML = 0
              hours.innerHTML = 0
              minutes.innerHTML = 0
              seconds.innerHTML = 0
              clearInterval(timeInterval)
              
             }
    }       
      timeInterval = setInterval((updateClock),1000)
             }
        setTime(deadline)

//---------form------------------
        const forms = document.querySelectorAll('form') 
        
        const postData = async (url, data) => {
            const request = await fetch(url, {
                method: "POST",
                body: data
            })
            return request
        }
        const bindPostData = (form) => {
        form.addEventListener('submit', (e) => {
        e.prevent.Default()
        
         const formData = new FormData(form)
        
         const formDataObject = {}
         
        formData.forEach((item, name) => {
        formDataObject[name] = item
        
        })
        
        const stringifyObj = JSON.stringify(formDataObject)
        
        postData("server.php", stringifyObj)
        
        }
        )}
           forms.forEach((form) => {
        
           })


   
