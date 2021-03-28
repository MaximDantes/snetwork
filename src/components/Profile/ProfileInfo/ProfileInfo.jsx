import s from './ProfileInfo.module.css';
import topImg from './../../../assets/images/topImg.jpg';
import defaultAvatar from './../../../assets/images/defaultAvatar.jpg';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.topImg}>
                <img src={topImg} alt="top image" />
            </div>

            <div className={s.profile}>
                {(props.photos.large) ?
                    <img src={props.photos.large} alt="avatar" />
                    :
                    <img src={defaultAvatar} alt="avatar" />
                }
                <div className={s.description}>
                    <p className={s.title}>{props.fullName}</p>
                    <p className={s.status}>{props.status}</p>
                    <p>{`Date of birth: ${props.dateOfBirth}`}</p>
                    <p>{`Religion: ${props.religion}`}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
