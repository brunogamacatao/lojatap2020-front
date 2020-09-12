import React, {useContext} from 'react';
import LojaContext from '../contexto/LojaContext';

export default function Modal() {
  const { modal } = useContext(LojaContext);

  return (
    <div className="modal fade" id="lojaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{modal.tituloModal}</h5>
          </div>
          <div className="modal-body">
            {modal.textoModal}
          </div>
        </div>
      </div>
    </div>
  )
}
