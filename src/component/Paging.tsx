/* eslint-disable @typescript-eslint/ban-types */
export default function Paging({
  pages,
  setPages
}: {
  pages: {
    selected: number,
    totalPages: number
  },
  setPages: Function
}) {

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
          fontSize: '25px',
          cursor: 'pointer'
        }}
        onClick={() => {
          if(pages.selected > 1){
            setPages({
              ...pages,
              selected: pages.selected - 1
            })
          }
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
        {pages.selected}
      </div>
      <div
        style={{
          fontSize: '25px',
          cursor: 'pointer'
        }}
        onClick={() => {
          if(pages.selected < pages.totalPages){
            setPages({
              ...pages,
              selected: pages.selected + 1
            })      
          }
        }}
      >
        &gt;
      </div>
    </div>
  )
}
