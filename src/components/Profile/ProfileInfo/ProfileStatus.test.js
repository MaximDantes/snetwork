import ProfileStatus from './ProfileStatus'
import {act, create} from 'react-test-renderer'

describe('ProfileStatus component', () => {
    let component = create(<ProfileStatus status={'test status'}/>)
    let root = component.root

    test('component should be mounted', () => {
        const p = root.findByType('p')
        expect(p).not.toBeNull()
    })
    test('after creation <input> shouldn`t be displayed', () => {
        expect(() => {
            const input = root.findByType('input')
        }).toThrow()
    })
    test('status from props should be in <p>', () => {
        const p = root.findByType('p')
        expect(p.children[0]).toBe('test status')
    })
    test('input should be displayed after <p> double click', () => {
        const p = root.findByType('p')
        act(() => {
            p.props.onDoubleClick()
        })
        const input = root.findByType('input')
        expect(input).not.toBeNull()
    })
    test('update status callback should be called', () => {
        const mockCallback = jest.fn()
        component = create(<ProfileStatus status={'test status'} updateStatus={mockCallback}/>)
        root = component.root
        const p = root.findByType('p')
        act(() => {
            p.props.onDoubleClick()
        })
        const input = root.findByType('input')
        act(() => {
            input.props.onBlur()
        })
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})