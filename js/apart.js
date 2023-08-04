const modalApart = document.querySelector('.modal__apart')
const modalApartDetail = document.querySelector('.modal__apart__detail')

const apartInfo = document.querySelector('.modal__apart__item__info')
const apartInfoSquare = document.querySelector('.maii__square .maii__value')
const apartInfoFloor = document.querySelector('.maii__floor .maii__value')
const apartInfoRooms = document.querySelector('.maii__rooms .maii__value')

const apartControl = document.querySelector('.modal__apart__control')
const apartTitle= document.querySelector('.modal__apart__title')

const header = document.querySelector('header')

document.querySelector('a.apartment.header__control').addEventListener('click', e => {
    e.preventDefault()
    header.classList.add('active__apart')
    modalApart.style.transform = 'translateX(0%)'
})

document.querySelectorAll('.floors svg').forEach(floor => {
    floor.addEventListener('click', e => {
        e.preventDefault()
        header.classList.add('active__apart')
        modalApart.style.transform = 'translateX(0%)'
    })
})

document.querySelector('.back__btn').addEventListener('click', e => {
    e.preventDefault()
    if (e.target.closest('.back__btn').querySelector('.back__btn__text').textContent === 'К выбору этажа') {
        modalApart.style.transform = 'translateX(100%)'
        header.classList.remove('active__apart')
    } 

    if (e.target.closest('.back__btn').querySelector('.back__btn__text').textContent === 'К выбору квартиры') {
        modalApartDetail.style.transform = 'translateX(100%)'
        setTimeout(()=> {
            e.target.closest('.back__btn').querySelector('.back__btn__text').innerHTML = 'К выбору этажа'
            document.querySelector('.modal__apart__control').opacity = 1
            apartControl.style.opacity = 1
            apartTitle.style.opacity = 1
            apartInfo.style.opacity = 0
        }, 1000)
    } 
})

document.querySelectorAll('.outer__scheme').forEach(apart => {
    apart.addEventListener('mouseover', e => {
        e.target.closest('div').querySelector('.under__scheme').style.opacity = 1
        apartInfoSquare.innerHTML = e.target.closest('div').dataset.square
        apartInfoFloor.innerHTML = e.target.closest('div').dataset.floor
        apartInfoRooms.innerHTML = e.target.closest('div').dataset.rooms
        apartInfo.style.opacity = 1
    })

    apart.addEventListener('mouseout', e => {
        e.target.closest('div').querySelector('.under__scheme').style.opacity = 0
        apartInfo.style.opacity = 0
    })

    apart.addEventListener('click', e => {
        e.preventDefault()
        apartControl.style.opacity = 0
        apartTitle.style.opacity = 0
        setTimeout(()=> {
            modalApartDetail.style.transform = 'translateX(0%)'
            document.querySelector('.back__btn__text').textContent = 'К выбору квартиры'
        }, 500)
        setTimeout(()=> {
            apartInfo.style.opacity = '1'
            apart.addEventListener('mouseout', () => {
                apartInfo.style.opacity = '1'
            })
        }, 1000)
    })
})


// APART FLOOR COUNTER CHANGE FUNCTION
document.querySelectorAll('.modal__apart__item.slick-slide').forEach(apart => {
    const element = apart;
    let prevState = element.classList.contains('slick-active');
    const observer = new MutationObserver((mutations) => { 
        mutations.forEach((mutation) => {
            const { target } = mutation;
    
            if (mutation.attributeName === 'class') {
                const currentState = mutation.target.classList.contains('is-busy');
                if (prevState !== currentState) {
                    console.log(apart.dataset.slickIndex);
                }
            }
        });
    });
})

