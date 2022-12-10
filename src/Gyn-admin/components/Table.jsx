import React from 'react'

export const Table = ({ header=[], children }) => {


  
  return (
    <>
        
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead className='text-center'>
                  <tr>
                    {header.map( head =>(
                          <th key={head} scope="col">{head}</th>
                    ) )}
                  
                  </tr>
                </thead>
                <tbody className='text-center'>
                  
                  
                    
                 
                  
                  { children }
                  

                  
                </tbody>
              </table>
            </div>
    </>
  )
}
