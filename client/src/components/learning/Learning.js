import style from './Learning.module.scss'
import {useState} from "react";

function Learning (){

    const whys = [
        {
            title: 'Два типа самолета',
            image: 'twofly.svg',
            desc: 'Наш АУЦ проводит практическую подготовку на самолётах Cessna 172 и Piper PA28',
            back: 'back1.webp'
        },
        {
            title: 'Эксклюзивная программа',
            image: 'manfly.svg',
            desc: 'Наш АУЦ добился от Росавиации возможности проводить тренажерную подготовку в кабине самолета, чтобы не создались ложные навыки, а также нашему АУЦ разрешено производить подготовку на любом типе самолетов с одним двигателем начиная от Аэропракт заканчивая Пилатус ПС12.',
            back: ''
        },
        {
            title: 'На своем самолете',
            image: 'singlefly.svg',
            desc: 'В нашем АУЦ вы можете пройти практическую подготовку на своем самолете – он должен быть с действующим СЛГ и обслуживаться в сертифицированном центре.',
            back: 'back2.jpg'
        }
    ]

    const [activeblock, setActiveblock] = useState('')

    return(
        <div className={style.main}>

            <div className={style.paralax}>
            </div>
            <div className={style.container}>
                <div className={style.titlemain}>
                    <div className={style.text}>Покоряйте небо с нами*</div>
                    <div className={style.btn}>Оставить заявку</div>
                </div>
                <div className={style.contenttwo}>
                    <div className={style.blocks}>

                        <div className={style.why}>
                            <div className={style.fon}></div>
                            <div className={style.desc}>
                                <div className={style.title}>Варинты обучения</div>
                                <div className={style.description}>Выходного дня</div>
                                <div className={style.description}>Вечерняя группа</div>
                                <div className={style.description}>Индивидуальное обучение</div>
                            </div>
                            <div className={style.btn}>
                                <div className={style.text}>Подробнее</div>
                            </div>
                        </div>
                        <div className={style.why}>
                            <div className={style.fon}></div>
                            <div className={style.desc}>
                                <div className={style.title}>Стоимость обучения</div>
                                <div className={style.description}>Частного пилота самолета с одним двигателем - 1 100 000 ₽ - подробнее</div>
                                <div className={style.description}>Пилота свободного аэростата (воздушный шар) - 1 100 000₽ - подробнее</div>
                            </div>
                            <div className={style.btn}>
                                <div className={style.text}>Подробнее</div>
                            </div>
                        </div>
                        <div className={style.why}>
                            <div className={style.fon}></div>
                            <div className={style.desc}>
                                <div className={style.title}>Подготовка к обучению</div>
                                <div className={style.description}>Документы</div>
                                <div className={style.description}>ВЛЭК</div>
                                <div className={style.description}>Рекомендации</div>
                            </div>
                            <div className={style.btn}>
                                <div className={style.text}>Подробнее</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learning