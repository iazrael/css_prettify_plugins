;jQuery(function($){
    var normalizer = new Normalizer();
    
    var nonormalizer = new Nonormalizer();
    
    var $source = $('#source');
    var $target = $('#target');
    var $prefix2W3C = $('#prefix2W3C');
    var $w3cPrefix = $('#w3cPrefix');
    
    
    $prefix2W3C.click(function(e){
        var text = $source.val();
        
        text = normalizer.execute(text);
        
        $target.val(text);
        
    });
    
    $w3cPrefix.click(function(e){
        var text = $target.val();
        
        text = nonormalizer.execute(text);
        
        $source.val(text);
    });
    
    
});