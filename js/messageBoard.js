! function() {
	let model = {
		DBinit: function() {
			var APP_ID = 'vqRH3AiR0XmelcIxAup41P8U-gzGzoHsz';
			var APP_KEY = 'DyFFKshejhm0dFRFIk0uuNhj';
			AV.init({appId: APP_ID,appKey: APP_KEY});
		},
		DBpush: function() {
			var TestObject = AV.Object.extend('TestObject');
			var testObject = new TestObject();
			testObject.save({
				words: 'Hello World!'
			}).then(function(object) {
				alert('LeanCloud Rocks!');
			})
		}
	}
}.call()