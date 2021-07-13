import style from './Users.module.css';
import defaultAvatar from './../../assets/images/defaultAvatar.jpg';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator'
import Button from '../common/Button/Button'

const Users = ({currentPage, pagesCount, usersData, followingInProgress, toggleFollowing, findText,
                   writeFindText, find, changePage}) => {

    // TODO paginator
    const pages = [1, '...'];
    if (currentPage <= 3) pages.pop()

    if (currentPage < 5) pages.push(2, 3, 4)

    if (currentPage > pagesCount - 5) pages.push(pagesCount - 3, pagesCount - 2, pagesCount - 1)

    if (currentPage >= 5 && currentPage <= pagesCount - 5) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                pages.push(i)
        }
    }

    if (currentPage < pagesCount - 2) pages.push('...')
    pages.push(pagesCount)


    const users = usersData.map(item => {
        return (
            <div className={style.user}>
                <div>
                    <NavLink to={`/profile/${item.id}`}>
                        <img src={item.photos.large ? item.photos.large : defaultAvatar} alt="avatar" />
                    </NavLink>
                    {
                        item.followed ?
                            <Button
                                disabled={followingInProgress.some(id => id === item.id)}
                                onClick={() => {toggleFollowing(item.id, false)}}
                                text={'Unfollow'}
                            />
                            :
                            <Button
                                disabled={followingInProgress.some(id => id === item.id)}
                                onClick={() => {toggleFollowing(item.id, true)}}
                                text={'Follow'}
                            />

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

            <div>
                <input
                    value={findText}
                    onChange={(e) => writeFindText(e.target.value)}
                    placeholder='Search...'
                />
                <Button onClick={find} text={'Find'}/>
            </div>

            <div className={style.nav}>
                <Paginator currentPage={currentPage} pagesCount={pagesCount} changePage={changePage} />
            </div>

            {users}
        </div>
    );
}

export default Users;
