import React, {useState, useEffect} from 'react'

const initialForm = {
  id: null,
  name: '',
  surname: ''
}

export default function CrudForm2({createData, updateData, dataToEdit, setDataToEdit}) {

  const [form, setForm] = useState({initialForm})

  useEffect(() => {
    if(dataToEdit){
      setForm(dataToEdit)
    } else {
      setForm(initialForm)
    }
  }, [dataToEdit])

  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.target.name]:ev.target.value
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    if(!form.name || !form.surname){
      alert('Datos Incompletos')
      return
    }

    if(form.id === null){
      createData(form)
    } else {
      updateData(form)
    }

    handleReset()
  }

  const handleReset = () => {
    setForm(initialForm)
    setDataToEdit(null)
  }

  return (
    <div>
        <h3>{dataToEdit ? 'Editar' : 'Añadir Usuario'}</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Nombre' onChange={handleChange} value={form.name}></input>
            <input type='text' name='surname' placeholder='Apellido' onChange={handleChange} value={form.surname}></input>
            <input type='submit' value='Enviar'></input>
            <input type='reset' value='Limpiar' onClick={handleReset}></input>
        </form>
    </div>
  )
}
