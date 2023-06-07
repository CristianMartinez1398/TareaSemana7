import { useEffect, useState } from 'react';


function Saludo() {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/v1/TablaProveedores", requestOptions)
            .then(response => response.json())
            .then(result => setDatos(result))
            .catch(error => console.log('error', error));
    }, [])

    console.log(datos);
    if (datos.length < 1) {
        return <h2>No se encontraron restaurantes</h2>
    }

    return <div class="card" style={{width: "18rem"}}>
    <img src="https://media.justo.mx/products/7501000111206_1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{datos[0].Nombre_Proveedor}</h5>
      <p class="card-text">{datos[0].Tipo_Producto}</p>
      <a href="#" class="btn btn-primary">{"L."+datos[0].Precio}</a>
    </div>
  </div>

}
export default Saludo