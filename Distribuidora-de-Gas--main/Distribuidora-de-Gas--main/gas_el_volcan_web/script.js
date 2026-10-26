
// =====================================================
// DATOS DEL CATÁLOGO - DISTRIBUIDORA GAS EL VOLCÁN
// =====================================================
const productos = [
  {id:1,codigo:"CL001",categoria:"Cilindros de Gas",nombre:"Cilindro GLP 5 kg",descripcion:"Cilindro de gas licuado de petróleo 5 kg. Para uso residencial, cocina y calefacción pequeña.",unidad:"Unidad",precio:6500,precioComercial:6000,stock:80,imagen:"assets/cilindro.svg"},
  {id:2,codigo:"CL002",categoria:"Cilindros de Gas",nombre:"Cilindro GLP 11 kg",descripcion:"Cilindro estándar doméstico. El más utilizado en hogares chilenos. Compatible con reguladores estándar.",unidad:"Unidad",precio:12000,precioComercial:11000,stock:200,imagen:"assets/cilindro.svg"},
  {id:3,codigo:"CL003",categoria:"Cilindros de Gas",nombre:"Cilindro GLP 15 kg",descripcion:"Cilindro de mayor capacidad para hogares de alto consumo o locales pequeños.",unidad:"Unidad",precio:16000,precioComercial:14500,stock:90,imagen:"assets/cilindro.svg"},
  {id:4,codigo:"CL004",categoria:"Cilindros de Gas",nombre:"Cilindro GLP 45 kg",descripcion:"Cilindro industrial para restaurantes, talleres y calefacción de locales.",unidad:"Unidad",precio:45000,precioComercial:40000,stock:30,imagen:"assets/cilindro.svg"},
  {id:5,codigo:"RG001",categoria:"Reguladores",nombre:"Regulador doméstico estándar",descripcion:"Regulador de 1 etapa para cilindros 5, 11 y 15 kg. Presión de salida 28 mbar.",unidad:"Unidad",precio:8990,precioComercial:8200,stock:45,imagen:"assets/regulador.svg"},
  {id:6,codigo:"RG002",categoria:"Reguladores",nombre:"Regulador de alta presión",descripcion:"Regulador para cocinas industriales o equipos de mayor consumo. Presión regulable.",unidad:"Unidad",precio:18990,precioComercial:17000,stock:12,imagen:"assets/regulador.svg"},
  {id:7,codigo:"RG003",categoria:"Reguladores",nombre:"Regulador dual (2 salidas)",descripcion:"Permite conectar dos artefactos simultáneamente al mismo cilindro.",unidad:"Unidad",precio:14990,precioComercial:13500,stock:18,imagen:"assets/regulador.svg"},
  {id:8,codigo:"MG001",categoria:"Mangueras y Conexiones",nombre:"Manguera gas 1.5 m",descripcion:"Manguera flexible homologada. Diámetro interior 9 mm. Compatible con reguladores estándar.",unidad:"Unidad",precio:3990,precioComercial:3500,stock:80,imagen:"assets/manguera.svg"},
  {id:9,codigo:"MG002",categoria:"Mangueras y Conexiones",nombre:"Manguera gas 3 m",descripcion:"Manguera larga para instalaciones donde el artefacto está alejado del cilindro.",unidad:"Unidad",precio:6990,precioComercial:6200,stock:50,imagen:"assets/manguera.svg"},
  {id:10,codigo:"MG003",categoria:"Mangueras y Conexiones",nombre:"Abrazadera metálica",descripcion:"Abrazadera de acero para asegurar la conexión manguera-regulador y manguera-artefacto.",unidad:"Unidad",precio:990,precioComercial:800,stock:200,imagen:"assets/manguera.svg"},
  {id:11,codigo:"MG004",categoria:"Mangueras y Conexiones",nombre:"Kit conexión completo",descripcion:"Regulador, manguera de 1.5 m y abrazaderas. Todo lo necesario para instalar un cilindro nuevo.",unidad:"Kit",precio:12990,precioComercial:11500,stock:25,imagen:"assets/manguera.svg"},
  {id:12,codigo:"AC001",categoria:"Accesorios",nombre:"Carro porta cilindro 11/15 kg",descripcion:"Carro metálico con ruedas para transportar cilindros dentro del hogar con seguridad.",unidad:"Unidad",precio:12990,precioComercial:11000,stock:20,imagen:"assets/accesorio.svg"},
  {id:13,codigo:"AC002",categoria:"Accesorios",nombre:"Tapa protectora para válvula",descripcion:"Tapa de plástico ABS para proteger la válvula del cilindro durante el transporte.",unidad:"Unidad",precio:1490,precioComercial:1200,stock:60,imagen:"assets/accesorio.svg"},
  {id:14,codigo:"AC003",categoria:"Accesorios",nombre:"Detector de gas a batería",descripcion:"Sensor electroquímico con alarma sonora y visual ante fuga de gas GLP o metano.",unidad:"Unidad",precio:19990,precioComercial:17000,stock:8,imagen:"assets/accesorio.svg"}
];

const $ = (id) => document.getElementById(id);
const dinero = (n) => n.toLocaleString("es-CL");

// =====================================================
// MENÚ RESPONSIVE
// =====================================================
const btnMenu = $("btn-menu");
const nav = $("nav-principal");
if (btnMenu && nav) {
  btnMenu.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    btnMenu.setAttribute("aria-expanded", String(abierto));
  });
}

// =====================================================
// PRODUCTOS Y DETALLE
// =====================================================
function tarjetaProducto(producto) {
  return `
    <article class="producto">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="producto-contenido">
        <span class="categoria">${producto.codigo} · ${producto.categoria}</span>
        <h3>${producto.nombre}</h3>
        <p class="descripcion">${producto.descripcion}</p>
        <p class="precio">$${dinero(producto.precio)}</p>
        <span class="stock">Stock: ${producto.stock}</span>
        <div class="acciones-producto">
          <a class="boton boton-sec" href="detalle-producto.html?id=${producto.id}">Detalle</a>
          <button class="boton agregar-carrito" data-id="${producto.id}">Añadir</button>
        </div>
      </div>
    </article>`;
}

function conectarBotonesCarrito() {
  document.querySelectorAll(".agregar-carrito").forEach((boton) => {
    boton.addEventListener("click", () => agregarAlCarrito(Number(boton.dataset.id)));
  });
}

const destacados = $("productos-destacados");
if (destacados) {
  destacados.innerHTML = productos.slice(0, 4).map(tarjetaProducto).join("");
  conectarBotonesCarrito();
}

const grilla = $("grilla-productos");
const filtro = $("filtro-categoria");
function mostrarCatalogo() {
  if (!grilla) return;
  const categoria = filtro ? filtro.value : "Todos";
  const lista = categoria === "Todos" ? productos : productos.filter(p => p.categoria === categoria);
  grilla.innerHTML = lista.map(tarjetaProducto).join("");
  conectarBotonesCarrito();
}
if (grilla) mostrarCatalogo();
if (filtro) filtro.addEventListener("change", mostrarCatalogo);

const detalle = $("detalle-producto");
if (detalle) {
  const id = Number(new URLSearchParams(location.search).get("id")) || 1;
  const p = productos.find(x => x.id === id) || productos[0];
  detalle.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <div>
      <span class="etiqueta">${p.categoria}</span>
      <h1>${p.nombre}</h1>
      <p>${p.descripcion}</p>
      <p class="precio-grande">$${dinero(p.precio)}</p>
      <div class="detalle-meta">
        <div><small>Código</small><strong>${p.codigo}</strong></div>
        <div><small>Stock actual</small><strong>${p.stock} ${p.unidad.toLowerCase()}</strong></div>
        <div><small>Precio residencial</small><strong>$${dinero(p.precio)}</strong></div>
        <div><small>Precio comercial</small><strong>$${dinero(p.precioComercial)}</strong></div>
      </div>
      <button class="boton agregar-carrito" data-id="${p.id}">Añadir al carrito</button>
    </div>`;
  conectarBotonesCarrito();
}

// =====================================================
// CARRITO CON LOCALSTORAGE
// =====================================================
let carrito = JSON.parse(localStorage.getItem("carritoElVolcan")) || [];
const panelCarrito = $("panel-carrito");
const btnCarrito = $("btn-carrito");
const cerrarCarrito = $("cerrar-carrito");
const listaCarrito = $("lista-carrito");
const contadorCarrito = $("contador-carrito");
const totalCarrito = $("total-carrito");
const vaciarCarrito = $("vaciar-carrito");

function guardarCarrito() {
  localStorage.setItem("carritoElVolcan", JSON.stringify(carrito));
}
function agregarAlCarrito(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;
  const existente = carrito.find(x => x.id === id);
  if (existente) existente.cantidad++;
  else carrito.push({...p, cantidad:1});
  guardarCarrito();
  actualizarCarrito();
  if (panelCarrito) panelCarrito.classList.remove("oculto");
}
function eliminarDelCarrito(id) {
  carrito = carrito.filter(x => x.id !== id);
  guardarCarrito();
  actualizarCarrito();
}
function actualizarCarrito() {
  if (contadorCarrito) contadorCarrito.textContent = carrito.reduce((a,p)=>a+p.cantidad,0);
  if (totalCarrito) totalCarrito.textContent = dinero(carrito.reduce((a,p)=>a+p.precio*p.cantidad,0));
  if (!listaCarrito) return;
  if (!carrito.length) {
    listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }
  listaCarrito.innerHTML = carrito.map(p => `
    <div class="item-carrito">
      <div><strong>${p.nombre}</strong><p>Cantidad: ${p.cantidad}</p><p>Subtotal: $${dinero(p.precio*p.cantidad)}</p></div>
      <button data-id="${p.id}">Eliminar</button>
    </div>`).join("");
  listaCarrito.querySelectorAll("button").forEach(b => b.addEventListener("click",()=>eliminarDelCarrito(Number(b.dataset.id))));
}
if (btnCarrito && panelCarrito) btnCarrito.addEventListener("click",()=>panelCarrito.classList.remove("oculto"));
if (cerrarCarrito && panelCarrito) cerrarCarrito.addEventListener("click",()=>panelCarrito.classList.add("oculto"));
if (vaciarCarrito) vaciarCarrito.addEventListener("click",()=>{carrito=[];guardarCarrito();actualizarCarrito();});
actualizarCarrito();

// =====================================================
// VALIDACIONES GENERALES
// =====================================================
const patronCorreo = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
function errorCorreo(valor, requerido=true) {
  const v = valor.trim();
  if (!v && requerido) return "El correo es obligatorio.";
  if (!v && !requerido) return "";
  if (v.length > 100) return "El correo no puede superar 100 caracteres.";
  if (!patronCorreo.test(v)) return "Use un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.";
  return "";
}
function setMensaje(el, texto, ok) {
  if (!el) return;
  el.textContent = texto;
  el.className = "mensaje " + (ok ? "ok" : "mal");
}

// =====================================================
// LOGIN
// =====================================================
const formLogin = $("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", (e)=>{
    e.preventDefault();
    const correo = $("correo-login");
    const pass = $("password-login");
    const ec = $("error-correo-login");
    const ep = $("error-password-login");
    const msg = $("mensaje-login");
    const cError = errorCorreo(correo.value);
    let pError = "";
    if (!pass.value) pError = "La contraseña es obligatoria.";
    else if (pass.value.length < 4 || pass.value.length > 10) pError = "La contraseña debe tener entre 4 y 10 caracteres.";
    ec.textContent = cError; ep.textContent = pError;
    const ok = !cError && !pError;
    setMensaje(msg, ok ? "Inicio de sesión validado correctamente." : "Revise los campos marcados.", ok);
    if (ok) formLogin.reset();
  });
}

// =====================================================
// CONTACTO
// =====================================================
const formContacto = $("form-contacto");
if (formContacto) {
  formContacto.addEventListener("submit",(e)=>{
    e.preventDefault();
    const n=$("nombre-contacto"), c=$("correo-contacto"), t=$("comentario-contacto");
    const en=$("error-nombre-contacto"), ec=$("error-correo-contacto"), et=$("error-comentario-contacto");
    const ne=!n.value.trim() ? "El nombre es obligatorio." : n.value.trim().length>100 ? "Máximo 100 caracteres." : "";
    const ce=errorCorreo(c.value,false);
    const te=!t.value.trim() ? "El comentario es obligatorio." : t.value.trim().length>500 ? "Máximo 500 caracteres." : "";
    en.textContent=ne;ec.textContent=ce;et.textContent=te;
    const ok=!ne&&!ce&&!te;
    setMensaje($("mensaje-contacto"), ok ? "Mensaje enviado correctamente." : "Revise los campos marcados.", ok);
    if(ok) formContacto.reset();
  });
}

// =====================================================
// REGISTRO - REGIÓN Y COMUNA
// =====================================================
const regiones = {
  "Arica y Parinacota":["Arica","Camarones","Putre"],
  "Tarapacá":["Iquique","Alto Hospicio","Pozo Almonte"],
  "Antofagasta":["Antofagasta","Calama","Tocopilla"],
  "Atacama":["Copiapó","Caldera","Vallenar"],
  "Coquimbo":["La Serena","Coquimbo","Ovalle"],
  "Valparaíso":["Valparaíso","Viña del Mar","Quilpué"],
  "Metropolitana de Santiago":["Santiago","Puente Alto","Maipú"],
  "O'Higgins":["Rancagua","San Fernando","Rengo"],
  "Maule":["Talca","Curicó","Linares"],
  "Ñuble":["Chillán","Chillán Viejo","Bulnes","Quillón","El Carmen","Pinto","San Ignacio"],
  "Biobío":["Concepción","Talcahuano","Los Ángeles"],
  "La Araucanía":["Temuco","Padre Las Casas","Villarrica"],
  "Los Ríos":["Valdivia","La Unión","Panguipulli"],
  "Los Lagos":["Puerto Montt","Osorno","Castro"],
  "Aysén":["Coyhaique","Aysén","Chile Chico"],
  "Magallanes":["Punta Arenas","Puerto Natales","Porvenir"]
};
const region = $("region"), comuna = $("comuna");
if (region && comuna) {
  Object.keys(regiones).forEach(r => region.insertAdjacentHTML("beforeend",`<option>${r}</option>`));
  region.addEventListener("change",()=>{
    comuna.innerHTML='<option value="">Seleccione una comuna</option>';
    const lista=regiones[region.value]||[];
    lista.forEach(c=>comuna.insertAdjacentHTML("beforeend",`<option>${c}</option>`));
    comuna.disabled=!lista.length;
  });
}
function validarRun(run) {
  const limpio = run.trim().toUpperCase();
  if (!limpio) return "El RUN es obligatorio.";
  if (!/^[0-9]{6,8}[0-9K]$/.test(limpio)) return "Ingrese RUN sin puntos ni guion, entre 7 y 9 caracteres.";
  let cuerpo = limpio.slice(0,-1), dv = limpio.slice(-1), suma=0, mult=2;
  for (let i=cuerpo.length-1;i>=0;i--){suma+=Number(cuerpo[i])*mult;mult=mult===7?2:mult+1;}
  const resto=11-(suma%11);
  const esperado=resto===11?"0":resto===10?"K":String(resto);
  return dv===esperado ? "" : "El RUN ingresado no es válido.";
}
const formRegistro=$("form-registro");
if(formRegistro){
  formRegistro.addEventListener("submit",(e)=>{
    e.preventDefault();
    const campos={
      run:validarRun($("run").value),
      nombre:!$("nombre-registro").value.trim()?"El nombre es obligatorio.":"",
      apellidos:!$("apellidos-registro").value.trim()?"Los apellidos son obligatorios.":"",
      correo:errorCorreo($("correo-registro").value),
      password:(!$("password-registro").value)?"La contraseña es obligatoria.":($("password-registro").value.length<4||$("password-registro").value.length>10)?"Debe tener entre 4 y 10 caracteres.":"",
      region:!$("region").value?"Seleccione una región.":"",
      comuna:!$("comuna").value?"Seleccione una comuna.":"",
      direccion:!$("direccion").value.trim()?"La dirección es obligatoria.":""
    };
    $("error-run").textContent=campos.run;
    $("error-nombre-registro").textContent=campos.nombre;
    $("error-apellidos-registro").textContent=campos.apellidos;
    $("error-correo-registro").textContent=campos.correo;
    $("error-password-registro").textContent=campos.password;
    $("error-region").textContent=campos.region;
    $("error-comuna").textContent=campos.comuna;
    $("error-direccion").textContent=campos.direccion;
    const ok=Object.values(campos).every(x=>!x);
    setMensaje($("mensaje-registro"),ok?"Usuario registrado correctamente.":"Revise los campos marcados.",ok);
    if(ok){formRegistro.reset();comuna.disabled=true;comuna.innerHTML='<option value="">Seleccione una comuna</option>';}
  });
}

// =====================================================
// SEGUIMIENTO DE PEDIDO SIMULADO
// =====================================================
const buscarPedido=$("buscar-pedido");
if(buscarPedido){
  buscarPedido.addEventListener("click",()=>{
    const codigo=$("codigo-pedido").value.trim().toUpperCase();
    if(!codigo){setMensaje($("mensaje-seguimiento"),"Ingrese un código de pedido.",false);$("estado-pedido").classList.add("oculto");return;}
    setMensaje($("mensaje-seguimiento"),`Pedido ${codigo}: repartidor en camino. Entrega estimada entre 1 y 3 horas.`,true);
    $("estado-pedido").classList.remove("oculto");
  });
}

// =====================================================
// ADMINISTRACIÓN - PRODUCTOS
// =====================================================
const tablaProductos=$("tabla-admin-productos");
if(tablaProductos){
  const tbody=tablaProductos.querySelector("tbody");
  tbody.innerHTML=productos.map(p=>`<tr><td>${p.codigo}</td><td>${p.nombre}</td><td>${p.categoria}</td><td>$${dinero(p.precio)}</td><td>${p.stock}</td><td><button class="boton-pequeno">Editar</button></td></tr>`).join("");
}
const mostrarFormProducto=$("mostrar-form-producto");
const formProducto=$("form-producto-admin");
if(mostrarFormProducto&&formProducto){
  mostrarFormProducto.addEventListener("click",()=>formProducto.classList.toggle("oculto"));
  formProducto.addEventListener("submit",(e)=>{
    e.preventDefault();
    const cod=$("codigo-producto-admin"), nom=$("nombre-producto-admin"), pre=$("precio-producto-admin"), st=$("stock-producto-admin");
    const ec=$("error-codigo-producto-admin"), en=$("error-nombre-producto-admin"), ep=$("error-precio-producto-admin"), es=$("error-stock-producto-admin");
    ec.textContent=cod.value.trim().length<3?"Código requerido, mínimo 3 caracteres.":"";
    en.textContent=!nom.value.trim()?"Nombre requerido.":"";
    ep.textContent=pre.value===""||Number(pre.value)<0?"Precio requerido, mínimo 0.":"";
    es.textContent=st.value===""||Number(st.value)<0||!Number.isInteger(Number(st.value))?"Stock requerido, entero mínimo 0.":"";
    const ok=!ec.textContent&&!en.textContent&&!ep.textContent&&!es.textContent;
    setMensaje($("mensaje-producto-admin"),ok?"Producto validado y listo para guardar.":"Revise los campos marcados.",ok);
  });
}

// =====================================================
// ADMINISTRACIÓN - USUARIOS
// =====================================================
const mostrarFormUsuario=$("mostrar-form-usuario");
const formUsuario=$("form-usuario-admin");
if(mostrarFormUsuario&&formUsuario){
  mostrarFormUsuario.addEventListener("click",()=>formUsuario.classList.toggle("oculto"));
  formUsuario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const erun=validarRun($("run-admin").value);
    const enom=!$("nombre-admin").value.trim()?"Nombre requerido.":"";
    const ecor=errorCorreo($("correo-admin").value);
    const erol=!$("rol-admin").value?"Seleccione un tipo de usuario.":"";
    $("error-run-admin").textContent=erun;
    $("error-nombre-admin").textContent=enom;
    $("error-correo-admin").textContent=ecor;
    $("error-rol-admin").textContent=erol;
    const ok=!erun&&!enom&&!ecor&&!erol;
    setMensaje($("mensaje-usuario-admin"),ok?"Usuario validado y listo para guardar.":"Revise los campos marcados.",ok);
  });
}
