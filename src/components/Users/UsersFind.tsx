import React from 'react'
import {Field, Form} from 'react-final-form'
import Button from '../common/Button/Button'
import {TFilter} from '../../redux/usersReducer'

type TForm = {
    value: string
    followed: string
}

type TProps = {
    find(filter: TFilter): void
    filter: TFilter
}

const UsersFind: React.FC<TProps> = (props) => {

    const onSubmit = (form: TForm) => {
        const friend = form.followed === 'all' ? null : (form.followed === 'followed')

        props.find({term: form.value, friend})
    }

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name={'value'} component={'input'}/>

                        <Field name={'followed'}
                               component={'select'}>
                            <option value={'all'}>All</option>
                            <option value={'followed'}>Followed</option>
                            <option value={'unfollowed'}>Unfollowed</option>
                        </Field>

                        <Button type={'submit'} text={'Find'}/>
                    </form>
                )}
            />
        </div>
    )
}

export default UsersFind