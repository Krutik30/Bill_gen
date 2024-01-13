export default function AddButtons({
    onAddGroup
}:{
    onAddGroup: () => void
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
              }}
          >
              + Add a Group
          </button>
          <button
              type='button'
              className='form-add-button'
              onClick={() => {

              }}
          >
              + Add More
          </button>
      </div>
  )
}
