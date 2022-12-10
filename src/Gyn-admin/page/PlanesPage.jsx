import React from 'react'
import { PlanesForm } from '../components/form/PlanesForm'
import { Modal } from '../components/Modal'
import { MantenimientoLayout } from '../layout/MantenimientoLayout'

export const PlanesPage = () => {
  return (
    <MantenimientoLayout>
        <PlanesForm/>
          {/* <Modal>
            
          </Modal>   */}
    </MantenimientoLayout>
  )
}
