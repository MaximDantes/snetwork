import {Suspense} from 'react'
import Preloader from '../components/common/Preloader/Preloader'

const withSuspense = (Component: any) => {
    return (props: Object) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props}/>
            </Suspense>
        )
    }
}

export default withSuspense