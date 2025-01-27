import style from './CallMe.module.scss'
import WriteModal from "../modalwin/WriteModal";
import PostQuestion from "../forms/PostQuestion";
import {useState} from "react";

function CallMe (){

    const [activequestion, setActiveQuestion] = useState(false)
    const [data, setData] = useState('')


    return(
        <div className={style.main}>
            <WriteModal activemodal={activequestion} setActivemodal={setActiveQuestion} data={<PostQuestion man={data}  setActivemodal={setActiveQuestion}/>} setData={setData} />

            <div className={style.backslash}></div>
            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.one}></div>
                    <div className={style.two}></div>
                    <div className={style.three}></div>
                    <div className={style.call}>
                        <img src="/files/logos/wingslogo.svg"/>
                        <div className={style.text}>У Вас появились вопросы?</div>
                        <div className={style.btn} onClick={()=>setActiveQuestion(true)}>Задать вопрос</div>
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