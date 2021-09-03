import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {getIsAuth} from '../utils/selectors/auth-selectors'

const useRedirect = (path: string) => {
    const isAuth = useSelector(getIsAuth)
    const history = useHistory()

    !isAuth && history.push(path)
}
export default useRedirect