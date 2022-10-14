import React, {useState} from 'react'

export const ModalImage = ({data}) => {

  return (
    <div className='container-modal'>
        <div className='overlay'>
            <div className='modal-content'>
                <img url={data.url} alt={data.title}></img>
            </div>
            <button>Cerrar</button>
        </div>
    </div>
  )
}
