window.onload = function(){
	addSum();
	changeValue();
	changeColor();
	insertParagraph();
	addList();
	addCircle();
	createArray();
	countAdd();

  setTimeout(function()
  { 
  	 document.body.style.background = "#f2f2f2";
  }, 5000);

}
	function addSum(){
		let x = parseInt(document.querySelector("#x").value);
		let y = parseInt(document.querySelector("#y").value);
		var resultat = document.querySelector("#resultat");
		resultat.innerHTML = (isNaN(x)|| isNaN(y))? 0: x+y;
	}
	function changeValue(){
		let x = document.querySelector("#x1");
		let y =	document.querySelector("#y1");
		let change = x.value;
		x.value = y.value;
		y.value = change;
	}
	function changeColor(){
		let cont = document.querySelector('#container');
		cont.addEventListener('mousemove', function(){
			cont.classList.add('verde');
		})
		cont.addEventListener('mouseleave', function(){
			cont.classList.remove('verde');
		})
	}
	function insertParagraph(){
		for(i = 1; i <= 10; i++){
			let parent = document.getElementById('parent');
			let p = document.createElement('p');

			p.innerHTML = "Paragraf NR "+i;
			if(i % 2 === 0){
				p.classList.add('blue');
			}else{
				p.classList.add('yellow');
			}
			parent.appendChild(p);
			}
	}
	function addList(){
		for(i = 1; i <= 10; i++){
			let list = document.getElementById('list_ol');
			let li = document.createElement('li');
			li.innerHTML = "Element NR "+i;
			li.classList.add('violet');
			list.appendChild(li);
		}
	}
	function addCircle(){
		for(i = 1; i <= 10; i++){
			var circle = document.createElement('div');
			circle.className = 'cerc';
			circle.innerHTML = 'Cerc';
			document.getElementById('content').appendChild(circle);  
		}
		document.querySelectorAll('.cerc').forEach(el =>{
     	el.classList.add('circle');
     	})
	}
