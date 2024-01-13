/* eslint-disable @typescript-eslint/ban-types */
export default function AddButtons({
    pages,
    setPages,
    onAddGroup,
    handleAddWorkObject
}:{
    pages: {
        selected: number,
        totalPages: number[]
    },
    setPages: Function,
    onAddGroup: () => void,
    handleAddWorkObject: () => void
}) {
  return (
      <div
          style={{
              display: 'flex',
              justifyContent: 'space-between',
          }}
      >
        <button
            type='button'
            className='form-add-button'
            onClick={() => {
                onAddGroup()
                setPages({
                    ...pages,
                    totalPages: pages.totalPages.push(pages.totalPages.length)
                })
            }}
        >
            + Add a Group
        </button>
        <button
            type='button'
            className='form-add-button'
            onClick={() => {
                handleAddWorkObject()
            }}
        >
            + Add More
        </button>
      </div>
  )
}
