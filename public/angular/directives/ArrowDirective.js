(function(){
'use strict';
 angular.module('puntgo')
 .directive('arrow',function(){
 	return{
		restrict: 'E',
		scope: {
         value: '@'
      },
      link: function(scope, element, attrs) {
      	if(attrs.value>=0){
			   element.html("<div><i class='glyphicon glyphicon-menu-up'>"+attrs.label+" "+attrs.value+"</i></div>");
      	}else{
            element.html("<div><i class='glyphicon glyphicon-menu-down'>"+attrs.label+" "+attrs.value+"</i></div>");
      	}
	  }	
   };
});
})();
