import s from './FormControls.module.css';

export const FormControls = ({input, meta, child, ...props}) => {
    const error = meta.touched && meta.error;

    return (
        <div className={`${s.formControl} ${error ? s.error : null}`}>
            <textarea {...input} {...props} />
            <span>{error ? meta.error : null}</span>
        </div>
    );
};

export const Input = ({input, meta, child, ...props}) => {
    const error = meta.touched && meta.error;

    return (
        <div className={`${s.formControl} ${error ? s.error : null}`}>
            <input {...input} {...props} />
            <span>{error ? meta.error : null}</span>
        </div>
    );
};
