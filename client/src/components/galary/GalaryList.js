import { useEffect, useRef, useState } from 'react';
import style from './GalaList.module.scss';
import PostContact from "../forms/PostContact";
import WriteModal from "../modalwin/WriteModal";
import OpenImg from "./OpenImg";

function GalaryList (){

    const images = [
        {
            src: '1.png',
        },
        {
            src: '2.png',
        },
        {
            src: '3.png',
        },
        {
            src: '4.png',
        },
        {
            src: '5.png',
        },
        {
            src: '6.png',
        },
        {
            src: '7.jpg',
        },
        {
            src: '8.webp',
        },
    ]

    const containerRef = useRef(null);
    const [gridItems, setGridItems] = useState([]);
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const [more, setMore] = useState(8)
    const postResume = (pos) => {
        setData(pos)
        setActivemodal(true)
    }
    useEffect(() => {
        const container = containerRef.current;
        const updateGridItems = () => {
            if (container) {
                const items = Array.from(container.querySelectorAll('.item'));
                setGridItems(items);
            }
        };

        window.addEventListener('resize', updateGridItems);
        updateGridItems();

        return () => window.removeEventListener('resize', updateGridItems);
    }, [images]);

    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<OpenImg img={data} />} setData={setData}/>
            <div className={style.grid} ref={containerRef}>
                {images.map((image, index) =>{ if(index<more){return(
                    <div key={index} className={style.item} onClick={()=>postResume(image.src)}>
                        <img src={`./files/galary/${image.src}`} alt={`Gallery ${index}`} />
                    </div>
                )}})}
            </div>
            <div className={style.more} onClick={()=>setMore(more+8)} style={(images.length <= more)?{display: 'none'}:{}}>ЕЩЁ</div>
        </div>
    );
}

export default GalaryList;