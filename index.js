        document.getElementById('art1').onmouseover=function effacer1(){
       var element = document.getElementById('1'); 
        element.classList.add('hidden');

       }
    
      document.getElementById('art2').onmouseover=function effacer2(){
        var element = document.getElementById('2'); 
         element.classList.add('hidden');

       }
       document.getElementById('art3').onmouseover=function effacer3(){
        var element = document.getElementById('3'); 
         element.classList.add('hidden');

       }   
       document.getElementById('art4').onmouseover=function effacer4(){
        var element = document.getElementById('4'); 
         element.classList.add('hidden');

       }
       document.getElementById('articles').onmouseover=function retablir(){
        var elements = document.getElementsByTagName('article'); // => tableau d'éléments
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i]; // i-ème élément du tableau d'éléments
            element.classList.remove('hidden');
          }
        }
       

