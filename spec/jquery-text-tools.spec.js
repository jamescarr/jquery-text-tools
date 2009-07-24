describe 'jquery text tools' 
  
    describe 'static api'  
      it 'should linkify text that contains a website'
        var linkedText = jQuery.link('Check out http://www.google.com for something interesting');
        
        linkedText.should.be 'Check out <a href="http://www.google.com">http://www.google.com</a> for something interesting'
      end
      
      it 'should handle multiple links'
        var linkedText = jQuery.link('A http://www.google.com for http://board.links.com for you');
        
        linkedText.should.be 'A <a href="http://www.google.com">http://www.google.com</a> for <a href="http://board.links.com">http://board.links.com</a> for you'
      end
      
      it 'should not try to linkify existing links'
        var linkedText = jQuery.link('A http://www.google.com for <a href="http://board.links.com">http://board.links.com</a> for you');
        
        linkedText.should.be 'A <a href="http://www.google.com">http://www.google.com</a> for <a href="http://board.links.com">http://board.links.com</a> for you'
      end
      
      it 'should handle single quotes on the href'
        var linkedText = jQuery.link("A http://www.google.com for <a href='http://board.links.com'>http://board.links.com</a> for you");
        
        linkedText.should.be 'A <a href="http://www.google.com">http://www.google.com</a> for <a href=\'http://board.links.com\'>http://board.links.com</a> for you'
      end
      it 'should handle this corner case'
        var text = jQuery.link('<p>http://google.com is where i search</p>')
        
        text.should.be '<p><a href="http://google.com">http://google.com</a> is where i search</p>'
      end
    end
  
    describe 'context based calls'
      before_each 
        this.dom = sandbox()
        this.dom.append("<div id='content'></div>")
      end
      
      it 'should linkify text in a specified node'
        this.dom.find('#content').append("<p>Check http://foobar.example.com out</p>")
        
        this.dom.find('p').link()
        
        this.dom.find('p').html().should.be 'Check <a href="http://foobar.example.com">http://foobar.example.com</a> out'
      end
    end
end
