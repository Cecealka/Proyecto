
//menu de la pagina principal
var validar3 = function(){
	alert('Pagina en contruccion !');
}

//formulario - Usuario y clave (validacion)

var validar = function(){
var usuario = document.formulario.usuario1.value;
var clave = document.formulario.clave1.value;

if(usuario==''){
	document.getElementById('con1').innerHTML='Complete el campo Usuario!';
	 return false;
}

else if(usuario!='lissette_torrealba@'){
	document.getElementById('con1').innerHTML='Usuario incorrecto!';
	 return false;
}
else if(usuario=='lissette_torrealba@'){
	document.getElementById('con1').innerHTML='';
}

if(clave==''){
	document.getElementById('con2').innerHTML='Complete el campo Clave !';
	return false;
}

else if(clave.length <6){
	document.getElementById('con2').innerHTML='clave incorrecta!';
	 return false;
}

else if(clave!='1234567'){
	document.getElementById('con2').innerHTML='clave incorrecta!';
	return false;
} 
else if(clave=='123456'){
	document.getElementById('con1').innerHTML='';
}
}

//formulario1 -gestionar animales (validacion)
var validar1 = function(){

var codigo = document.formulario1.codigo_animal.value;
var especie = document.formulario1.especie_animal.value; 
var peso = document.formulario1.peso_animal.value;
var edad = document.formulario1.edad_animal.value;
var habitats = document.formulario1.habitats_animal.value;

if (codigo =='' || especie ==''||peso =='' ||edad =='' || habitats =='') {
alert('Complete todos los campos del formulario');
return false;
}

else if (document.formulario1.macho.checked==0 && document.formulario1.hembra.checked==0){
alert("Seleccione una opcion en el campo (Sexo)")
return false;
}

else if(isNaN(peso)){
	alert('El campo (Peso) son datos numericos');
	return false;
} 
else if(isNaN(edad)){
	alert('El campo (Edad) son datos numericos');
	return false;
}
else{
	alert('Proceso exitoso!')
}
}

var validar2 = function(){
	alert('Pagina en contruccion !');
}


