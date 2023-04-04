import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  // Estado del formulario 
  const [form , setForm] = useState({
    tipo: "",
    cantidad: "",
    enfermo: ""
  })

  // Estado de postear
  const [ post, setPost] = useState([])
  //Estado de obtención de datos 
  const [getDatos, setGetDatos] = useState([])


  // Obtener datos 
  const getDatosGranja = async() =>{
    const url = 'http://localhost:4003/granja'
    const response = await axios.get(url)
    setGetDatos(response.data)
  }

  //Publicar datos 
  const postData = async(e) => {
    e.preventDefault(); 

    const getDatosform = {
      tipo: form.tipo,
      cantidad: form.cantidad,
      enfermo: form.enfermo
    }

    const url = 'http://localhost:4003/granja'
    const response = await axios.post(url, getDatosform)
    setPost(response.data)
  }

  // Borrar datos 
  const deleteId = async(e) =>{
    const url = `http://localhost:4003/granja/${e}`
    const response = await axios.delete(url)
    console.log(response)
    getDatos()
  }
 // Editar
  const editGranja = async(id) =>{
    const url = `http://localhost:4003/granja/${id}`
    console.log(url)
    const response = await axios.get(url)
    console.log(response)
    const granjaEdit = response.data

    // Pasar los valores originales de la colección del formulario 
    setForm({
      tipo: granjaEdit.tipo,
      cantidad: granjaEdit.cantidad,
      enfermo: granjaEdit.enfermo
    })

    const updateGraja = {
      tipo: form.tipo,
      cantidad: form.cantidad,
      enfermo: form.enfermo
    }

    await axios.put(url, updateGraja)
    getDatosGranja()
  } 
 console.log(editGranja)

  useEffect(()=>{
    getDatosGranja(); 
  },[])

  return (
    <div>
      <form onSubmit={postData}>
        <input type="text" placeholder='Tipo' value={form.tipo} onChange={(e)=> setForm({...form, tipo: e.target.value})} />
        <input type="Number"  placeholder='Cantidad'  value={form.cantidad} onChange={(e)=> setForm({...form, cantidad: e.target.value})} />
        <input type="text"  placeholder='Enfermo' value={form.enfermo} onChange={(e)=> setForm({...form, enfermo: e.target.value})} />
        <button>Enviar</button>
      </form>

     {getDatos.map(elemento => 
      <div key={elemento._id}>
        <h4>{elemento.tipo}</h4>
        <h4>{elemento.cantidad}</h4>
        <h4>{elemento.enfermo}</h4>
        <button value={elemento._id} onClick={(e) => deleteId(e.target.value)} >Borrar</button>
        <button onClick={()=> editGranja(elemento._id)}>Editar</button>
      </div>)}

    </div>
  )
}

export default App

