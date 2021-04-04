import s from './Textarea.module.css';

const Textarea = ({input, meta, ...props}) => {

    const error = meta.touched && meta.error;
debugger
    return (
        <div className={`${s.formControl} ${error ? s.error : null}`}>
            <textarea {...input} {...props}></textarea>
            <span>{error ? meta.error : null}</span>
        </div>
    );
};

export default Textarea;