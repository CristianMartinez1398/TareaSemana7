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

    return <div id="Cards">
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <p className="card-text" id="Id" >{datos[0].ID}</p>
                <p className="card-text" id="Nombre_Proveedor">{datos[0].Nombre_Proveedor}</p>
                <p className="card-text" id="Tipo_Producto">{datos[0].Tipo_Producto}</p>
                <p className="card-text" id="Precio">{datos[0].Precio}</p>
            </div>
        </div>
    </div>
}
export default Saludo