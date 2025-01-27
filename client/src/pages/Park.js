import style from './styles/VakansiiStyle.module.scss'
import pilots from './styles/Park.module.scss'
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useState} from "react";
import WriteModal from "../components/modalwin/WriteModal";
import PostResume from "../components/forms/PostResume";
import {Link} from "react-router-dom";
import TeacherTitle from "../components/titles/TeacherTitle";
import Teachers from "../components/teachers/Teachers";
import CallMe from "../components/callme/CallMe";
import GalaryList from "../components/galary/GalaryList";

function Park (){



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
                            <div className={pilots.name}>Парк самолётов</div>
                            {/*<div className={pilots.packet}>*/}
                            {/*    <div className={pilots.pacname}>*/}
                            {/*        <div className={pilots.up}>Срок программы:</div>*/}
                            {/*        <div className={pilots.oclock}><label>50</label> дней</div>*/}
                            {/*    </div>*/}
                            {/*    <div className={pilots.pacname}>*/}
                            {/*        <div className={pilots.up}>Теория:</div>*/}
                            {/*        <div className={pilots.oclock}><label>188</label> часов</div>*/}
                            {/*    </div>*/}
                            {/*    <div className={pilots.pacname}>*/}
                            {/*        <div className={pilots.up}>Летная практика:</div>*/}
                            {/*        <div className={pilots.oclock}><label>40</label> часов</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className={pilots.desc}>
                                {/*<div className={pilots.ochno}>Форма обучения: <label>очная</label></div>*/}
                                <div className={pilots.more}>
                                    <div className={pilots.openmore}>
                                        <div className={pilots.next}></div>
                                        {/*<Link to='/allnews' className={pilots.title}>Оставить заявку</Link>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*<div className={pilots.rusavia}>*/}
            {/*    <div className={pilots.blurback}></div>*/}
            {/*    <div className={pilots.container}>*/}
            {/*        <div className={pilots.content}>*/}
            {/*            <img src="files/logos/rusavia.png" alt=""/>*/}
            {/*            <div className={pilots.texter}>Мы единственные в России кто добился от Росавиации утверждения программы с тренажерной подготовкой в кабине самолета, т.к. не существует в мире сертифицированного авиатренажера для маленьких самолетов, которые бы не формировали ложные навыки у курсантов. И наша программа эксклюзивна тем, что мы можем обучать на любом типе Воздушного судна с одним двигателем, это может быть и Pilatus PC 12 и Cessna 172 - все зависит от вашего желания.</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={pilots.planers}>
                <div className={pilots.content}>
                    <div className={pilots.fly}>
                        <div className={pilots.name}>PIPER PA-28</div>
                        <div className={pilots.image}>
                            <img src="files/planers/paiper.webp"  className={pilots.plane2}/>
                        </div>

                    </div>
                    <div className={pilots.fly}>
                        <div className={pilots.descriptions}>
                            <label className={pilots.oneline}>Самолет проверенный временем</label>
                            <label className={pilots.nextline}>Piper PA-28 Cherokee – легкомоторное воздушное судно, производимое американской авиастроительной корпорацией Piper Aircraft  с 1961 года по настоящее время, что делает этот самолёт одним из самых массово выпускаемых за всю историю существования авиации.</label>

                        </div>


                        {/*<div className={pilots.name}>PIPER PA-28</div>*/}
                        {/*<div className={pilots.image}>*/}
                        {/*    <img src="files/planers/paiper.webp"  className={pilots.plane2}/>*/}
                        {/*</div>*/}
                        {/*<div className={pilots.right}></div>*/}
                    </div>
                </div>
            </div>
            <div className={pilots.characters}>
                <div className={pilots.content}>
                    <div className={pilots.form}>
                        {/*<div className={pilots.title}>Характеристики Piper PA-28 Cherokee</div>*/}
                        <div className={pilots.stages}>
                            <div className={pilots.st}>
                                <div className={pilots.name}>Характеристики Piper PA-28 Cherokee</div>
                                <div className={pilots.time}>
                                    {/*<div className={pilots.line}>продолжительность:</div>*/}
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Длина: </div><label>8.33 м</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Размах крыльев: </div><label>10.8 м</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Высота: </div><label>2.52 м</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Взлетный вес (max): </div><label>1317 кг</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Двигатель: </div><label>Lycoming O-320-E2A</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Максимальная скорость: </div><label>330 км/ч</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Крейсерская скорость: </div><label>285 км/ч</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Дальность полета: </div><label>1665 км</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Практический потолок: </div><label>6095 м</label></div></div>
                                    <div className={pilots.oclock}><div className={pilots.itogy}><div className={pilots.text}>Вместимость (c пилотом): </div><label>4 человека</label></div></div>
                                </div>
                                {/*<div className={pilots.desc}>Теоретическую часть обучения курсанты проходят в уютном учебном классе. Класс оборудован всем необходимым для комфортного обучения: парты и удобные стулья, карты, учебные информационные стенды, флипчарты, проектор</div>*/}
                                {/*<div className={pilots.adress}>*/}
                                {/*    <i className="fa-solid fa-location-crosshairs"/>*/}
                                {/*    <div className={pilots.line}>*/}
                                {/*        <div className={pilots.tit}>адрес:</div>*/}
                                {/*        <div className={pilots.text}>Россия, Тюменская область, г. Тюмень Ямская 116, оф. 410*/}
                                {/*            Россия, Свердловская область, г. Екатеринбург, ул. Мамина-Сибиряка 101, оф. 2.27*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*</div>*/}
                            </div>
                            <div className={pilots.st}>
                                <div className={pilots.name}>О самолете Piper PA-28 Cherokee</div>
                                <div className={pilots.time}>
                                    <div className={pilots.oclockright}><div className={pilots.itogy}><label></label> <div className={pilots.text}>Piper PA-28 Cherokee был представлен в 1960 году и получил широкое распространение благодаря своим хорошим летным характеристикам, надежности и простоте в эксплуатации.</div></div></div>
                                    <div className={pilots.oclockright}><div className={pilots.itogy}><label></label> <div className={pilots.text}>Самолет оснащен четырех- или шестицилиндровым поршневым двигателем, который развивает скорость около 300 км/ч. PA-28 может перевозить до четырех человек (пилот + 3 пассажира), а также имеет вместительный багажный отсек. Большое количество модификаций этого самолета позволяет адаптировать его под различные условия эксплуатации.</div></div></div>
                                    <div className={pilots.oclockright}><div className={pilots.itogy}><label></label> <div className={pilots.text}>Cherokee был разработан в эпоху, когда Piper строила летательные аппараты, ориентированные на любителей, поэтому его конструкция максимально упрощена и не содержит сложных элементов и систем. Например, в Cherokee нет пневмолифта и других аэродинамических устройств, создающих дополнительную подъемную силу. Однако, имеется система отклоняемых закрылок (flaps), которые используются для изменения подъемной силы и управления скоростью полета.</div></div></div>
                                    <div className={pilots.oclockright}><div className={pilots.itogy}><label></label> <div className={pilots.text}>Самолет имеет ряд преимуществ, таких как удобная кабина с широким обзором, устойчивость и предсказуемость поведения в полете, длинный запас полета и достаточно высокую скорость для самолета такого класса.</div></div></div>
                                    <div className={pilots.oclockright}><div className={pilots.itogy}><label></label> <div className={pilots.text}>PA-28 Cherokee широко используется в мире для обучения пилотов, грузовых перевозок и патрулирования. Он также популярен среди частных владельцев и фирм, использующих самолеты для корпоративных полетов. Считается одним из самых надежных и безопасных самолетов в своем классе.</div></div></div>
                                </div>

                            </div>
                        </div>
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

                    </div>
                    <div className={pilots.fly}>
                        <div className={pilots.descriptions}>
                            <label className={pilots.oneline}>Воздушный бестселлер — сверхнадежная Cessna 172</label>
                            <label className={pilots.nextline}>Cessna 172 ― самый массовый в мире самолет, произведенный в США. Используется для подготовки пилотов в летных училищах РФ и по всему миру</label>
                        </div>


                        {/*<div className={pilots.name}>PIPER PA-28</div>*/}
                        {/*<div className={pilots.image}>*/}
                        {/*    <img src="files/planers/paiper.webp"  className={pilots.plane2}/>*/}
                        {/*</div>*/}
                        {/*<div className={pilots.right}></div>*/}
                    </div>
                </div>
            </div>
            <TeacherTitle titletextr={'Легкие самолеты - большие мечты'} desctextr={'доверьтесь АвиаТЕХ и покорите небо!'}/>
            <GalaryList />
            <Footer/>
        </div>
    )
}

export default Park