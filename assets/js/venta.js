const propiedades_venta = [{
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false
}, 
{
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road,Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true
}, 
{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 3000,
    smoke: false,
    pets: true
},
{
    nombre: 'Casa de campo con diseño colonial',
    src: 'https://cdn.listingphotos.sierrastatic.com/pics2x/v1719056314/38/38_2670482_01.jpg',
    descripcion: '1175 Sugar Flat Rd Lebanon, TN 37087',
    ubicacion: 'Esta casa posee un toque mágico de historia y modernidad en si interior',
    habitaciones: 3,
    baños: 2,
    costo: 2000,
    smoke: true,
    pets: true
},
{
    nombre: 'Apartamento comodo en barrio tranquilo',
    src: 'https://cdn.listingphotos.sierrastatic.com/pics2x/v1719057215/38/38_2670485_01.jpg',
    descripcion: 'Este apartamento contiene todo lo necesario para estar tranquilo fuera de la ciudad',
    ubicacion: '151 Couchville Pike Mount Juliet, TN 37122',
    habitaciones: 2,
    baños: 1,
    costo: 1500,
    smoke: false,
    pets: false
},
{
    nombre: 'Casa de campo con piscina',
    src: 'https://cdn.listingphotos.sierrastatic.com/pics2x/v1719060819/38/38_2670492_01.jpg',
    descripcion: 'Esta casa tiene las comodidades para satisfacer a toda la familia',
    ubicacion: '104 Imperial Pt Hendersonville, TN 37075',
    habitaciones: 5,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true
}    
]

const pventaSection = document.querySelector('#p_venta .row')
let html_venta = ""


 for (let p_venta of propiedades_venta){

    let fumar, fumar_m, txt_f
    let mascota, mascota_m, txt_m
    if (p_venta.smoke === false){
        fumar = "fas fa-smoking-ban"
        fumar_m = "No se permite fumar"
        txt_f = "text-danger"
    } else if(p_venta.smoke === true){
        fumar = "fas fa-smoking"
        fumar_m = "Permitido fumar"
        txt_f = "text-success"
    }
    if (p_venta.pets === false){
        mascota = "fa-solid fa-ban"
        mascota_m = "No se permiten mascotas"
        txt_m = "text-danger"
    } else if(p_venta.pets === true){
        mascota = "fas fa-paw"
        mascota_m = "Mascotas permitidas"
        txt_m = "text-success"
    }
    
    html_venta += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img
                            src=${p_venta.src}
                            alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                            ${p_venta.nombre}
                            </h5>
                            <p class="card-text">
                            ${p_venta.descripcion}
                            </p>
                            <p>
                            <i class="fas fa-map-marker-alt"></i> ${p_venta.ubicacion}
                            </p>
                            <p>
                            <i class="fas fa-bed"></i> ${p_venta.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${p_venta.baños} Baños
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${p_venta.costo}</p>
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

 pventaSection.innerHTML = html_venta
