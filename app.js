const boton = document.querySelector('#boton');
boton.addEventListener('click', (e) => {
	const texto = document.querySelector('#texto').value;
	e.preventDefault();
	JsBarcode('#barcode', `${texto}`);
});
