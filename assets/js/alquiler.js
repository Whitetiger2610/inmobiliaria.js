const propiedades_alquiler = [ {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazónde la ciudad, cerca de todo.',
    ubicacion: '123 Main Street,Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true
}, 
{
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true
}, 
{
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquilazona residencial',
    ubicacion: '123 Main Street,Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false
},
{
    nombre: 'Casa tradicional',
    src: 'https://cdn.listingphotos.sierrastatic.com/pics2x/v1719060821/38/38_2670494_01.jpg',
    descripcion: 'Disfruta de unas vacaciones de campo en la ciudad en esta acogedora casa',
    ubicacion: '6901 Hiatus Ct Murfreesboro, TN 37129',
    habitaciones: 3,
    baños: 2,
    costo: 1500,
    smoke: false,
    pets: true
},
{
    nombre: 'Pequeña Casa Moderna',
    src: 'https://cdn.listingphotos.sierrastatic.com/pics2x/v1719061723/38/38_2670500_01.jpg',
    descripcion: 'Esta pequeña casa es perfecta para una pareja de recien casados',
    ubicacion: '8386 Turnbull Drive Pleasant View, TN 37146',
    habitaciones: 2,
    baños: 2,
    costo: 1350,
    smoke: false,
    pets: false
},
{
    nombre: 'Casa de montaña',
    src: 'https://cdn.listingphotos.sierrastatic.com/pics2x/v1719062623/38/38_2670504_01.jpg',
    descripcion: 'En esta casa pueden pasar momentos tranquilos alrededor de la chimenea',
    ubicacion: '2776 Jennings Creek Hwy Whitleyville, TN 38588',
    habitaciones: 3,
    baños: 2,
    costo: 1700,
    smoke: true,
    pets: true
}    
]

const palquilerSection = document.querySelector('#p_alquiler .row')
let html_alquiler = ""


 for (let p_alquiler of propiedades_alquiler){

    let fumar, fumar_m, txt_f
    let mascota, mascota_m, txt_m
    if (p_alquiler.smoke === false){
        fumar = "fas fa-smoking-ban"
        fumar_m = "No se permite fumar"
        txt_f = "text-danger"
    } else if(p_alquiler.smoke === true){
        fumar = "fas fa-smoking"
        fumar_m = "Permitido fumar"
        txt_f = "text-success"
    }
    if (p_alquiler.pets === false){
        mascota = "fa-solid fa-ban"
        mascota_m = "No se permiten mascotas"
        txt_m = "text-danger"
    } else if(p_alquiler.pets === true){
        mascota = "fas fa-paw"
        mascota_m = "Mascotas permitidas"
        txt_m = "text-success"
    }
    
    html_alquiler += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img
                            src=${p_alquiler.src}
                            alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                            ${p_alquiler.nombre}
                            </h5>
                            <p class="card-text">
                            ${p_alquiler.descripcion}
                            </p>
                            <p>
                            <i class="fas fa-map-marker-alt"></i> ${p_alquiler.ubicacion}
                            </p>
                            <p>
                            <i class="fas fa-bed"></i> ${p_alquiler.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${p_alquiler.baños} Baños
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${p_alquiler.costo}</p>
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

 palquilerSection.innerHTML = html_alquiler
