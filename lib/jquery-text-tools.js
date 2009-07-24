(function(){
  if(jQuery){
    jQuery.extend({
      link:function(text){
        return text.replace(/(href="|<a.*?>)?[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function($0, $1) {
          return $1 ? $0 : $0.link($0);
			  });
      }
    });

    jQuery.fn.extend({
      'link':function(){
        this.html(jQuery.link(this.html()));
      }
    });
  
  }
})();
