import { useEffect, useRef, useState } from "react";
import style from './styles/ContactsStyle.module.scss';
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import MyMap from "../components/map/Map";
import WriteModal from "../components/modalwin/WriteModal";
import PostContact from "../components/forms/PostContact";
import {useMessage} from "../hooks/message.hook";
import {Link} from "react-router-dom";
import EntryBlanck from "../components/forms/EntryBlanck";

function Contacts() {
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const postResume = (pos = '') => {
        setData(pos)
        setActivemodal(true)
    }
    const people = [
        {
            photo: '1.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '2.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '3.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '4.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '5.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '6.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '7.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        }
    ];

    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <SmallHeader />
            <div className={style.contacts}>
                <div className={style.ontheleft}>
                    <div className={style.container50}>
                        <div className={style.strock}>телефон</div>
                        <div className={style.strock}>+7 (343) 363-97-60</div>
                        <div className={style.strock}>адрес</div>
                        <div className={style.strock}>625032, г. Тюмень, ул. Ямская 116 оф. 410</div>
                        <div className={style.strock}>620066, г. Екатеринбург, ул. Мамина-Сибиряка 101, оф. 2.27s</div>
                    </div>
                </div>
                <div className={style.ontheright}>
                    <div className={style.container50}>
                        <div className={style.entry}>
                            {/*<Link to='/allprograms' className={style.btn}>Все программы</Link>*/}
                            <div className={style.btn} onClick={()=>postResume()}>Записаться</div>
                        </div>
                    </div>
                </div>
            </div>
            <MyMap />
            <Footer />
        </div>
    );
}

export default Contacts;