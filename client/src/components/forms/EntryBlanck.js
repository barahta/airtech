import style from './PostResumeStyle.module.scss'
import {useEffect, useState} from "react";
import useNotification from "../../hooks/useNotification.hook";
import Nota from "./Nota";
import {useMessage} from "../../hooks/message.hook";
import NewsService from "../../services/NewsService";

const EntryBlanck = ({man,setActivemodal}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: 'info@airtechs.gk-omedia.ru',
        message: '',
        recipient: 'mail@airtechs.ru', // Почта для получения сообщений
    });

    const getContacts = async () => {
        try{
            const {data} = await NewsService.plusContactParam()
        }catch(e){
            console.log(e)
        }
    }
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('/views/contact', formData);
            const response = await NewsService.sendContactMessage(formData);
            setResponseMessage(response.data.message);
            if(response.data){setActivemodal(false)}
        } catch (error) {
            setResponseMessage(error.response?.data?.error || 'Произошла ошибка. Попробуйте снова.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={style.main}>
            <div className={style.up}>
                <div className={style.title}>Онлайн запись</div>
                <div className={style.vakname}>{(man)&&man.name}</div>
                <input
                    onChange={handleInputChange}
                    value={formData.name}
                    name="name"
                    type="text"
                    className={style.forminput}
                    placeholder='Как Вас зовут'
                    required/>
                <input value={formData.message}
                   name="message"
                   onChange={handleInputChange}
                   type="number"
                   className={style.forminput}
                   placeholder='Телефон для связи'
                   required/>
            </div>
            <div className={style.down}>
                {responseMessage}
                <button type="submit" className={style.btnpost}>Записаться</button>
            </div>



        </form>

    );
};
// function EntryBlanck ({man,setActivemodal}){
//
//     const [myname, setMyname] = useState('')
//     const [phone, setPhone] = useState('')
//     const [date, setDate] = useState('')
//     const { notifications, addNotification } = useNotification();
//     const [active, setActive] = useState(false)
//     const [recipientEmail, setRecipientEmail] = useState('');
//     const message = useMessage();
//
//     const postMess = async () => {
//         if (myname.length > 0 && phone.length > 0 && recipientEmail.length > 0) {
//             try {
//                const {data} = await NewsService.sendMail({myname, phone, recipientEmail})
//
//                     alert('Заявка успешно принята');
//                     // setActivemodal(false);
//                     // setMyname('');
//                     // setPhone('');
//                     // setRecipientEmail(''); // Очистка поля email
//
//             } catch (error) {
//                 console.error('Ошибка отправки:', error);
//             }
//         } else {
//             alert('Пожалуйста, заполните все поля2.');
//         }
//     }
//
//     useEffect(()=>{
//         setRecipientEmail('funcoffee@yandex.ru')
//     },[])
//
//
//     return (
//         <div className={style.main}>
//             <div className={style.up}>
//                 <div className={style.title}>Онлайн запись</div>
//                 <div className={style.vakname}>{man.name}</div>
//                 <input onChange={e=>setMyname(e.target.value)} value={myname} type="text" className={style.forminput} placeholder='Как Вас зовут'/>
//                 <input onChange={e=>setPhone(e.target.value)} value={phone} type="number" className={style.forminput} placeholder='Телефон для связи'/>
//             </div>
//             <div className={style.down}>
//                 <div className={style.btnpost} onClick={postMess}>Записаться</div>
//             </div>
//
//
//
//         </div>
//     )
// }

export default EntryBlanck