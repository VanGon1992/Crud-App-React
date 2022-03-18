import React from 'react'

export default function CrudTableRow2({elem, setDataToEdit, deleteData}) {

  let {name, surname, id} = elem

  return (
    <div>
        <div>{name} {surname}</div>
        {/* <div>{surname}</div> */}

        <button onClick={() => setDataToEdit(elem)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
    </div>
  )
}
