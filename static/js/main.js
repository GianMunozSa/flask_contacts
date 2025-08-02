const btnDelete = document.querySelectorAll('.btn-delete')

//Comprobar si existe en la pagina/vista
if(btnDelete) {
    //Se transforma en un arreglo para recorrerlos
    const btnArrya = Array.from(btnDelete);
    btnArrya.forEach((btn) => {
        btn.addEventListener('click',(e)=>{
            if(!confirm('Are you sure you want delete it?')){
                e.preventDefault();
            }

        })
        
    })
}
