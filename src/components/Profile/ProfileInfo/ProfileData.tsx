import React from 'react'
import { Link } from 'react-router-dom'
import {TProfileInfo} from '../../../types/types'
import Button from '../../common/Button/Button'
import InputField from '../../common/FormControls/InputField'

type TProps = {
    profileInfo: TProfileInfo | null
    isOwner: boolean
    edit(): void
}

const ProfileData: React.FC<TProps> = (props) => {
    return (
        <>
            <p>{props.profileInfo?.lookingForAJob && props.profileInfo?.lookingForAJobDescription}</p>
            <p>{props.profileInfo?.aboutMe && props.profileInfo?.aboutMe}</p>

            {props.profileInfo?.contacts.github && <Contact link={props.profileInfo?.contacts.github} title={'GitHub'}/>}
            {props.profileInfo?.contacts.vk && <Contact link={props.profileInfo?.contacts.vk} title={'VK'}/>}
            {props.profileInfo?.contacts.facebook && <Contact link={props.profileInfo?.contacts.facebook} title={'Facebook'}/>}
            {props.profileInfo?.contacts.instagram && <Contact link={props.profileInfo?.contacts.instagram} title={'Instagram'}/>}
            {props.profileInfo?.contacts.twitter && <Contact link={props.profileInfo?.contacts.twitter} title={'Twitter'}/>}
            {props.profileInfo?.contacts.website && <Contact link={props.profileInfo?.contacts.website} title={'Website'}/>}
            {props.profileInfo?.contacts.youtube && <Contact link={props.profileInfo?.contacts.youtube} title={'YouTube'}/>}
            {props.profileInfo?.contacts.mainLink && <Contact link={props.profileInfo?.contacts.mainLink} title={'MainLink'}/>}

            {props.isOwner && <Button text={'Edit'} onClick={props.edit}/>}
        </>
    )
}

type TContactProps = {
    link: string
    title: string
}

const Contact: React.FC<TContactProps> = (props) => {
    let link = props.link.includes('https://') ? props.link : `https://${props.link}`
    return <p><a href={link} target={'_blank'}>{props.title}</a></p>
}

export default ProfileData