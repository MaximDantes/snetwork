import React, {useState} from 'react'
import styled from 'styled-components'
import defaultAvatar from './../../../assets/images/defaultAvatar.jpg'

type TProps = {
    photo: string | null
    setAvatar(file: File): void
}

const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  position: relative;

  &:hover {
    p {
      visibility: visible;
    }
  }

  p {
    position: absolute;
    color: #f1f1f1;
    text-align: center;
    width: 100%;
    background: #00000088;
  }

  .dragP {
    height: 30px;
    line-height: 28px;
    visibility: hidden;
  }

  .leaveP {
    height: 200px;
    line-height: 200px;
  }

  img {
    position: absolute;
  }
`

const Avatar: React.FC<TProps> = (props) => {
    const [drag, setDrag] = useState(false)

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        setDrag(false)
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
            props.setAvatar(file)
        }
    }

    return (
        <StyledDiv
            onDragStart={dragStartHandler}
            onDragLeave={dragLeaveHandler}
            onDragOver={dragStartHandler}
            onDrop={dropHandler}
        >
            <img src={props.photo || defaultAvatar} alt={'avatar'}/>
            {drag ?
                <p className={'leaveP'}>Leave your file here</p>
                :
                <p className={'dragP'}>Drag your file here</p>
            }
        </StyledDiv>
    )
}

export default Avatar