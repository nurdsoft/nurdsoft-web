import './logixalayout.scss'

import BreadCrumb from '../breadcrumb'
import LogixaPage from '../work/logixa/logixapage'
import React from 'react'

const Logixalayout = () => {
  return (
    <div className="logixa_scroller">
      <BreadCrumb title="Logixa" />
      <LogixaPage />
    </div>
  )
}

export default Logixalayout