import React from 'react'

function Rating({data}) {
  return (
    <div>
        <h3 className=''>Reviews</h3>
        {data.map(item=>(
            <>
            <h4>{item.name}</h4>
            <p>{item.comments}</p>
            </>
        ))}

    </div>
  )
}

export default Rating