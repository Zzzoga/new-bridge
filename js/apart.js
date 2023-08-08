const modalApart = document.querySelector('.modal__apart')
const modalApartDetail = document.querySelector('.modal__apart__detail')

const modalPark = document.querySelector('.modal__park')

const apartInfo = document.querySelector('.modal__apart__item__info')
const apartInfoSquare = document.querySelector('.maii__square .maii__value')
const apartInfoFloor = document.querySelector('.maii__floor .maii__value')
const apartInfoRooms = document.querySelector('.maii__rooms .maii__value')

const apartControl = document.querySelector('.modal__apart__control')
const apartTitle= document.querySelector('.modal__apart__title')

const apartScheme = modalApartDetail.querySelector('.mad__scheme .first__floor img')
const apartSchemeAll = modalApartDetail.querySelectorAll('.mad__scheme img')
const apartTextAll = modalApartDetail.querySelectorAll('.floor__text')

const header = document.querySelector('header')

document.querySelector('a.apartment.header__control').addEventListener('click', e => {
    e.preventDefault()
    header.classList.add('active__apart')
    modalApart.style.transform = 'translateX(0%)'
})

document.querySelectorAll('.floors svg').forEach(floor => {
    floor.addEventListener('click', e => {
        e.preventDefault()
        if (e.target.closest('svg').classList.contains('floor__9')) {
            $('.modal__apart__items').slick('slickGoTo', 7);
            document.querySelector('.mac__counter__value').innerHTML = '09'
        } else if (e.target.closest('svg').classList.contains('floor__8')) {
            $('.modal__apart__items').slick('slickGoTo', 6);
            document.querySelector('.mac__counter__value').innerHTML = '08'
        } else if (e.target.closest('svg').classList.contains('floor__7')) {
            $('.modal__apart__items').slick('slickGoTo', 5);
            document.querySelector('.mac__counter__value').innerHTML = '07'
        } else if (e.target.closest('svg').classList.contains('floor__6')) {
            $('.modal__apart__items').slick('slickGoTo', 4);
            document.querySelector('.mac__counter__value').innerHTML = '06'
        } else if (e.target.closest('svg').classList.contains('floor__5')) {
            $('.modal__apart__items').slick('slickGoTo', 3);
            document.querySelector('.mac__counter__value').innerHTML = '05'
        } else if (e.target.closest('svg').classList.contains('floor__4')) {
            $('.modal__apart__items').slick('slickGoTo', 2);
            document.querySelector('.mac__counter__value').innerHTML = '04'
        } else if (e.target.closest('svg').classList.contains('floor__3')) {
            $('.modal__apart__items').slick('slickGoTo', 1);
            document.querySelector('.mac__counter__value').innerHTML = '03'
        } else if (e.target.closest('svg').classList.contains('floor__2')) {
            $('.modal__apart__items').slick('slickGoTo', 0);
            document.querySelector('.mac__counter__value').innerHTML = '02'
        } 
        header.classList.add('active__apart')
        modalApart.style.transform = 'translateX(0%)'
    })
})

document.querySelector('.apart.back__btn').addEventListener('click', e => {
    e.preventDefault()
    if (e.target.closest('.apart.back__btn').querySelector('.apart.back__btn .back__btn__text').textContent === 'К выбору этажа') {
        modalApart.style.transform = 'translateX(100%)'
        header.classList.remove('active__apart')
        $('.modal__apart__items').slick('slickGoTo', 0);
        document.querySelector('.mac__counter__value').innerHTML = '02'
    } 

    if (e.target.closest('.apart.back__btn').querySelector('.apart.back__btn .back__btn__text').textContent === 'К выбору квартиры') {
        modalApartDetail.style.transform = 'translateX(100%)'
        modalApartDetail.querySelector('.mad__scheme .second__floor').style.display = 'none'
        modalApartDetail.querySelector('.mad__scheme .second__floor').style.display = 'none'
        apartSchemeAll.forEach(img => {
            img.style.maxHeight = '500px'
        })
        apartTextAll.forEach(text => {
            text.style.display = 'none'
        })

        setTimeout(()=> {
            e.target.closest('.back__btn').querySelector('.apart.back__btn .back__btn__text').innerHTML = 'К выбору этажа'
            document.querySelector('.modal__apart__control').opacity = 1
            apartControl.style.opacity = 1
            apartTitle.style.opacity = 1
            apartInfo.style.opacity = 0
        }, 1000)
    } 
})

document.querySelectorAll('.mac__control.slick-arrow').forEach(arrow => {
    arrow.addEventListener('click', e => {
        document.querySelector('.mac__counter__value').innerHTML = `0${document.querySelector('.modal__apart ul.slick-dots li.slick-active button').innerHTML * 1 + 1}`
    })
})

// PARKING

document.querySelector('.parking').addEventListener('click', e => {
    e.preventDefault()
    header.classList.add('active__apart')
    modalPark.style.transform = 'translateX(0%)'
})

document.querySelector('.park.back__btn').addEventListener('click', e => {
    e.preventDefault()
    modalPark.style.transform = 'translateX(100%)'
    header.classList.remove('active__apart')
})

document.querySelector('.mpc__up.mac__control').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('.modal__park__items').style.transform = 'translateY(100%)'
    document.querySelector('.mpc__up.mac__control').style.opacity = '0'
    document.querySelector('.mpc__down.mac__control').style.opacity = '1'
    document.querySelector('.mpc__counter__value').innerHTML = '2'
})

document.querySelector('.mpc__down.mac__control').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('.modal__park__items').style.transform = 'translateY(0%)'
    document.querySelector('.mpc__up.mac__control').style.opacity = '1'
    document.querySelector('.mpc__down.mac__control').style.opacity = '0'
    document.querySelector('.mpc__counter__value').innerHTML = '1'
})

// DETAIL APART VIEW

document.querySelectorAll('.outer__scheme').forEach(apart => {
    apart.addEventListener('mouseover', e => {
        e.target.closest('.a__scheme').querySelector('.under__scheme').style.opacity = 1
        apartInfoSquare.innerHTML = e.target.closest('.a__scheme').dataset.square
        apartInfoFloor.innerHTML = e.target.closest('.a__scheme').dataset.floor
        apartInfoRooms.innerHTML = e.target.closest('.a__scheme').dataset.rooms
        apartInfo.style.opacity = 1
    })

    apart.addEventListener('mouseout', e => {
        e.target.closest('.a__scheme').querySelector('.under__scheme').style.opacity = 0
        apartInfo.style.opacity = 0
    })

    apart.addEventListener('click', e => {
        e.preventDefault()

        const apartParametr = e.target.closest('.a__scheme').dataset.apart

        switch (apartParametr) {
            case 'f2__a1':
                apartScheme.src = 'img/apart/floor-2-3/1.svg'
                break;
        
            case 'f2__a2':
                apartScheme.src = 'img/apart/floor-2-3/2.svg'
                break;
        
            case 'f2__a3':
                apartScheme.src = 'img/apart/floor-2-3/3.svg'
                break;
        
            case 'f2__a4':
                apartScheme.src = 'img/apart/floor-2-3/4.svg'
                break;
        
            case 'f2__a5':
                apartScheme.src = 'img/apart/floor-2-3/5.svg'
                break;
        
            case 'f2__a6':
                apartScheme.src = 'img/apart/floor-2-3/6.svg'
                break;
        
            case 'f2__a7':
                apartScheme.src = 'img/apart/floor-2-3/7.svg'
                break;
        
            case 'f2__a8':
                apartScheme.src = 'img/apart/floor-2-3/8.svg'
                break;
        
            case 'f2__a9':
                apartScheme.src = 'img/apart/floor-2-3/9.svg'
                break;
        
            case 'f2__a10':
                apartScheme.src = 'img/apart/floor-2-3/10.svg'
                break;
        
            case 'f4__a1':
                apartScheme.src = 'img/apart/floor-4-6/1.svg'
                break;
        
            case 'f4__a2':
                apartScheme.src = 'img/apart/floor-4-6/2.svg'
                break;
        
            case 'f4__a3':
                apartScheme.src = 'img/apart/floor-4-6/3.svg'
                break;
        
            case 'f4__a4':
                apartScheme.src = 'img/apart/floor-4-6/4.svg'
                break;
        
            case 'f4__a5':
                apartScheme.src = 'img/apart/floor-4-6/5.svg'
                break;
        
            case 'f4__a6':
                apartScheme.src = 'img/apart/floor-4-6/6.svg'
                break;
        
            case 'f4__a7':
                apartScheme.src = 'img/apart/floor-4-6/7.svg'
                break;
        
            case 'f4__a8':
                apartScheme.src = 'img/apart/floor-4-6/8.svg'
                break;
        
            case 'f4__a9':
                apartScheme.src = 'img/apart/floor-4-6/9.svg'
                break;
        
            case 'f7__a1':
                apartScheme.src = 'img/apart/floor-7/1.svg'
                break;
        
            case 'f7__a2':
                apartScheme.src = 'img/apart/floor-7/2.svg'
                break;
        
            case 'f7__a3':
                apartScheme.src = 'img/apart/floor-7/3.svg'
                break;
        
            case 'f7__a4':
                apartScheme.src = 'img/apart/floor-7/4.svg'
                break;
        
            case 'f7__a5':
                apartScheme.src = 'img/apart/floor-7/5.svg'
                break;
        
            case 'f7__a6':
                apartScheme.src = 'img/apart/floor-7/6.svg'
                break;
        
            case 'f8__a1':
                apartScheme.src = 'img/apart/floor-8/1.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor img').src = 'img/apart/floor-9/1.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor').style.display = 'flex'
                apartSchemeAll.forEach(img => {
                    img.style.maxHeight = '330px'
                })
                apartTextAll.forEach(text => {
                    text.style.display = 'flex'
                })
                break;
        
            case 'f8__a2':
                apartScheme.src = 'img/apart/floor-8/2.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor img').src = 'img/apart/floor-9/2.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor').style.display = 'flex'
                apartSchemeAll.forEach(img => {
                    img.style.maxHeight = '330px'
                })
                apartTextAll.forEach(text => {
                    text.style.display = 'flex'
                })
                break;
        
            case 'f8__a3':
                apartScheme.src = 'img/apart/floor-8/3.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor img').src = 'img/apart/floor-9/3.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor').style.display = 'flex'
                apartSchemeAll.forEach(img => {
                    img.style.maxHeight = '330px'
                })
                apartTextAll.forEach(text => {
                    text.style.display = 'flex'
                })
                break;
        
            case 'f8__a4':
                apartScheme.src = 'img/apart/floor-8/4.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor img').src = 'img/apart/floor-9/4.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor').style.display = 'flex'
                apartSchemeAll.forEach(img => {
                    img.style.maxHeight = '330px'
                })
                apartTextAll.forEach(text => {
                    text.style.display = 'flex'
                })
                break;
        
            case 'f8__a5':
                apartScheme.src = 'img/apart/floor-8/5.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor img').src = 'img/apart/floor-9/5.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor').style.display = 'flex'
                apartSchemeAll.forEach(img => {
                    img.style.maxHeight = '330px'
                })
                apartTextAll.forEach(text => {
                    text.style.display = 'flex'
                })
                break;
        
            case 'f8__a6':
                apartScheme.src = 'img/apart/floor-8/6.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor img').src = 'img/apart/floor-9/6.svg'
                modalApartDetail.querySelector('.mad__scheme .second__floor').style.display = 'flex'
                apartSchemeAll.forEach(img => {
                    img.style.maxHeight = '330px'
                })
                apartTextAll.forEach(text => {
                    text.style.display = 'flex'
                })
                break;
        
        
            default:
                break;
        }

        apartControl.style.opacity = 0
        apartTitle.style.opacity = 0

        setTimeout(()=> {
            modalApartDetail.style.transform = 'translateX(0%)'
            document.querySelector('.back__btn__text').textContent = 'К выбору квартиры'
        }, 500)

        setTimeout(()=> {
            apartInfoSquare.innerHTML = e.target.closest('.a__scheme').dataset.square
            apartInfoFloor.innerHTML = e.target.closest('.a__scheme').dataset.floor
            apartInfoRooms.innerHTML = e.target.closest('.a__scheme').dataset.rooms
            apartInfo.style.opacity = '1'
            apart.addEventListener('mouseout', () => {
                apartInfo.style.opacity = '1'
            })
        }, 1000)

    })
})