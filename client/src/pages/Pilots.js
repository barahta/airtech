import style from './styles/VakansiiStyle.module.scss'
import pilots from './styles/Pilots.module.scss'
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import NewsPost from "../components/news/NewsPost";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useState} from "react";
import FormModal from "../components/modalwin/FormModal";
import PostContact from "../components/forms/PostContact";
import WriteModal from "../components/modalwin/WriteModal";
import PostResume from "../components/forms/PostResume";
import {Link} from "react-router-dom";
import TeacherTitle from "../components/titles/TeacherTitle";
import Teachers from "../components/teachers/Teachers";
import CallMe from "../components/callme/CallMe";

function Pilots (){



    const [checkvak, setCheckvak] = useState('')
    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')
    let totality = 0



    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <SmallHeader/>
            <div className={pilots.pilots}>
                    <div className={pilots.container}>
                        <div className={pilots.title}>
                            <div className={pilots.name}>Программа подготовки частных пилотов малой авиации</div>
                            <div className={pilots.packet}>
                                <div className={pilots.pacname}>
                                    <div className={pilots.up}>Срок программы:</div>
                                    <div className={pilots.oclock}><label>50</label> дней</div>
                                </div>
                                <div className={pilots.pacname}>
                                    <div className={pilots.up}>Теория:</div>
                                    <div className={pilots.oclock}><label>188</label> часов</div>
                                </div>
                                <div className={pilots.pacname}>
                                    <div className={pilots.up}>Летная практика:</div>
                                    <div className={pilots.oclock}><label>40</label> часов</div>
                                </div>
                            </div>
                            <div className={pilots.desc}>
                                <div className={pilots.ochno}>Форма обучения: <label>очная</label></div>
                                <div className={pilots.more}>
                                    <div className={pilots.openmore}>
                                        <div className={pilots.next}></div>
                                        <Link to='/allnews' className={pilots.title}>Оставить заявку</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={pilots.rusavia}>
                <div className={pilots.blurback}></div>
                <div className={pilots.container}>
                    <div className={pilots.content}>
                        <img src="files/logos/rusavia.png" alt=""/>
                        <div className={pilots.texter}>Мы единственные в России кто добился от Росавиации утверждения программы с тренажерной подготовкой в кабине самолета, т.к. не существует в мире сертифицированного авиатренажера для маленьких самолетов, которые бы не формировали ложные навыки у курсантов. И наша программа эксклюзивна тем, что мы можем обучать на любом типе Воздушного судна с одним двигателем, это может быть и Pilatus PC 12 и Cessna 172 - все зависит от вашего желания.</div>
                    </div>
                </div>
            </div>
            <div className={pilots.planers}>
                <div className={pilots.content}>
                    <div className={pilots.fly}>
                        <div className={pilots.name}>CESSNA 172</div>
                        <div className={pilots.image}>
                            <img src="files/planers/cessna172.webp" className={pilots.plane1}/>
                        </div>
                        <div className={pilots.left}></div>
                    </div>
                    <div className={pilots.fly}>
                        <div className={pilots.name}>PIPER PA-28</div>
                        <div className={pilots.image}>
                            <img src="files/planers/paiper.webp"  className={pilots.plane2}/>
                        </div>
                        <div className={pilots.right}></div>
                    </div>
                </div>
            </div>
            <div className={pilots.lessons}>
                <div className={pilots.content}>
                    <div className={pilots.left}>
                        <div className={pilots.title}>Варианты обучения</div>
                        <div className={pilots.options}>
                            <div className={pilots.opt}>
                                <div className={pilots.name}>Выходного дня</div>
                                <div className={pilots.desc}>Теоретические занятия проходят в учебном классе - 6 часов в день. Продолжительность 3 мес. Тренажерная и практическая подготовка согласовывается индивидуально после прохождения теоретической.</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.name}>Вечернее</div>
                                <div className={pilots.desc}>Будни с 19 до 22 часов. Продолжительность - 2 мес. Теоретические занятия проходят в учебном классе. Тренажерная и практическая подготовка согласовывается индивидуально после прохождения теоретической.</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.name}>Индивидуально</div>
                                <div className={pilots.desc}>Теоретическая подготовка 7 дней в неделю по 6 часов. Продолжительность 30 дней. Тренажерная и практическая подготовка согласовывается индивидуально после прохождения теоретической - продолжительность 20 дней.</div>
                            </div>
                        </div>
                    </div>
                    <div className={pilots.right}>
                        <div className={pilots.title}>Теоретические дисциплины:</div>
                        <div className={pilots.desc}>Теоретическое обучение проходит строго по аккредитованной программе по требованиям Росавиации, в очном формате в учебных классах</div>
                        <div className={pilots.options}>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Воздушное право</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Возможности человека</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Основы полета</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Навигация</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Общие знания по воздушным судам</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Метеорология</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Летная эксплуатация воздушных судов</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Радиотелефония</div>
                            </div>
                            <div className={pilots.opt}>
                                <div className={pilots.point}></div>
                                <div className={pilots.text}>Эксплуатационные правила</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={pilots.location}>
                <div className={pilots.content}>
                    <div className={pilots.form}>
                        <div className={pilots.title}>Где проходит обучение</div>
                        <div className={pilots.stages}>
                            <div className={pilots.st}>
                                <div className={pilots.name}>Теоретическая часть</div>
                                <div className={pilots.time}>
                                    <div className={pilots.line}>продолжительность:</div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><label>188</label> <div className={pilots.text}>часов</div></div></div>
                                </div>
                                <div className={pilots.desc}>Теоретическую часть обучения курсанты проходят в уютном учебном классе. Класс оборудован всем необходимым для комфортного обучения: парты и удобные стулья, карты, учебные информационные стенды, флипчарты, проектор</div>
                                <div className={pilots.adress}>
                                    <i className="fa-solid fa-location-crosshairs"/>
                                    <div className={pilots.line}>
                                        <div className={pilots.tit}>адрес:</div>
                                        <div className={pilots.text}>Россия, Тюменская область, г. Тюмень Ямская 116, оф. 410
                                            Россия, Свердловская область, г. Екатеринбург, ул. Мамина-Сибиряка 101, оф. 2.27
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={pilots.st}>
                                <div className={pilots.name}>Тренажерная подготовка</div>
                                <div className={pilots.time}>
                                    <div className={pilots.line}>продолжительность:</div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><label>22</label> <div className={pilots.text}>часа</div></div></div>
                                </div>
                                <div className={pilots.desc}>Тренажерная подготовка проходит в кабине самолета. Тренажерная подготовка проводится в кабине настоящего самолета чтобы не появлялись ЛОЖНЫЕ навыки у курсанта</div>
                                <div className={pilots.adress}>
                                    <i className="fa-solid fa-location-crosshairs"/>
                                    <div className={pilots.line}>
                                        <div className={pilots.tit}>адрес:</div>
                                        <div className={pilots.text}>Россия, Тюменская область, аэродром ДОСААФ Уват
                                            Россия, Свердловская область, г. Логиново, аэродром Логиново
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={pilots.st}>
                                <div className={pilots.name}>Лётная подготовка</div>
                                <div className={pilots.time}>
                                    <div className={pilots.line}>продолжительность:</div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><label>40</label> <div className={pilots.text}>часов</div></div></div>
                                </div>
                                <div className={pilots.desc}>При необходимости курсант сможет докупить летные часы, для прохождения дополнительной подготовки. На самолетах Pilatus PC 12 и Cessna 172 - все зависит от вашего желания</div>
                                <div className={pilots.adress}>
                                    <i className="fa-solid fa-location-crosshairs"/>
                                    <div className={pilots.line}>
                                        <div className={pilots.tit}>адрес:</div>
                                        <div className={pilots.text}>Россия, Тюменская область, аэродром ДОСААФ Уват
                                            Россия, Свердловская область, г. Логиново, аэродром Логиново
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CallMe />
            <TeacherTitle />
            <Teachers />
            <Footer/>
        </div>
    )
}

export default Pilots