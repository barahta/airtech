import { useEffect, useRef, useState } from 'react';
import style from './TeacherTitle.module.scss';

function TeacherTitle() {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6, // элемент считается видимым, когда 10% его видно на экране
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, options);

        if (titleRef.current && descRef.current) {
            observer.observe(titleRef.current);
            observer.observe(descRef.current);
        }

        return () => {
            if (titleRef.current && descRef.current) {
                observer.unobserve(titleRef.current);
                observer.unobserve(descRef.current);
            }
        };
    }, []);

    return (
        <div className={style.main}>
            <div
                ref={titleRef}
                className={`${style.title} ${isVisible ? style.titlevisible : ''}`}
            >
                Пилоты-инструкторы
            </div>
            <div
                ref={descRef}
                className={`${style.desc} ${isVisible ? style.descvisible : ''}`}
            >
                Самый профессиональный состав инструкторов и преподавателей, готовых делится своим опытом и знаниями:
            </div>
        </div>
    );
}

export default TeacherTitle;