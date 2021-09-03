import React from 'react'
import Button from '../../common/Button/Button'
import {Form} from 'react-final-form'
import InputField from '../../common/FormControls/InputField'
import {ValidationErrors} from 'final-form'
import {TProfileInfo, TProfileInfoWithoutPhotos} from '../../../types/types'
import {required} from '../../../utils/validators/validators'

type TProps = {
    id: number
    profileInfo: TProfileInfo
    save(): void
    setAdditionalProfileInfo(profileInfo: TProfileInfoWithoutPhotos): void
}
type TForm = {
    fullName?: string
    aboutMe?: string
    job?: string
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}

const ProfileDataForm: React.FC<TProps> = (props) => {

    const initialValues: TForm = {
        fullName: props.profileInfo.fullName,
        job: props.profileInfo.lookingForAJobDescription,
        aboutMe: props.profileInfo.aboutMe,
        ...props.profileInfo.contacts

    }

    const onSubmit = (form: TForm) => {
        props.setAdditionalProfileInfo({
            fullName: form.fullName,
            lookingForAJob: !!form.job,
            lookingForAJobDescription: form.job,
            userId: props.id,
            aboutMe: form.aboutMe || '',
            contacts: {
                facebook: form.facebook,
                github: form.github,
                instagram: form.instagram,
                mainLink: form.mainLink,
                twitter: form.twitter,
                vk: form.vk,
                website: form.website,
                youtube: form.youtube
            }
        })
        props.save()
    }

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <InputField name={'fullName'} placeholder={'Full name'} validate={required}/>
                    <InputField name={'aboutMe'} placeholder={'About me'} validate={required}/>
                    <InputField name={'job'} placeholder={'Looking for a job?'} validate={required}/>
                    <InputField name={'github'} placeholder={'GitHub'}/>
                    <InputField name={'vk'} placeholder={'VK'}/>
                    <InputField name={'facebook'} placeholder={'Facebook'}/>
                    <InputField name={'instagram'} placeholder={'Instagram'}/>
                    <InputField name={'twitter'} placeholder={'Twitter'}/>
                    <InputField name={'website'} placeholder={'Website'}/>
                    <InputField name={'youtube'} placeholder={'YouTube'}/>
                    <InputField name={'mainLink'} placeholder={'MainLink'}/>
                    <Button text={'Save'} type={'submit'}/>
                </form>
            )}
        />
    )
}

export default ProfileDataForm