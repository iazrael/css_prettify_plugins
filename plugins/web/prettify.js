;(function(undefined){
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
        
        execute: function(cssText){
            cssText = preprocess(cssText);
            //...
            cssText = postprocess(cssText);
            return cssText;
        },
        
        /**
         * 后处理
         **/
        postprocess: function(cssText){
            return cssText;
        }
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
        
        execute: function(cssText){
            cssText = preprocess(cssText);
            //...
            cssText = postprocess(cssText);
            return cssText;
        },
        
        /**
         * 后处理
         **/
        postprocess: function(cssText){
            return cssText;
        }
    };
    
    
})();