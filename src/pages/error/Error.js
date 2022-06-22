import React from 'react'
import doh from '../../assets/img/doh.jpg'

export const Error = () => {
  return (
    <div className='bg-warning min-vh-100 pt-5 d-flex flex-column'>
      <p className='container display-1 text-danger'><strong>¡Error 404 pagina no encontrada!</strong></p>
      <img src={doh} className="w-40  m-auto" alt="homero_doh" />
    </div>
  )
}
export default Error