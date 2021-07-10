import s from './ProfileInfo.module.css';
import topImg from './../../../assets/images/topImg.jpg';
import defaultAvatar from './../../../assets/images/defaultAvatar.jpg';
import Status from './Status';
import Button from "../../common/Button/Button";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.topImg}>
                <img src={topImg} alt="top image" />
            </div>

            <div className={s.profile}>
                {
                    (props.photos.large)
                        ?
                        <img src={props.photos.large} alt="avatar" />
                        :
                        <img src={defaultAvatar} alt="avatar" />
                }


                <div>
                    <p className={s.title}>{props.fullName}</p>
                    <Status status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>

            <div>
                <Button text='Logout' onClick={props.logout}></Button>
            </div>
        </div>
    )
}

export default ProfileInfo;
