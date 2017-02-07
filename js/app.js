(function() {
	new Vue({
	  	el: '.intl-tel-input',
	  	data: {
	  		countryDef: 'af',
	  		hide_country_list: true,
		    countries: countries,
		    phoneVal: '',
		    phonePre : ''
	  	},
	  	methods: {
	  		press: function(index, e) {
	  			var phone = this.phoneVal.replace(/\s*/g,''),
				maskCount = index.replace(/\s*/g,'').length;
				
	  			if(((/^\d+$/.test(e.key)) || (/^\d+$/.test(phone))  || this.phoneVal == '' || 
	  				e.key == ' ' || e.key == 'Backspace') && maskCount >= phone.length) {
	  				this.phonePre = this.phoneVal;
	  			}	

	  			this.phoneVal = this.phonePre;
	  		}
	  	}
	});
})();