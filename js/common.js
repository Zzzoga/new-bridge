$(window).load(function() {

});

function maskPhone(selector, masked = '+7 (___) ___-__-__') {
	const elems = document.querySelectorAll(selector);

	function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
			def = template.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		console.log(template);
		let i = 0,
			newValue = template.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
			});
		i = newValue.indexOf("_");
		if (i !== -1) {
			newValue = newValue.slice(0, i);
		}
		let reg = template.substr(0, this.value.length).replace(/_+/g,
			function (a) {
				return "\\d{1," + a.length + "}";
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
			this.value = newValue;
		}
		if (event.type === "blur" && this.value.length < 5) {
			this.value = "";
		}

	}

	for (const elem of elems) {
		elem.addEventListener("input", mask);
		elem.addEventListener("focus", mask);
		elem.addEventListener("blur", mask);
	}
	
}

document.addEventListener('DOMContentLoaded', () => {

	if (window.localStorage.getItem('preloaderIsShown') !== 'done') {
		setTimeout(()=> {
			document.querySelector('.preloader__overlay__left').style.left = '-210px'
			document.querySelector('.preloader__overlay__right').style.left = '110px'
		}, 2500)
		setTimeout(()=> {
			document.querySelector('.preloader__overlay__left').style.display = 'none'
			document.querySelector('.preloader__overlay__right').style.display = 'none'
			document.querySelector('.preloader__wrapper').style.maxWidth = '410px'
		}, 5000)
		setTimeout(()=> {
			document.querySelector('.preloader').style.transform = 'translateY(-100%)'
		}, 8000)
	} else {
		setTimeout(()=> {
			$('.preloader').css('opacity', '0');
		}, 1000)
		setTimeout(()=> {
			$('.preloader').css('display', 'none');
		}, 1500)
	}

	maskPhone('input[type="tel"]')

	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});

	// SHOW/HIDE MENU FUNCTION
	document.querySelector('a.menu.header__control').addEventListener('click', (e) => {
		e.preventDefault()
		if (document.querySelector('a.menu.header__control').classList.contains('active__menu')) {
			document.querySelector('html').style.overflowY = 'visible'
			document.querySelector('.modal__nav__wrapper').style.opacity = '0'
			setTimeout(()=> {
				document.querySelector('.modal__nav').style.opacity = '0'
				document.querySelector('a.menu.header__control').classList.remove('active__menu')
				document.querySelector('header').classList.remove('active__menu')
				document.querySelector('.menu__text').textContent = 'Меню'
			}, 500)
			setTimeout(()=> {
				document.querySelector('.modal__nav').style.display = 'none'
			}, 1000)
		} else {
			document.querySelector('a.menu.header__control').classList.add('active__menu')
			document.querySelector('html').style.overflowY = 'hidden'
			document.querySelector('.modal__nav').style.display = 'flex'
			setTimeout(()=> {
				document.querySelector('.modal__nav').style.opacity = '1'
			}, 0)
			setTimeout(()=> {
				document.querySelector('.modal__nav__wrapper').style.opacity = '1'
			}, 500)
			document.querySelector('.menu__text').textContent = 'Закрыть'
			document.querySelector('header').classList.add('active__menu')
		}
	})

	// MENU LINK CLICKED FUNCTIONS
	function scrollTo(hash) {
		location.hash = "#" + hash;
	}
	
	document.querySelectorAll('.nav__item').forEach(link => {
		link.addEventListener('click', e => {
			setTimeout(() => {
				document.querySelector('html').style.overflowY = 'visible'
				document.querySelector('.modal__nav__wrapper').style.opacity = '0'
			}, 250);
				setTimeout(()=> {
					document.querySelector('.modal__nav').style.opacity = '0'
					document.querySelector('a.menu.header__control').classList.remove('active__menu')
					document.querySelector('header').classList.remove('active__menu')
					document.querySelector('.menu__text').textContent = 'Меню'
				}, 750)
				setTimeout(()=> {
					document.querySelector('.modal__nav').style.display = 'none'
				}, 1250)
		})
	})

	document.querySelectorAll('.nav__post__item').forEach(link => {
		link.addEventListener('click', e => {
			setTimeout(() => {
				document.querySelector('html').style.overflowY = 'visible'
				document.querySelector('.modal__nav__wrapper').style.opacity = '0'
			}, 250);
				setTimeout(()=> {
					document.querySelector('.modal__nav').style.opacity = '0'
					document.querySelector('a.menu.header__control').classList.remove('active__menu')
					document.querySelector('header').classList.remove('active__menu')
					document.querySelector('.menu__text').textContent = 'Меню'
				}, 750)
				setTimeout(()=> {
					document.querySelector('.modal__nav').style.display = 'none'
				}, 1250)
		})
	})

	// SHOW/HIDE MAP SECTION
	document.querySelector('.map__more').addEventListener('click', (e) => {
		e.preventDefault()
		document.querySelector('html').style.overflowY = 'hidden'
		document.querySelector('.modal__map').style.display = 'flex'
		setTimeout(()=> {
			document.querySelector('.modal__map').style.opacity = '1'
		}, 500)
		setTimeout(()=> {
			document.querySelector('.modal__map__items').style.opacity = '1'
		}, 1000)
		setTimeout(()=> {
			document.querySelector('.modal__map__close').style.opacity = '1'
		}, 1500)
		document.querySelector('header').classList.add('active__map')
	})

	document.querySelector('.modal__map__close').addEventListener('click', (e) => {
		e.preventDefault()
		document.querySelector('html').style.overflowY = 'visible'
		document.querySelector('.modal__map__close').style.opacity = '0'
		setTimeout(()=> {
			document.querySelector('.modal__map__items').style.opacity = '0'
		}, 500)
		setTimeout(()=> {
			document.querySelector('.modal__map').style.opacity = '0'
			document.querySelector('header').classList.remove('active__map')
		}, 1000)
		setTimeout(()=> {
			document.querySelector('.modal__map').style.display = 'none'
		}, 1500)
	})

	// MODAL NAV IMG CHANGE FUNCTION
	const modalImgWrapper = document.querySelector('.modal__nav__img')
	if (document.documentElement.clientWidth > 992) {
		document.querySelector('.nav__item.item_1').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(0vh)'
		})
		document.querySelector('.nav__item.item_2').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-100vh)'
		})
		document.querySelector('.nav__item.item_3').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-200vh)'
		})
		document.querySelector('.nav__item.item_4').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-300vh)'
		})
		document.querySelector('.nav__item.item_5').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-400vh)'
		})
	} else if (document.documentElement.clientWidth <= 992 && document.documentElement.clientWidth > 540) {
		document.querySelector('.nav__item.item_1').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(0vh)'
		})
		document.querySelector('.nav__item.item_2').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-50vh)'
		})
		document.querySelector('.nav__item.item_3').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-100vh)'
		})
		document.querySelector('.nav__item.item_4').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-150vh)'
		})
		document.querySelector('.nav__item.item_5').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-200vh)'
		})
	} else if (document.documentElement.clientWidth <= 540) {
		document.querySelector('.nav__item.item_1').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(0vh)'
		})
		document.querySelector('.nav__item.item_2').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-25vh)'
		})
		document.querySelector('.nav__item.item_3').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-50vh)'
		})
		document.querySelector('.nav__item.item_4').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-75vh)'
		})
		document.querySelector('.nav__item.item_5').addEventListener('mouseover', e => {
			modalImgWrapper.style.transform = 'translateY(-100vh)'
		})
	}
	

	// GALLERY SLIDER SHOW/HIDE FUNCTION
	document.querySelector('#screen_20 .wrapper__right a.play__btn').addEventListener('click', e => {
		e.preventDefault()
		// document.querySelector('html').style.overflowY = 'hidden'
		document.querySelector('#screen_20 .wrapper__right').style.opacity = 0
		document.querySelector('#screen_20 .wrapper__left').style.transform = 'translateX(-100%)'
		setTimeout(()=> {
			document.querySelector('#screen_20 .gallery__modal').style.zIndex = 999
			document.querySelector('#screen_20 .gallery__modal .slider__control').style.display = 'flex'
		}, 500)
		setTimeout(()=> {
			document.querySelector('#screen_20 .gallery__modal .slider__control').style.opacity = 1
			document.querySelector('#screen_20 .modal__gallery__close').style.display = 'flex'
		}, 1000)
		setTimeout(()=> {
			document.querySelector('#screen_20 .modal__gallery__close').style.opacity = 1
		}, 1500)
	})
	
	document.querySelector('#screen_20 .modal__gallery__close').addEventListener('click', e => {
		e.preventDefault()
		// document.querySelector('html').style.overflowY = 'visible'
		document.querySelector('#screen_20 .modal__gallery__close').style.opacity = 0
		setTimeout(()=> {
			document.querySelector('#screen_20 .modal__gallery__close').style.display = 'none'
			document.querySelector('#screen_20 .gallery__modal .slider__control').style.opacity = 0 
		}, 500)
		setTimeout(()=> {
			document.querySelector('#screen_20 .gallery__modal .slider__control').style.display = 'none'
			document.querySelector('#screen_20 .gallery__modal').style.zIndex = 1
			document.querySelector('#screen_20 .wrapper__left').style.transform = 'translateX(0%)'
			document.querySelector('#screen_20 .wrapper__right').style.opacity = 1
		}, 1000)
	})

	// MODAL VIDEO FUNCTION
	document.querySelector('.inner__wrapper__left a.play__btn').addEventListener('click', e => {
		e.preventDefault()
		document.querySelector('html').style.overflowY = 'hidden'
		document.querySelector('.video__modal').style.display = 'flex'
		setTimeout(()=> {
			document.querySelector('.video__modal').style.opacity = '1'
			document.querySelector('.video__modal').style.transform = 'scale(1)'
		}, 500)
		setTimeout(()=> {
			document.querySelector('.video__btn').style.opacity = '1'
			document.querySelector('.video__modal__close').style.opacity = '1'
		}, 1500)
	})

	document.querySelector('.video__modal__close').addEventListener('click', e => {
		e.preventDefault()
		document.querySelector('html').style.overflowY = 'visible'
		document.querySelector('.video__modal__container video').pause()
		document.querySelector('.video__btn').style.opacity = '0'
		document.querySelector('.video__modal__close').style.opacity = '0'
		setTimeout(()=> {
			document.querySelector('.video__modal').style.opacity = '0'
			document.querySelector('.video__modal').style.transform = 'scale(1.5)'
		}, 500)
		setTimeout(()=> {
			document.querySelector('.video__modal').style.display = 'none'
			document.querySelector('.video__modal__container img').style.opacity = '1'
			document.querySelector('.video__modal__container img').style.display = 'flex'
			document.querySelector('a.video__btn').style.display = 'flex'
		}, 1500)
	})

	document.querySelector('a.video__btn').addEventListener('click', e => {
		e.preventDefault()
		document.querySelector('a.video__btn').style.opacity = '0'
		setTimeout(()=> {
			document.querySelector('a.video__btn').style.display = 'none'
			document.querySelector('.video__modal__container img').style.opacity = '0'
		}, 500)
		setTimeout(()=> {
			document.querySelector('.video__modal__container img').style.display = 'none'
			document.querySelector('.video__modal__container video').play()
		}, 1000)
		
	})

	// SHOW/HIDE NEWS MODAL FUNCTIONS
	document.querySelector('.modal__news__close').addEventListener('click', (e)=> {
		e.preventDefault()
		document.querySelector('html').style.overflowY = 'visible'
		document.querySelector('.modal__news__close').style.opacity = 0
		setTimeout(()=> {
			document.querySelector('.modal__news__close').style.display = 'none'
			if (document.documentElement.clientWidth > 992) {
				document.querySelector('.mnc__right').style.transform = 'translateY(100vh)'
				document.querySelector('.mnc__left').style.transform = 'translateY(-100vh)'
			} else if (document.documentElement.clientWidth <= 992) {
				document.querySelector('.mnc__right').style.transform = 'translateX(100vw)'
				document.querySelector('.mnc__left').style.transform = 'translateX(-100vw)'
			}
		}, 500)
		setTimeout(()=> {
			document.querySelector('.modal__news').style.opacity = 0
			document.querySelector('header').classList.remove('active__map')
			document.querySelector('.mnc__right').style.display = 'none'
			document.querySelector('.mnc__left').style.display = 'none'
		}, 1500)
		setTimeout(()=> {
			document.querySelector('.modal__news').style.display = 'none'
		}, 2000)
	})
	
	document.querySelectorAll('.news__item').forEach(news => {
		news.addEventListener('click', e => {
			e.preventDefault()
			document.querySelector('html').style.overflowY = 'hidden'
			document.querySelector('.modal__news').style.display = 'flex'
			document.querySelector('header').classList.add('active__map')
			setTimeout(()=> {
				document.querySelector('.modal__news').style.opacity = 1
				document.querySelector('.mnc__right').style.display = 'flex'
				document.querySelector('.mnc__left').style.display = 'flex'
				document.querySelector('.modal__news__close').style.display = 'flex'
			}, 500)
			setTimeout(()=> {
				document.querySelector('.modal__news__close').style.opacity = 1
			}, 1000)
			setTimeout(()=> {
				if (document.documentElement.clientWidth > 992) {
					document.querySelector('.mnc__right').style.transform = 'translateY(0vh)'
					document.querySelector('.mnc__left').style.transform = 'translateY(0vh)'
				} else if (document.documentElement.clientWidth <= 992) {
					document.querySelector('.mnc__right').style.transform = 'translateX(0vw)'
					document.querySelector('.mnc__left').style.transform = 'translateX(0vw)'
				}
			}, 1500)
		})
	})

	// APART FLOORS FUNCTION

	document.querySelectorAll('.apart__cord svg > *').forEach(svg => {
		svg.addEventListener('mouseover', e => {
			e.target.closest('svg').style.opacity = 1
			e.target.closest('svg').style.cursor = 'url("../img/apart__cursor.svg"), auto'
			e.target.closest('svg').style.zIndex = 9
			const floor = e.target.closest('svg').classList.value
			switch (floor) {
				case 'floor__2':
					document.querySelector('.high .ai__title').innerHTML = '02'
					document.querySelector('.count__of__sales .ai__title').innerHTML = '05'
					document.querySelector('.square .ai__title').innerHTML = '34-105 м<sup>2</sup>'
					break;
			
				case 'floor__3':
					document.querySelector('.high .ai__title').innerHTML = '03'
					document.querySelector('.count__of__sales .ai__title').innerHTML = '07'
					document.querySelector('.square .ai__title').innerHTML = '32-109 м<sup>2</sup>'
					break;
			
				case 'floor__4':
					document.querySelector('.high .ai__title').innerHTML = '04'
					document.querySelector('.count__of__sales .ai__title').innerHTML = '06'
					document.querySelector('.square .ai__title').innerHTML = '34-105 м<sup>2</sup>'
					break;
			
				case 'floor__5':
					document.querySelector('.high .ai__title').innerHTML = '05'
					document.querySelector('.count__of__sales .ai__title').innerHTML = '05'
					document.querySelector('.square .ai__title').innerHTML = '48-117 м<sup>2</sup>'
					break;
			
				case 'floor__6':
					document.querySelector('.high .ai__title').innerHTML = '06'
					document.querySelector('.count__of__sales .ai__title').innerHTML = '05'
					document.querySelector('.square .ai__title').innerHTML = '66-94 м<sup>2</sup>'
					break;
			
				case 'floor__7':
					document.querySelector('.high .ai__title').innerHTML = '07'
					document.querySelector('.count__of__sales .ai__title').innerHTML = '07'
					document.querySelector('.square .ai__title').innerHTML = '34-105 м<sup>2</sup>'
					break;
			
				case 'floor__8':
					document.querySelector('.high .ai__title').innerHTML = '08'
					document.querySelector('.count__of__sales .ai__title').innerHTML = '04'
					document.querySelector('.square .ai__title').innerHTML = '39-89 м<sup>2</sup>'
					break;
			
				case 'floor__9':
					document.querySelector('.high .ai__title').innerHTML = '09'
					document.querySelector('.count__of__sales .ai__title').innerHTML = '04'
					document.querySelector('.square .ai__title').innerHTML = '55-94 м<sup>2</sup>'
					break;
			
				default:
					break;
			}
		})
	
		svg.addEventListener('mouseout', e => {
			e.target.closest('svg').style.opacity = 0
			e.target.closest('svg').style.cursor = 'default'
			e.target.closest('svg').style.zIndex = 1
		})
	})

	// SHOW/HIDE CALLING MODAL
	document.querySelector('.modal__call.calling .modal__call__close').addEventListener('click', e => {
		document.querySelector('html').style.overflowY = 'visible'
		e.preventDefault()
		document.querySelector('.modal__call.calling .modal__call__wrapper').style.opacity = 0
		setTimeout(() => {
			document.querySelector('.modal__call.calling').style.opacity = 0
		}, 500)
		setTimeout(() => {
			document.querySelector('.modal__call.calling').style.display = 'none'
		}, 1000)
	})

	document.querySelector('.modal__call.book .modal__call__close').addEventListener('click', e => {
		document.querySelector('html').style.overflowY = 'visible'
		e.preventDefault()
		document.querySelector('.modal__call.book .modal__call__wrapper').style.opacity = 0
		setTimeout(() => {
			document.querySelector('.modal__call.book').style.opacity = 0
		}, 500)
		setTimeout(() => {
			document.querySelector('.modal__call.book').style.display = 'none'
		}, 1000)
	})

	document.querySelector('a.call__reverse.header__control').addEventListener('click', e => {
		document.querySelector('html').style.overflowY = 'hidden'
		e.preventDefault()
		document.querySelector('.modal__call.calling').style.display = 'flex'
		setTimeout(() => {
			document.querySelector('.modal__call.calling').style.opacity = 1
		}, 500)
		setTimeout(() => {
			document.querySelector('.modal__call.calling .modal__call__wrapper').style.opacity = 1
		}, 1000)
	})

	document.querySelector('a.mad__book').addEventListener('click', e => {
		document.querySelector('html').style.overflowY = 'hidden'
		e.preventDefault()
		document.querySelector('.modal__call.book').style.display = 'flex'
		setTimeout(() => {
			document.querySelector('.modal__call.book').style.opacity = 1
		}, 500)
		setTimeout(() => {
			document.querySelector('.modal__call.book .modal__call__wrapper').style.opacity = 1
		}, 1000)
	})

	// SECTIONS SLIDER FUNCTIONS

	document.querySelector('.screen_6 span.all__item').innerHTML = document.querySelectorAll('.screen_6 ul.slick-dots li').length
	document.querySelector('.screen_7 span.all__item').innerHTML = document.querySelectorAll('.screen_7 ul.slick-dots li').length
	document.querySelector('.screen_15 span.all__item').innerHTML = document.querySelectorAll('.screen_15 ul.slick-dots li').length
	document.querySelector('.gallery__modal .all__item').innerHTML = document.querySelectorAll('.gallery__slider__item').length

	document.querySelectorAll('.screen_6 .slider__control .slider__arrow').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			document.querySelector('.screen_6 span.current.color').innerHTML = document.querySelector('.screen_6 ul.slick-dots li.slick-active button').innerHTML
		})
	})

	document.querySelectorAll('.screen_7 .slider__control .slider__arrow').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			document.querySelector('.screen_7 span.current.color').innerHTML = document.querySelector('.screen_7 ul.slick-dots li.slick-active button').innerHTML
		})
	})

	document.querySelectorAll('.screen_15 .slider__control .slider__arrow').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			document.querySelector('.screen_15 span.current.color').innerHTML = document.querySelector('.screen_15 ul.slick-dots li.slick-active button').innerHTML
		})
	})

	document.querySelectorAll('.slider__arrow').forEach(btn => {
		btn.addEventListener('click', e => {
			document.querySelector('.gallery__modal .current').innerHTML = document.querySelector('.gallery__modal .slick-active').dataset.slickIndex*1 + 1
		})
	})

	// GALLERY CHANGE MONTH/YEAR FUNCTIONS
	document.querySelectorAll('.inner__item__value.month').forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			document.querySelectorAll('.inner__item__value.month').forEach(month => {
				month.classList.remove('active')
			})
			e.target.closest('.inner__item__value.month').classList.add('active')
		})
	})

	// OTHERS
	if (document.documentElement.clientWidth <= 540) {
		document.querySelector('.mm__top img').src = '/img/map__mob__small.svg'
		document.querySelector('.mm__bottom img').src = '/img/map__full__small.png'
		document.querySelector('.footer__wrapper .new__bridge').innerHTML = 'NB'
	}
	

	window.localStorage.setItem('preloaderIsShown', 'done')
	
})
