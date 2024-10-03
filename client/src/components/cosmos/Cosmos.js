import style from './Cosmos.module.scss'
import {useState} from "react";
function Cosmos () {

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
                <div className={style.content}>
                    <div className={style.left}>
                        <div className={style.imgblock}>
                            <img className={style.planer1} src="./files/cosmos/planer1.png" alt=""/>
                            <img className={style.blue} src="./files/cosmos/blue.svg" alt=""/>
                            <img className={style.planer2} src="./files/cosmos/planer2.png" alt=""/>
                            <img className={style.grey} src="./files/cosmos/grey.svg" alt=""/>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.title}>
                            АВИАТЕХ
                        </div>
                        <div className={style.pretitle}>
                            Авиационный учебный центр по подготовке специалистов авиационного персонала
                        </div>
                        <div className={style.desc}>
                            Никогда не поздно начать летать - АвиаТЕХ: ваш первый шаг к небу!
                        </div>
                    </div>
                </div>
                <div className={style.contenttwo}>
                    <div className={style.blocks}>
                        {whys.map((block, index) => (
                            <div key={index} className={style.why} style={{backgroundImage: `url('files/cosmos/${block.back}')`}}>
                                <div className={style.fon}></div>
                                <img src={`files/cosmos/${block.image}`} alt=""/>
                                <div className={style.desc}>
                                    <div className={style.title}>{block.title}</div>
                                    <div className={style.description}>{block.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cosmos