! function() {
	let view = {
		'scrollStepOne': $('.navList').find('li').eq(0),
		'scrollStepTwo': $('.navList').find('li').eq(1),
		'scrollStepThree': $('.navList').find('li').eq(2),
		'scrollStepFour': $('.navList').find('li').eq(3),
		'length': 4
	}

	let controller = {
		view: null,
		init: function(view) {
			this.view = view
			this.navAutoChange()
			this.pageScroll()
		},
		navAutoChange: function() {
			$(window).scroll(() => {
				console.log(window.scrollY)
				if(window.scrollY < 400) {
					this.view.scrollStepOne.addClass('navMask').siblings().removeClass('navMask')
				} else if(window.scrollY > 400 && window.scrollY < 900) {
					this.view.scrollStepTwo.addClass('navMask').siblings().removeClass('navMask')
				} else if(window.scrollY > 900 && window.scrollY < 1400) {
					this.view.scrollStepThree.addClass('navMask').siblings().removeClass('navMask')
				} else if(window.scrollY > 1400) {
					this.view.scrollStepFour.addClass('navMask').siblings().removeClass('navMask')
				}
			})
		},
		pageScroll: function(view) {
			this.view.scrollStepOne.on('click', function() {
				controller.goMove(130)
			})
			this.view.scrollStepTwo.on('click', function() {
				controller.goMove(690)
			})
			this.view.scrollStepThree.on('click', function() {
				controller.goMove(1060)
			})
			this.view.scrollStepFour.on('click', function() {
				controller.goMove(1470)
			})
		},
		goMove: function(targetTop) {
			function animate(time) {
				requestAnimationFrame(animate);
				TWEEN.update(time);
			}
			requestAnimationFrame(animate);
			let _range = targetTop - window.scrollY
			let coords = {
				y: window.scrollY
			};
			let runTime = Math.abs((_range / 100) * 300)
			if(runTime > 700) {
				runTime = 700
			}
			let tween = new TWEEN.Tween(coords)
				.to({
					y: targetTop
				}, runTime)
				.easing(TWEEN.Easing.Cubic.InOut)
				.onUpdate(function() {
					window.scrollTo(0, coords.y)
				})
				.start();
		},
	}
	controller.init(view)
}.call()