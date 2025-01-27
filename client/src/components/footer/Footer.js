import style from './FooterStyle.module.scss'
import {Link} from "react-router-dom";

function Footer (){
    return(
        <div className={style.main}>
            <div className={style.omediawater}></div>
            <div className={style.omedia}>АВИАТЕХ</div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.upper}>
                        <div className={style.column}>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>О нас</div>*/}
                            {/*</div>*/}
                            <Link to='/pilots' className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Программа обучения</div>
                            </Link>
                            <Link to='/preright'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Подготовка</div>
                            </Link>
                        </div>
                        <div className={style.column}>
                            <Link to={'/allnews'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Новости</div>
                            </Link>
                            <Link to={'/contacts'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </Link>
                        </div>
                        <div className={style.column}>
                            <Link to='/park'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Парк самолетов</div>
                            </Link>
                        </div>
                    </div>
                    <div className={style.uppermobile}>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>О нас</div>*/}
                            {/*</div>*/}
                            <Link to={'/pilots'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Программа обучения</div>
                            </Link>
                            <Link to={'/preright'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Подготовка</div>
                            </Link>
                            <Link to={'/allnews'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Новости</div>
                            </Link>
                            <Link to={'/contacts'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </Link>
                            <Link to={'/park'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Парк самолетов</div>
                            </Link>
                    </div>
                </div>
                <div className={style.contacts}>
                    <div className={style.data}>
                        <div className={style.adress}>625032, г. Тюмень, ул. Ямская 116 оф. 410</div>
                        <div className={style.adress}>620066, г. Екатеринбург, ул. Мамина-Сибиряка 101, оф. 2.27</div>
                        <div className={style.phone}>+7 (343) 363-97-60</div>
                    </div>
                    <div className={style.sociality}>
                        <a href='https://t.me/atitochnoproduser' target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-telegram"/></a>
                        <a href='https://www.instagram.com/aviatechsekb?igsh=NTc4MTIwNjQ2YQ==' target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-instagram"/></a>
                        <a href='https://vk.com/aviatexekb' target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-vk"/></a>
                        <a href='https://wa.me/message/LRG2COEM7MP6O1' target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-whatsapp"/></a>
                    </div>
                    <div className={style.autor}>
                        <div className={style.copyright}>

                        </div>
                        <div className={style.description}>
                            <div className={style.text}>АНО ДПО «АТ» ИНН 7203557801</div>
                            <div className={style.text}>Все права защищены</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer