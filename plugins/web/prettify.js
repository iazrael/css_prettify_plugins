;(function(context, undefined){
	
	var isObject = function(obj){
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
	
	var trim = function(text){
		if(!text){
			return '';
		}
		return text.replace(/^\s+|\s+$/g, '');
	}

	var toString = function(obj){
		var str = '';
		for(var i in obj){
			if(obj.hasOwnProperty(i)){
				if(isObject(obj[i])){
					str += i + '{\n' +  toString(obj[i]) + '}\n';
				}else{
					str += '\t' + i + ': ' + obj[i] + ';\n';
				}
			}
		}
		return str;
	}
	
	var PRIVATE_PREFIXS = [
		'-webkit-',
		'-moz-',
		'-ms-',
		'-o-'
	];
	
    /**
     * prefix2W3C
     **/
    function Normalizer(){
		
    }

    Normalizer.prototype = {
        /**
         * 预处理
         **/
        preprocess: function(cssText){
            return cssText;
        },
        convert: function(cssText){
			var styleSheet = {};
			var ruleList = cssText.split('}');
			var selector, rule, styleList, style, declarList, declar, temp;
			for(var i in ruleList){
				temp = ruleList[i].split('{');
				selector = trim(temp[0]);
				style = trim(temp[1]);
				if(!selector || !style){
					continue;
				}
				declarList = style.split(';');
				styleList = styleSheet[selector] = {};
				for(var j in declarList){
					declar = declarList[j].split(':');
					declar[0] = trim(declar[0]);
					declar[1] = trim(declar[1]);
					if(declar[0] && declar[1]){
						styleList[declar[0]] = declar[1];
					}
				}
			}
			console.log(styleSheet);
			return styleSheet;
		},
		clear: function(styleSheet){
			var styleList, prop;
			for(var i in styleSheet){
				styleList = styleSheet[i];
				for(var j in styleList){
					prop = j.replace(/^-(webkit|moz|ms|o)-/, '');
					if(prop !== j){
						if(!styleList[prop]){
							styleList[prop] = styleList[j];
							delete styleList[j];
						}else if(styleList[prop] === styleList[j]){
							delete styleList[j];
						}
					}
				}
			}
			return styleSheet;
		},
        execute: function(cssText){
            cssText = this.preprocess(cssText);
            //...
			var styleSheet = this.convert(cssText);
			
			styleSheet = this.clear(styleSheet);
			
			cssText = toString(styleSheet);
            cssText = this.postprocess(cssText);
            return cssText;
        },
        
        /**
         * 后处理
         **/
        postprocess: function(cssText){
            return cssText;
        }
    };
    
	var NEED_PREFIX_PROPERTY = {
		'border-radius': 1,
		'box-shadow': 1
	};
	
    /**
     * w3c2Prefix
     **/
    function Nonormalizer(){
    }
    
    Nonormalizer.prototype = {
        /**
         * 预处理
         **/
        preprocess: function(cssText){
            return cssText;
        },
        convert: function(cssText){
			var styleSheet = {};
			var ruleList = cssText.split('}');
			var selector, rule, styleList, style, declarList, declar, temp;
			for(var i in ruleList){
				temp = ruleList[i].split('{');
				selector = trim(temp[0]);
				style = trim(temp[1]);
				if(!selector || !style){
					continue;
				}
				declarList = style.split(';');
				styleList = styleSheet[selector] = {};
				for(var j in declarList){
					declar = declarList[j].split(':');
					declar[0] = trim(declar[0]);
					declar[1] = trim(declar[1]);
					if(declar[0] && declar[1]){
						styleList[declar[0]] = declar[1];
					}
				}
			}
			console.log(styleSheet);
			return styleSheet;
		},
        execute: function(cssText){
            cssText = this.preprocess(cssText);
            //...
			var styleSheet = this.convert(cssText);
			var styleList, prop;
			for(var i in styleSheet){
				styleList = styleSheet[i];
				for(var j in styleList){
					prop = j.replace(/^-(webkit|moz|ms|o)-/, '');
					if(prop !== j){
						if(!styleList[prop]){
							styleList[prop] = styleList[j];
							delete styleList[j];
						}else if(styleList[prop] === styleList[j]){
							delete styleList[j];
						}
					}
				}
			}
			cssText = toString(styleSheet);
            cssText = this.postprocess(cssText);
            return cssText;
        },
        
        /**
         * 后处理
         **/
        postprocess: function(cssText){
            return cssText;
        }
    };
    
	context.Normalizer = Normalizer;
	context.Nonormalizer = Nonormalizer;
    
})(window);