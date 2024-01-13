import { useState } from "react"

export default function Paging() {

  const [ pageNumber ,setPageNumber ] = useState(1);

  return (
    <div
      className='page'
      style={{
        marginRight: '25%',
        marginLeft: '25%',
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          fontSize: '25px'
        }}
        onClick={() => {
          if(pageNumber > 1)
            setPageNumber(pageNumber-1)
        }}
      >
        &lt;
      </div>
      <div
        style={{
          fontSize: '25px',
          color: 'blue'
        }}
      >
        {pageNumber}
      </div>
      <div
        style={{
          fontSize: '25px'
        }}
        onClick={() => {
          if(pageNumber < 10)
            setPageNumber(pageNumber+1)          
        }}
      >
        &gt;
      </div>
    </div>
  )
}
