import style from './styles/VakansiiStyle.module.scss';
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import { useEffect, useState, useRef } from "react";
import WriteModal from "../components/modalwin/WriteModal";
import PostResume from "../components/forms/PostResume";
import { Link } from "react-router-dom";

function PreRight() {
    const materials = [
        {
            name: 'Подготовка к обучению',
            content: [
                {
                    lastname: 'lasttitle',
                    text: 'Документы, необходимые для прохождения обучения:'
                },
                {
                    lastname: 'list',
                    textarr: [
                        'Паспорт',
                        'Диплом о среднем профессиональном / высшем образовании',
                        'Заключение медицинской комиссии ВЛЭК на частного пилота (II класс, III графа) – до обучения',
                        'СНИЛС'
                    ]
                },
                {
                    lastname: 'lasttitle',
                    text: 'Как проходить ВЛЭК:'
                },
                {
                    lastname: 'simple',
                    text: 'Прохождение врачебно-летной экспертной медкомиссии перед обучением – обязательное требование для каждого будущего пилота.',
                    weight: '400'
                },
                {
                    lastname: 'image',
                    urls: ['/files/airtech/1.jpg']
                },
                {
                    lastname: 'numlist',
                    textarr: [
                        'Предварительный сбор справок и документов по информации с сайта выбранного к прохождению ВЛЭК.',
                        'Запись на прием. В некоторых ВЛЭК требуется предварительная запись, необходимо уточнять информацию по телефону.',
                        'Прохождение комиссии: оформление договора → председатель изучает справки и назначает врачей → прохождение врачей и сдача анализов → заключение председателя.'
                    ]
                },
                {
                    lastname: 'urltext',
                    text: 'Более подробно – в нашей статье',
                    url: '',
                    color: 'blue'
                },
                {
                    lastname: 'simple',
                    text: 'Документы, необходимые для прохождения обучения:',
                    weight: '600'
                },
                {
                    lastname: 'simple',
                    text: 'Любой желающий может приехать к нам по предварительной записи в учебный класс в Екатеринбурге, посмотреть как проходит теоретическая подготовка, пообщаться насчет обучения и послушать лекции от наших преподавателей.',
                    weight: '400'
                },
                {
                    lastname: 'simple',
                    text: 'Либо доехать до аэродрома Логиново- мы покажем как проходит тренажерная и летная подготовка в нашем учебном центре.',
                    weight: '400'
                },
                {
                    lastname: 'urltext',
                    text: 'Для записи – свяжитесь с нами любым удобным для Вас способом.',
                    url: '',
                    color: 'blue'
                },
            ]
        },
        {
            name: 'Медицинские требования',
            content: [
                {
                    lastname: 'simple',
                    text: 'Список ограничений:',
                    weight: '400'
                },
                {
                    lastname: 'list',
                    textarr: [
                        'Вес тела должен быть в пределах 48-110 килограмм, избыточный вес не более, чем 1 стадия ожирения. Это допускается, при наличии идеального здоровья у конкретного кандидата',
                        'Рост в пределах 155-190 сантиметров, сидя не более 95 сантиметров',
                        'Отсутствие серьёзных травм, операций за период в 6 месяцев',
                        'При наличии хронических синуситов, тонзиллитов кандидат оценивается по индивидуальной шкале. Хронический тонзиллит компенсированного вида является профессионально пригодным, декомпенсированного вида — нет.',
                        'Гнойные синуситы или дистрофия слизистой являются полной непригодностью пилота к лётному делу',
                        'Незначительные нарушения в зоне ЛОР-органов оцениваются также по индивидуальной шкале',
                        'Лёгкие дефекты речи, которые не влияют на разборчивость речи, могут быть также оценены по индивидуальной шкале',
                        'Проблемы с сердечной деятельностью являются серьёзным препятствием к лётному делу',
                        'Практически все заболевания отправят вас в статус «непригоден», кроме редких исключений и незначительных сбоев в работе сердца. Всё это оценивается по индивидуальной шкале в каждом отдельном случае',
                        'Слабое зрение определяется врачом офтальмологом по индивидуальной шкале',
                        'Эпилепсия и психические расстройства являются барьером для лётного дела, этот пункт ставит вас автоматически в непригодность',
                        'Наличие переломов за последние несколько лет могут также стать препятствием к прохождению комиссии. Этот пункт идёт на усмотрение хирурга, только после полного обследования. Возможно, вас попросят сделать снимки перелома и только на основании их поставят диагноз. Будьте готовы к трате лишнего времени в связи с обследованием',
                        'Лица, имеющие проблемы с давлением, автоматически отправляются к кардиологу, который обязан им предложить пройти дополнительное обследование'
                    ]
                },
            ]
        },
        {
            name: 'На чем и куда можно летать',
            content: [
                {
                    lastname: 'lasttitle',
                    text: 'На чем можно летать'
                },
                {
                    lastname: 'simple',
                    text: 'Теперь разберемся, какими самолетами можно управлять, окончив АУЦ Авиа ТЕХ. В вашем свидетельстве стоит квалификационная отметка «самолет с одним двигателем, сухопутный». То есть на двухдвигательных аппаратах, гидросамолетах, а также вертолетах вы летать не сможете. Во всяком случае, за штурвалом.',
                    weight: '400'
                },
                {
                    lastname: 'simple',
                    text: 'Кроме того, нужна дополнительная подготовка для управления некоторыми самолетами с одним двигателем. Например, спортивным Extra EA-300, на котором выполняют акробатические трюки, или реактивным L-29 Delfin. Этот самолет, хоть и однодвигательный, но реактивный, и пересесть на него с Cessna — все равно, что без подготовки сесть за руль болида «Формулы-1» сразу после обычной легковушки.',
                    weight: '400'
                },
                {
                    lastname: 'simple',
                    text: 'Но почти все остальные однодвигательные самолеты вам подвластны. Выбор большой: помимо Cessna, еще есть итальянский Tecnam, канадский Zodiac, американские Piper, Cirrus и другие. Двух-, четырех-, шести- и даже восьмиместные — можно взять в полет друзей.',
                    weight: '400'
                },
                {
                    lastname: 'lasttitle',
                    text: 'Куда можно летать'
                },
                {
                    lastname: 'simple',
                    text: 'Ну вот, свидетельство пилота на руках, управлять самолетом вы научились. Что же делать дальше? Ну как что — брать в руки штурвал!',
                    weight: '400'
                },
                {
                    lastname: 'simple',
                    text: 'Можно летать в районе родного аэродрома просто ради впечатлений: рассекать облака, угадывать знакомые места, любоваться с высоты птичьего полета цветущими полями и изгибами рек. Показывать близким родной край с необычного ракурса и дарить им новые ощущения.',
                    weight: '400'
                },
                {
                    lastname: 'simple',
                    text: 'Можно путешествовать. Россия как нельзя лучше подходит для авиационного туризма: большие расстояния, мало дорог и много удивительных достопримечательностей, до которых обычным транспортом добраться непросто. При этом вы не ограничены расписанием, не зависите от того, собралась ли туристическая группа, можете прилететь и улететь, когда захотите, не теряя драгоценное время на ожидание рейса в большом аэропорту или на езду по плохим дорогам. Самолет дает вам свободу.',
                    weight: '400'
                },
                {
                    lastname: 'simple',
                    text: 'Малая авиация в России развивается: в стране достаточно аэродромов, где можно приземлиться, чтобы заправиться. И не забывайте, что на легкомоторном самолете можно садиться и в больших аэропортах.',
                    weight: '400'
                },
                {
                    lastname: 'urltext',
                    text: 'Карта всех аэродромов России',
                    url: '',
                    color: 'blue'
                },
                {
                    lastname: 'simple',
                    text: 'Свидетельство, выданное авиационными властями России, признается другими странами, которые входят в международную организацию гражданской авиации (ICAO). Это значит, что выполнять полеты можно и за рубежом, если, конечно, нет других ограничений. Правда, для полетов за границу нужно дополнительно сдать авиационный английский.',
                    weight: '400'
                },
                {
                    lastname: 'simple',
                    text: 'А еще можно пойти дальше — в авиационный спорт. Освоить пилотаж, аэробатику или попробовать свои силы в авиаралли, где пилоты соревнуются в точном прохождении маршрута.',
                    weight: '400'
                }
            ]
        },
        {
            name: 'Требования для пилотов',
            content: [
                {
                    lastname: 'simple',
                    text: 'Согласно пункту 1 статьи 52 ВК РФ, к авиационному персоналу относятся лица, имеющие профессиональную подготовку и осуществляющие деятельность, связанную непосредственно с выполнением перевозок, обеспечением безопасности и обслуживанием воздушного транспорта. Перечень специалистов авиационного персонала содержится в Приказе Минтранса России от 04.08.2015 № 240. ВК РФ предусматривает следующие требования для авиационного персонала, в том числе и летчиков: пилоты и другие специалисты авиации не могут иметь непогашенную или неснятую судимость за совершение умышленного преступления; лица из числа специалистов должны проходить предварительные и периодические медицинские обследования; на должности персонала авиации не принимаются лица, подвергавшиеся административному наказанию за употребление наркотических и психотропных веществ без предписания врача, страдающие алкоголизмом и другими психическими расстройствами; наличие свидетельства, дающего право на осуществление летных функций, и т. д. Это далеко не полный список требований, остальные перечислены в других нормативных актах, в частности, в Постановлении Правительства РФ от 06.08.2013 № 670. Как стать пилотом самолета и что для этого нужно? Основной документ, дающий право работать пилотом, — летное свидетельство. Чтобы его получить, необходимо пройти четыре длительных и весьма затратных этапа: получить профильное образование; сдать теоретические и практические экзамены; пройти медицинское освидетельствование; налетать необходимое количество часов.',
                    weight: '400'
                }
            ]
        },
    ]

    const [actvmat, setActvMat] = useState(0);
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const [rootMargin, setRootMargin] = useState('0px');
    const sectionRefs = useRef([]);

    // Прокрутка к секции при клике
    const handleScrollToSection = (index) => {
        setActvMat(index);
        sectionRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Обработчик прокрутки - IntersectionObserver
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // Процент видимости элемента
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const visibleIndex = sectionRefs.current.indexOf(entry.target);
                    setActvMat(visibleIndex);
                }
            });
        }, observerOptions);

        // Добавляем наблюдателя к каждому разделу
        sectionRefs.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            // Перед удалением проверяем, существует ли элемент
            sectionRefs.current.forEach((section) => {
                if (section) {
                    observer.unobserve(section); // Разнаблюдаем, если элемент существует
                }
            });
        };
    }, [rootMargin]);

    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume man={data} setActivemodal={setActivemodal} />} setData={setData} />
            <SmallHeader />
            <div className={style.vakansii}>
                <div className={style.container}>
                    <div className={style.title}>Вспомогательные материалы</div>
                    <div className={style.block}>
                        <div className={style.leftpart}>
                            <div className={style.navigate}>
                                {materials.map((point, indexMat) => (
                                    <div
                                        key={indexMat}
                                        className={style.point}
                                        onClick={() => handleScrollToSection(indexMat)}
                                    >
                                        {point.name}
                                        <div className={style.total} style={(actvmat === indexMat) ? { backgroundColor: '#06b7d9' } : {}}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.rightpart}>
                            {materials.map((point, index) => (
                                <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className={style.list}>
                                    <div className={style.position}>
                                        <div className={style.title}>
                                            <div className={style.text}>{point.name}</div>
                                        </div>
                                        <div className={style.units} style={{ display: 'flex' }}>
                                            {point.content.map((check, indexCheck) => {
                                                if (check.lastname === 'lasttitle') {
                                                    return <div key={indexCheck} className={style.lasttitle}>{check.text}</div>;
                                                }
                                                if (check.lastname === 'list') {
                                                    return (
                                                        <div className={style.list} key={indexCheck}>
                                                            {check.textarr.map((text, indexList) => (
                                                                <div key={indexList} className={style.line}>
                                                                    <div className={style.coma}></div>
                                                                    <div className={style.text}>{text}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    );
                                                }
                                                if (check.lastname === 'simple') {
                                                    return <div key={indexCheck} className={style.simple} style={{ fontWeight: check.weight }}>{check.text}</div>;
                                                }
                                                if (check.lastname === 'image') {
                                                    return (
                                                        <div key={indexCheck} className={style.image}>
                                                            {check.urls.map((img, indexImg) => (
                                                                <img key={indexImg} src={img} className={style.img} />
                                                            ))}
                                                        </div>
                                                    );
                                                }
                                                if (check.lastname === 'numlist') {
                                                    return (
                                                        <div key={indexCheck} className={style.numlist}>
                                                            {check.textarr.map((text, indexNumList) => (
                                                                <div key={indexNumList} className={style.line}>
                                                                    <div className={style.num}>{indexNumList + 1}</div>
                                                                    <div className={style.text}>{text}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    );
                                                }
                                                if (check.lastname === 'urltext') {
                                                    return (
                                                        <Link to={check.url} key={indexCheck} className={style.urltext}>
                                                            {check.text}
                                                        </Link>
                                                    );
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PreRight;