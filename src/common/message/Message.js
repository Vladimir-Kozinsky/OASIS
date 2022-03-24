import s from './Message.module.css'



const Message = ({ message, theme }) => {
    const themeModule = theme === 'green' ? s.green : s.red
    const message_class = s.message + ' ' + themeModule;
    console.log(message_class)
    return (
        <div className={s.messageContainer}>
            <div className={message_class}>
                <span>
                    {message}
                </span>
            </div>
        </div>
    )
}

export default Message
