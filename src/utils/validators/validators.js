export const required = value => {
    if (!value) {
        return 'field is required'
    }
}

export const maxLength = max =>
    value => {
        if (value && value.length > max) {
            return `length must be less then ${max}`
        }
    }