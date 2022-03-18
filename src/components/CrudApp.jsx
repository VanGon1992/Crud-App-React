import React, {useState} from 'react'
import CrudForm2 from './CrudForm'
import CrudTable2 from './CrudTable'

export default function CrudApp2() {

  const [db, setDb] = useState([])
  const [dataToEdit, setDataToEdit] = useState(null)

  const createData = (data) => {
    data.id = Date.now()
    console.log(data)
    setDb([...db, data])
  }

  const updateData = (data) => {
    let newData = db.map(elem => elem.id === data.id ? data : elem)
    setDb(newData)
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Seguro que quieres eliminar el registro '${id}'?`
    )
    if(isDelete){
      let newData = db.filter(elem => elem.id !== id)
      setDb(newData)
    }else{
      return
    }
  }


  return (
    <div>
      <h2>CrudApp2</h2>
      <CrudForm2 
        createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable2 
        data={db} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData}/>
    </div>
  )
}
