import {useEffect, useState} from 'react'

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const toggleEditMode = () => {
        if (editMode) {
            setEditMode(false)
            props.updateStatus(status)
        } else {
            setEditMode(true)
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { (editMode) ?
                <input
                    type="text"
                    autoFocus={true}
                    value={status}
                    onBlur={toggleEditMode}
                    onChange={onStatusChange}
                />
                :
                <p onDoubleClick={toggleEditMode}>{status}</p> }
        </div>
    )
}

export default ProfileStatus