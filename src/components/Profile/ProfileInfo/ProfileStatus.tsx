import React, {useEffect, useState} from 'react'

type Props = {
    status: string
    isOwner: boolean
    updateStatus(status: string): void
}

const ProfileStatus: React.FC<Props> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect((): void => {
        setStatus(props.status)
    }, [props.status])

    const toggleEditMode = (): void => {
        if (props.isOwner) {
            if (editMode) {
                setEditMode(false)
                props.updateStatus(status)
            } else {
                setEditMode(true)
            }
        }
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {(editMode) ?
                <input
                    type="text"
                    autoFocus={true}
                    value={status}
                    onBlur={toggleEditMode}
                    onChange={onStatusChange}
                />
                :
                <p onDoubleClick={toggleEditMode}>{status}</p>}
        </div>
    )
}

export default ProfileStatus