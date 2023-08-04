$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

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

	// GALLERY SLIDER SHOW/HIDE FUNCTION
	document.querySelector('#screen_20 .wrapper__right a.play__btn').addEventListener('click', e => {
		e.preventDefault()
		document.querySelector('html').style.overflowY = 'hidden'
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
		document.querySelector('html').style.overflowY = 'visible'
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
		document.querySelector('.video__btn').style.opacity = '0'
		document.querySelector('.video__modal__close').style.opacity = '0'
		setTimeout(()=> {
			document.querySelector('.video__modal').style.opacity = '0'
			document.querySelector('.video__modal').style.transform = 'scale(1.5)'
		}, 500)
		setTimeout(()=> {
			document.querySelector('.video__modal').style.display = 'none'
		}, 1500)
	})

	// SHOW/HIDE NEWS MODAL FUNCTIONS
	document.querySelector('.modal__news__close').addEventListener('click', (e)=> {
		e.preventDefault()
		document.querySelector('html').style.overflowY = 'visible'
		document.querySelector('.modal__news__close').style.opacity = 0
		setTimeout(()=> {
			document.querySelector('.modal__news__close').style.display = 'none'
			document.querySelector('.mnc__right').style.transform = 'translateY(100vh)'
			document.querySelector('.mnc__left').style.transform = 'translateY(-100vh)'
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
				document.querySelector('.mnc__right').style.transform = 'translateY(0vh)'
				document.querySelector('.mnc__left').style.transform = 'translateY(0vh)'
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

	

})
