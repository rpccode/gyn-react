import React from 'react'
import { Modal } from '../components'
import { PagosForm } from '../components/form/PagosForm'
import { MantenimientoLayout } from '../layout/MantenimientoLayout'

export const PagosPage = () => {
  return (
    <MantenimientoLayout>
        
        <PagosForm/>


        <Modal>

        </Modal>
    </MantenimientoLayout>
  )
}
