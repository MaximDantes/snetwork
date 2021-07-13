import usersReducer, {toggleFetching} from './usersReducer'

test('fetching must be true', () => {
    const state = {
        usersData: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        findText: '',
        isFetching: false,
        followingInProgress: [],
    }

    const action = toggleFetching(true)

    const newState = usersReducer(state,  action)

    expect(newState.isFetching).toBe(true)
})

test('fetching must be false', () => {
    const state = {
        usersData: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        findText: '',
        isFetching: true,
        followingInProgress: [],
    }

    const action = toggleFetching(false)

    const newState = usersReducer(state,  action)

    expect(newState.isFetching).toBe(false)
})