import s from './Message.module.css'

const Message = ({ message }) => {
    return (
        <div className={s.message}>
            <div className={s.border}>
                <span>
                    {message}
                </span>
            </div>
        </div>
    )
}

export default Message
