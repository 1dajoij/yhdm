import Swiper from "@/components/Swiper";
import CardList from "@/components/CardList";
import { getHomeInfo, Thome } from "@/request/api";
import { Icard } from "@/type";
import { useEffect, useState } from "react";

function index() {
  const [list, setList] = useState<{
    [key: string]: {
      hots: Icard[];
      news: Icard[];
    }
  } | null>(null);

  const [swiperList, setSwiperList] = useState<Icard[] | null>(null)

  const getHome = async () => {
    const res = await getHomeInfo();
    if(res.code === 200) {
      setList((res as Thome).MovieInfo);
      setSwiperList((res as Thome).recommendList);
    };
  };

  
  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      {
        swiperList ? <Swiper renderList={swiperList}/> : null
      }
      {
        list ? 
          <>
            <CardList title="国产动漫" renderList={list["CH-anime"].news}/>
            <CardList title="日本动漫" renderList={list["JP-anime"].news}/>
            <CardList title="动漫电影" renderList={list["MV-anime"].news}/>
            <CardList title="美国动漫" renderList={list["US-anime"].news}/>
          </>
        : null
      }
    </>
  )
};

export default index