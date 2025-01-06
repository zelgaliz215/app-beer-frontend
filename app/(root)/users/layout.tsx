
import React from 'react';
// Se destructura el argumento childrn
const Layout = ({ children } : {children: React.ReactNode}) => {
  return (
      <div>
          {/* Contenido del layout, las paginas dentro de users */}
          <h2 className='text-2xl text-blue-600'>Plantilla de Usuarios</h2>
          { children }
      </div>
  )
}

export default Layout