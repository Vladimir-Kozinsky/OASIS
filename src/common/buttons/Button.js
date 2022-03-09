import s from "./Button.module.css"

const Button = (props) => {
    return (
        <button type={props.type ? props.type : ''} onClick={props.event} className={s.button} disabled={props.isDisabled} >{props.text}</button>
    )
}

export default Button
