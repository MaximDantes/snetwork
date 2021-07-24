import React, {useEffect} from 'react'
import {TState} from '../../redux/store'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import Preloader from '../common/Preloader/Preloader'
import Profile from './Profile'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {logout} from '../../redux/authReducer'
import {TProfileInfo} from '../../types/types'

type Props = {
    profileInfo: TProfileInfo
    id: number
    status: string
    isFetching: boolean
    getStatus(userId: number): void
    getProfile(userId: number): void
    updateStatus(status: string): void
    logout(): void
    match: any
}

const ProfileContainer: React.FC<Props> = (props) => {
    useEffect(() => {
        let id = props.match.params.id
        if (!id) {
            id = props.id
        }
        props.getStatus(id)
        props.getProfile(id)
    }, [props.match.params.id, props.id])


    return (
        <>
            {
                props.isFetching
                    ?
                    <Preloader/>
                    :
                    <Profile
                        profileInfo={props.profileInfo}
                        status={props.status}
                        updateStatus={props.updateStatus}
                        logout={props.logout}
                    />
            }
        </>
    )
}

const mapStateToProps = (state: TState) => ({
    profileInfo: state.profile.profileInfoData,
    status: state.profile.status,
    isFetching: state.profile.isFetching,
    id: state.auth.id,
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, logout}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
