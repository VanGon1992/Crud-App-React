import React from 'react'
import CrudTableRow from './CrudTableRow'

export default function CrudTable2({data, setDataToEdit, deleteData}) {
  return ( 
    <div>
        <h2>Tabla de datos</h2>
        
        <div>
            {data.length === 0 ? (<p>Sin Datos</p>) : (data.map((elem) => 
            <CrudTableRow
            key={elem.id} 
            elem={elem} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData} 
            />))}
        </div>
    </div>
  )
}
