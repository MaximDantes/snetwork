import React, {useEffect, useState} from 'react'
import Button from '../common/Button/Button'
import {TFilter} from '../../store/usersReducer'
import {Formik} from 'formik'
import FormikInput from '../common/Formik/FormikInput'
import FormikSelect from '../common/Formik/FormikSelect'
import styled from 'styled-components'
import useDebounce from '../../hooks/useDebounce'

type TProps = {
    find(filter: TFilter): void
    filter: TFilter
}

const StyledDiv = styled.div`
    display: flex;

    input, select {
        margin: 5px;
        font-size: 20px;
    }

    button {
        margin: 5px;
        padding-right: 15px;
        padding-left: 15px;
    }
`

const UsersFind: React.FC<TProps> = (props) => {

    const followed = props.filter.friend ? 'followed' : typeof props.filter.friend === 'boolean' ? 'unfollowed' : 'all'

    const [term, setTerm] = useState(props.filter.term as string)
    const [friend, setFriend] = useState(followed)

    const debouncingSearchTerm = useDebounce(term, 750)
    const [termChanged, setTermChanged] = useState(false)

    useEffect(() => {
        setTerm(props.filter.term || '')
        setFriend(followed)
    }, [props.filter])

    useEffect(() => {
        if (debouncingSearchTerm !== null && termChanged) {
            onSubmit(debouncingSearchTerm, followed)
            setTermChanged(false)
        }
    }, [debouncingSearchTerm])

    const onTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.currentTarget.value)
        setTermChanged(true)
    }

    const onFollowedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFriend(e.currentTarget.value)
        onSubmit(term, e.currentTarget.value)
    }

    const onSubmit = (term: string, followed: string) => {
        const friend = followed === 'all' ? null : (followed === 'followed')
        props.find({term, friend})
    }

    return (
        <StyledDiv>

            <FormikInput name={'value'} value={term || ''} onChange={onTermChange} placeholder={'Find...'}/>

            <FormikSelect name={'followed'} value={friend} onChange={onFollowedChange}>
                <option value={'all'}>All</option>
                <option value={'followed'}>Followed</option>
                <option value={'unfollowed'}>Unfollowed</option>
            </FormikSelect>

        </StyledDiv>
    )
}

export default UsersFind