import style from './Users.module.css';
import defaultAvatar from './../../assets/images/defaultAvatar.jpg';

const Users = (props) => {

    const startPages = [1, 2, 3];
    const finalPages = [props.pagesCount - 2, props.pagesCount - 1, props.pagesCount];
    const pages = [1, '...'];
    for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        pages.push(i);
    }
    pages.push('...', props.pagesCount)

    const users = props.usersData.map(item => {
        return (
            <div className={style.user}>
                <div>
                    <img src={item.photos.large ? item.photos.large : defaultAvatar} alt="avatar" />
                    {
                        item.followed ?
                            <button onClick={() => props.unfollow(item.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(item.id)}>Follow</button>
                    }
                </div>

                <div>
                    <p>{item.name}</p>
                    <p className={style.status}>{item.status ? item.status : 'default status'}</p>
                </div>
            </div>
        );
    });

    return (
        <div className={style.users}>

            <div className={style.nav}>
                <button onClick={() => props.changePage(props.currentPage - 1)}>back</button>
                <button onClick={() => props.changePage(props.currentPage + 1)}>forward</button>

                {pages.map(item => <span
                    className={props.currentPage === item && style.current}
                    onClick={() => props.changePage(item)}
                >
                    {item}
                </span>)}
            </div>

            {users}
        </div>
    );
}

export default Users;
