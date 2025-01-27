import style from './PostResumeStyle.module.scss'
import {useState} from "react";
import useNotification from "../../hooks/useNotification.hook";
import Nota from "./Nota";
import {useMessage} from "../../hooks/message.hook";

function PostQuestion ({man,setActivemodal}){

    const [myname, setMyname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { notifications, addNotification } = useNotification();
    const [active, setActive] = useState(false)

    const message = useMessage();

    const postMess = () => {
        if(myname.length>0 && phone.length>0 && email.length>0){
            setActivemodal(false)
            setMyname('')
            setPhone('')
            setEmail('')
            message('Ваше вопрос отправлен')
        }
    }

    return (
        <div className={style.main}>
            <div className={style.up}>
                <div className={style.title}>Отклик на вакансию</div>
                <div className={style.vakname}>{man.name}</div>

                <input onChange={e=>setMyname(e.target.value)} value={myname} type="text" className={style.forminput} placeholder='Как Вас зовут'/>
                <input onChange={e=>setPhone(e.target.value)} value={phone} type="number" className={style.forminput} placeholder='Телефон для связи'/>
                <lable>Ваш вопрос:</lable>
                <textarea style={{height: 80, resize: 'none'}} onChange={e=>setEmail(e.target.value)} value={email} type="text" className={style.forminput} />
            </div>
            <div className={style.down}>
                <div className={style.btnpost} onClick={postMess}>Отправить</div>
            </div>



        </div>
    )
}

export default PostQuestion