import profileInfoClasses from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={profileInfoClasses.topImg}>
                <img src={props.state.topImg} alt="top image" />
            </div>

            <div className={profileInfoClasses.profile}>
                <img src={props.state.avatar} alt="avatar" />

                <div className={profileInfoClasses.description}>
                    <p className={profileInfoClasses.title}>{props.state.firstName} {props.state.surname}</p>
                    <p className={profileInfoClasses.status}>{props.state.status}</p>
                    <p>{`Date of birth: ${props.state.dateOfBirth}`}</p>
                    <p>{`Religion: ${props.state.religion}`}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
