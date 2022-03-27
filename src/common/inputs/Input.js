import s from './Input.module.css'
import { Field} from 'formik';

const Input = ({ type, id, name, value, placeholder }) => {
    return (
        <Field type={type} id={id} name={name} value={value} placeholder={placeholder} className={s.input} />
    )
}

export default Input