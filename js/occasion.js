(function (factory) {

	if (typeof define === 'function' && define.amd) {

		define([], factory);

	} else if (typeof exports === 'object') {

		module.exports = factory();

	} else {

		window.carmeleon = factory();
	}

}(function () {

    function Maandprijs(opties) {
    
		this.opties = opties;
		
        this.init();
    }

    Maandprijs.prototype.init = function() {
        		
		_validateTarget.call(this);

        _calc.call(this, false);
    };

    Maandprijs.prototype.renew = function(newList) {	
		this.opties.occassionList = newList;
		
		_validateTarget.call(this);
		
        _calc.call(this, true);	
    };
	
    Maandprijs.prototype.update = function(newList) {	
		this.opties.occassionList = newList;
		
		_validateTarget.call(this);

        _calc.call(this, false);
    };

    function _validateTarget() {
				
		if (!this.opties.occassionList || this.opties.occassionList.length === 0 || this.opties.occassionList.length === undefined) {
            throw new Error("No occassions list, got: " + this.opties.occassionList);
        }	
    }
	
	function _calc(renew) {
		
		var occasion,
			financiering,
			prijs = 0,
			decimals = true;
		
		for (var i = 0; i < this.opties.occassionList.length; i++) {
			
			occasion = this.opties.occassionList[i];
			
			if(!occasion.hasAttribute("data-fin") || renew === true){
				
				if(occasion.querySelector(this.opties.prijsContainer)) prijs = occasion.querySelector(this.opties.prijsContainer).innerHTML.replace(/\D/g, '');
				//if(this.opties.formatDecimals === false){ decimals = false; }
				decimals = false;
				
				financiering = _calc_zakelijk(prijs, decimals);
				
				if(financiering.calc === 'success'){
					
					occasion.setAttribute("data-fin", "calculated");

					if (typeof this.opties.setFinanciering === 'function') {
						this.opties.setFinanciering.call(this, {occasion: occasion, financiering});
					}
					
				}else{
					
					occasion.removeAttribute("data-fin");
					
					if (typeof this.opties.onError === 'function') {
						this.opties.onError.call(this, {occasion: occasion, error: financiering.calc});
					}
					
				}				
			}
		}

	}	
	
	function _calc_zakelijk(prijs, decimals) {
				
		prijs = parseInt(prijs);
		if(prijs < 5000){
			
			return { calc: 'krediet-te-laag' };
		   
		}else{
								
			var krediet = ( Math.round( ( ( prijs / 250 ) / 3 ) * 2 ) * 250 );
			if(krediet < 5000){ krediet = 5000; }
			if(krediet > 100000){ krediet = 100000; }
			
			var maxSlot = Math.round(prijs * 0.24);
			
			var rente = krediet >= 20000 ? 0.046/12 : 0.052/12;
			var looptijd = 60;
			
			var maanden    	= looptijd,
				lening    	= -krediet - ( krediet * 4 / 100 ),
				slottermijn	= ( Math.round( ( maxSlot / 250 ) / 5 ) * 250 ),
				beginning	= 0;

			var maandbedrag = Math.round(calc_pmt(rente, maanden, lening, slottermijn, beginning) * 100) / 100;	
		
			return { 
				calc: 'success', 
				maand: '€ ' + number(maandbedrag, decimals) + ' of'
			};
					
		}		

	}	
	
	function number_format(number, decimals, dec_point, thousands_sep) {
		// http://kevin.vanzonneveld.net
		// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		var n = !isFinite(+number) ? 0 : +number, 
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			toFixedFix = function (n, prec) {
				// Fix for IE parseFloat(0.55).toFixed(0) = 0;
				var k = Math.pow(10, prec);
				return Math.round(n * k) / k;
			},
			s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
		if (s[0].length > 3) {
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}
	
	function number(number, decimals)
	{
		if (decimals === true) {
			return number_format(number, 2, ',', '.');
		}else {
			return number_format(number, 0, '', '') + ',-';
		}
	}	
	
	function calc_pmt (rate, nper, pv, fv, type) {
		if (!fv) fv = 0;
		if (!type) type = 0;

		if (rate == 0) return -(pv + fv)/nper;
		
		var pvif = Math.pow(1 + rate, nper);
		var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

		if (type == 1) {
			pmt /= (1 + rate);
		};

		return pmt;
	}
	
    return {
        maandprijs: Maandprijs
    };

}));
