/* eslint-disable @typescript-eslint/ban-types */
export default function AddButtons({
    pages,
    setPages,
    onAddGroup,
}: {
    pages: {
        selected: number,
        totalPages: number
    },
    setPages: Function,
    onAddGroup: () => void,
}) {

    return (
        <>
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
                        if (pages.selected > 1) {
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
                        if (pages.selected < pages.totalPages) {
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
        </>
    )
}
