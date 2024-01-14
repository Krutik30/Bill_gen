/* eslint-disable @typescript-eslint/ban-types */
export default function AddButtons({
    pages,
    setPages,
    onAddGroup,
}:{
    pages: {
        selected: number,
        totalPages: number
    },
    setPages: Function,
    onAddGroup: () => void,
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
                    totalPages: pages.totalPages + 1
                })
            }}
        >
            + Add a Group
        </button>
      </div>
  )
}
