import "swiper/css";
import "swiper/css/navigation";
// 类型
import { Icard } from "@/type";
// 组件
import SwiperCard from "@/components/Swiper/SwiperCard";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// hooks
import { useEffect, useState } from "react";
import useResize from "@/hooks/useResize";


export default function index(props: {
    renderList: Icard[]
}) {
    const [showCount, setShowCount] = useState(6);

    const { innerWidth: width } = useResize();

    useEffect(() => {
        if(width > 1024) {
            setShowCount(6);
        } else if(width > 768) {
            setShowCount(4);
        } else {
            setShowCount(3);
        }
    }, [width]);

    // 获取被选中的slide的index
    const [active, setActive] = useState(0);
    const activeIndex = (swiper:any) => {
        setActive(swiper.realIndex);
    };
    
    return (
        <>
            {
                props.renderList ? <div  className='swiper relative p-10px p-y-42px bg-#282832'>
                    <div className="swiper-filter absolute w-100% h-100%"
                        style={{backgroundImage: `url(${props.renderList[active].picUrl})`}}
                    ></div>
                    <Swiper
                        onRealIndexChange={(swiper) => {activeIndex(swiper)}}
                        slidesPerView={showCount}
                        loop={true}
                        navigation={true}
                        centeredSlides={true}
                        modules={[Navigation]}
                        className="mySwiper max-w-1206px w-100%"
                    >
                        {
                            props.renderList.map((item) => (
                                <SwiperSlide className="h-auto" key={item.id}>
                                    <SwiperCard item={item}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div> : null
            }
        </>
    )
}
