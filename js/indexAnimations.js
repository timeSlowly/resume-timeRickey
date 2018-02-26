! function() {
	let view = {
		'nav': $('nav'),
		'skills': $('.skills'),
		'portfolio': $('.portfolio'),
		'messageBoard': $('.messageBoard'),
		'length': 3
	}

	let controller = {
		view: null,
		init: function() {
			this.view = view
			this.navSticky()
			this.containerRise()
			this.skillsAnimation()
			this.pageInitDown()
		},
		navSticky: function() {
			$(window).scroll(() => {
				(window.scrollY > 200) ? this.view.nav.addClass('sticky'): this.view.nav.removeClass('sticky')
			})
		},
		skillsAnimation: function() {
			view = this.view
			$(window).scroll(function skillsFn1() {
				if(window.scrollY >= 400) {
					view.skills.find('li').addClass('active')
					$(this).unbind('scroll', skillsFn1)
				}
			})
		},
		containerRise: function() {
			$(window).scroll(() => {
				if(window.scrollY >= 155) {
					view.skills.addClass('active')
				}
				if(window.scrollY >= 700) {
					view.portfolio.addClass('active')
				}
				if(window.scrollY >= 1150) {
					view.messageBoard.addClass('active')
				}
			})
		},
		pageInitDown: function() {
			setTimeout(()=> {
				loadingCover.classList.remove('active')
			}, 1000)
		}
	}
	controller.init(view)
}.call()