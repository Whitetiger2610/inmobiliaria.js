const ventaSection = document.querySelector('#venta .row')

let htmlv = ""

 for (let i = 0; i <3; i++){

    if (propiedades_venta[i].smoke === false){
        fumar = "fas fa-smoking-ban"
        fumar_m = "No se permite fumar"
        txt_f = "text-danger"
    } else if(propiedades_venta[i].smoke === true){
        fumar = "fas fa-smoking"
        fumar_m = "Permitido fumar"
        txt_f = "text-success"
    }
    if (propiedades_venta[i].pets === false){
        mascota = "fa-solid fa-ban"
        mascota_m = "No se permiten mascotas"
        txt_m = "text-danger"
    } else if(propiedades_venta[i].pets === true){
        mascota = "fas fa-paw"
        mascota_m = "Mascotas permitidas"
        txt_m = "text-success"
    }
    
    htmlv += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img
                            src=${propiedades_venta[i].src}
                            alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                            ${propiedades_venta[i].nombre}
                            </h5>
                            <p class="card-text">
                            ${propiedades_venta[i].descripcion}
                            </p>
                            <p>
                            <i class="fas fa-map-marker-alt"></i> ${propiedades_venta[i].ubicacion}
                            </p>
                            <p>
                            <i class="fas fa-bed"></i> ${propiedades_venta[i].habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${propiedades_venta[i].baños} Baños
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[i].costo}</p>
                            <p class="${txt_f}">
                            <i class= "${fumar}" ></i> ${fumar_m}
                            </p>
                            <p class="${txt_m}">
                            <i class="${mascota}"></i> ${mascota_m}
                            </p>
                        </div>
                    </div>
                </div>            
`
 }

 ventaSection.innerHTML = htmlv
 
 const alquilerSection = document.querySelector('#alquiler .row')
 let htmla = ""

 for (let i = 0; i <3; i++){

 
    if (propiedades_alquiler[i].smoke === false){
        fumar = "fas fa-smoking-ban"
        fumar_m = "No se permite fumar"
        txt_f = "text-danger"
    } else if(propiedades_alquiler[i].smoke === true){
        fumar = "fas fa-smoking"
        fumar_m = "Permitido fumar"
        txt_f = "text-success"
    }
    if (propiedades_alquiler[i].pets === false){
        mascota = "fa-solid fa-ban"
        mascota_m = "No se permiten mascotas"
        txt_m = "text-danger"
    } else if(propiedades_alquiler[i].pets === true){
        mascota = "fas fa-paw"
        mascota_m = "Mascotas permitidas"
        txt_m = "text-success"
    }
    
    htmla += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img
                            src=${propiedades_alquiler[i].src}
                            alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                            ${propiedades_alquiler[i].nombre}
                            </h5>
                            <p class="card-text">
                            ${propiedades_alquiler[i].descripcion}
                            </p>
                            <p>
                            <i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler[i].ubicacion}
                            </p>
                            <p>
                            <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${propiedades_alquiler[i].baños} Baños
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[i].costo}</p>
                            <p class="${txt_f}">
                            <i class= "${fumar}" ></i> ${fumar_m}
                            </p>
                            <p class="${txt_m}">
                            <i class="${mascota}"></i> ${mascota_m}
                            </p>
                        </div>
                    </div>
                </div>            
`
 }

 alquilerSection.innerHTML = htmla