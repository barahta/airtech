import { useEffect, useRef, useState } from 'react';
import style from './Teachers.module.scss';
import { Link } from "react-router-dom";
import PostResume from "../forms/PostResume";
import WriteModal from "../modalwin/WriteModal";
import EntryBlanck from "../forms/EntryBlanck";

function Teachers() {
    const [showVideo, setShowVideo] = useState(false);
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const pilotRef = useRef(null);

    const postResume = (pos = '') => {
        setData(pos);
        setActivemodal(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Использование Intersection Observer для отслеживания видимости блока
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, {
            threshold: 0.1
        });

        if (pilotRef.current) {
            observer.observe(pilotRef.current);
        }

        return () => {
            if (pilotRef.current) {
                observer.unobserve(pilotRef.current);
            }
        };
    }, []);

    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data} setActivemodal={setActivemodal}/>} setData={setData} />
            <div className={style.video}></div>
            <div className={style.container}>
                <div className={style.leftpart}>
                    <div className={style.teacher}>
                        <div className={style.photo} style={{backgroundImage: `url('files/teachers/mentor2.webp')`}}></div>
                        <div className={style.cardboard}>
                            <div
                                ref={pilotRef}
                                className={`${style.pilot} ${isVisible ? style.visible : ''}`}
                            >
                                <div className={style.dev}>Пилот-инструктор</div>
                                <div className={style.name}>Вершинин Вячеслав Витальевич</div>
                            </div>
                            <div className={style.desc}>
                                <div className={style.text}>
                                    <div className={style.ball}></div>
                                    <div className={style.con}>
                                        Общий налет более 3 500 часов
                                    </div>
                                </div>
                                <div className={style.text}>
                                    <div className={style.ball}></div>
                                    <div className={style.con}>
                                        Освоено более 10 типов Воздушных судов
                                    </div>
                                </div>
                                <div className={style.text}>
                                    <div className={style.ball}></div>
                                    <div className={style.con}>
                                        Пилот инструктор: Самолет с одним двигателем сухопутный, самолет, Вертолет Robinson R44, Вертолет МИ2 и МИ8.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.rightpart}>
                    <div className={style.teacher}>
                        <div className={style.photo} style={{backgroundImage: `url('files/teachers/mentor1.webp')`}}></div>
                        <div className={style.cardboard}>
                            <div
                                ref={pilotRef}
                                className={`${style.pilot} ${isVisible ? style.visible : ''}`}
                            >
                                <div className={style.dev}>Пилот-инструктор</div>
                                <div className={style.name}>Вершинин Вячеслав Витальевич</div>
                            </div>
                            <div className={style.desc}>
                                <div className={style.text}>
                                    <div className={style.ball}></div>
                                    <div className={style.con}>
                                        Общий налет более 17 000 часов
                                    </div>
                                </div>
                                <div className={style.text}>
                                    <div className={style.ball}></div>
                                    <div className={style.con}>
                                        Освоено более 10 типов Воздушных судов
                                    </div>
                                </div>
                                <div className={style.text}>
                                    <div className={style.ball}></div>
                                    <div className={style.con}>
                                        Пилот инструктор: Самолет с одним двигателем сухопутный, самолет многодвигательный сухопутный, гидросамолет многодвигательный, Вертолет Robinson R44.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.allteachers}>
                <div className={style.btn}>Все преподаватели <div className={style.next}></div></div>
            </div>
        </div>
    );
}

export default Teachers;