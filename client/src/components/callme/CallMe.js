import style from './CallMe.module.scss'

function CallMe (){
    return(
        <div className={style.main}>
            <div className={style.backslash}></div>
            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.one}></div>
                    <div className={style.two}></div>
                    <div className={style.three}></div>
                    <div className={style.call}>
                        <img src="/files/logos/wingslogo.svg"/>
                        <div className={style.text}>У Вас появились вопросы?</div>
                        <div className={style.btn}>Задать вопрос</div>
                    </div>
                    <div className={style.three}></div>
                    <div className={style.two}></div>
                    <div className={style.one}></div>
                </div>
            </div>
        </div>         
    )                  
}

export default CallMe