! function() {
	let view = {
		'messageArea': $('.messageArea'),
		'form': $('.submitArea').find('form')
	}

	let model = {
		DBinit: function() {
			let APP_ID = 'vqRH3AiR0XmelcIxAup41P8U-gzGzoHsz'
			let APP_KEY = 'DyFFKshejhm0dFRFIk0uuNhj'
			AV.init({appId: APP_ID,appKey: APP_KEY})
		},
		DBpush: function(name, content) {
			let Message = AV.Object.extend('Message')
			let message = new Message()
			return message.save({'name': name,'content': content})
		},
		DBpull: function() {
			let query = new AV.Query('Message')
			return query.find()
		}
	}
	
	let controller = {
		view: null,
		model: null,
		init: function(view, model) {
			this.view = view
			this.model = model
			this.model.DBinit()
			this.pullMessage()
			this.bindEvents()
		},
		pullMessage: function() {
			this.model.DBpull().then(
				(messages)=> {
					let array = messages.map((item)=> item.attributes )
          			array.forEach((item)=>{
            			this.view.messageArea.find('ul').append(`<li>${item.name}: ${item.content}</li>`)
          			})
          			this.messageAreaInit()
				}
			)
		},
		pushMessage: function() {
			let name = view.form.find('input[name=name]').val()
			let content = view.form.find('input[name=content]').val()
			this.model.DBpush(name, content)
				.then((obj)=>{
					this.view.messageArea.find('ul').append(`<li>${obj.attributes.name}: ${obj.attributes.content}</li>`)
				})
				.then(
					()=>{},
					()=>{
						alert('提交失败')
					}
				)
		},
		bindEvents: function() {
			this.view.form.submit((e)=> {
				e.preventDefault()
				this.pushMessage()
			})
		},
		messageAreaInit: function() {
			this.view.messageArea.scrollTop(this.view.messageArea.find('ul').height())
		},

	}
	controller.init(view, model)
}.call()