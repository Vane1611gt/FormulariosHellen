let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios";

// Lista de textos 
let formularios = [
    {nombre: "Login", link: "../componentes/login/login.html"},
    {nombre: "Formulario de contacto", link: "../componentes/formulariodecotacto/formulariodecotacto.html"},
    {nombre: "Formulario de registro", link: "../componentes/formularioderegistro/formularioderegistro.html"},
    {nombre: "Formulario de búsqueda", link: "../componentes/formulariodebusqueda/formulariodebusqueda.html"},
    {nombre: "Formulario de pedido de compras", link: "../componentes/formulariodepedido/formulariodepedido.html"},
    {nombre: "Formulario de comentario de reseñas", link: "../componentes/formulariodecomentario/formulariodecomentario.html"}
];

formularios.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);