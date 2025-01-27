import style from './styles/AllNewsStyle.module.scss'
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import NewsPost from "../components/news/NewsPost";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useState} from "react";
import OpenNews from "../components/news/OpenNews";
import BigModal from "../components/modalwin/BigModal";
import NewsPost2 from "../components/news/NewsPost2";
import NewsService from "../services/NewsService";

function AllNews (){
    const [total, setTotal] = useState(9)
    const [more, setMore] = useState(true)
    const [news, setNews]=useState([])


    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')
    const openNews = () => {

        if(news && total<news.length){
            setTotal(total + 9)
        }
    }
    const viewPost = async () => {
        try{
            const {data} = await NewsService.viewPost()
            console.log(data)
            setNews(data.reverse())
        }catch(e){

        }
    }
    const openPost = (post) => {
        setActivemodal(true)
        setData(post)
    }
    useEffect(()=>{
        viewPost()
        if(news && total>=news.length){
            setMore(false)
        }
    }, [total])

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);

    return (
        <div className={style.bodymain}>
            <BigModal data={<OpenNews news={data}  width={'900px'}/>} activemodal={activemodal} setActivemodal={setActivemodal} setData={setData}/>
            <SmallHeader />
            <TwoBlocks />
            <div className={style.allnews}>
                <div className={style.container}>
                    <div className={style.title}>Новости</div>
                    <div className={style.news}>
                        {news.map((elem, index)=>{
                            if(index<total){
                                return(
                                    <div key={index} className={style.cont} onClick={()=>openPost(elem)}>
                                        <NewsPost2  post={elem} openPost={openPost}  data={data} setData={setData}  />
                                    </div>


                                )
                            }

                        })}
                    </div>
                    <div className={style.morebtn} style={(news && total<news.length)?{}:{display:'none'}} onClick={openNews}>ЕЩЁ</div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default AllNews