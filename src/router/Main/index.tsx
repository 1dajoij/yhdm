import Swiper from "@/components/Swiper";
import CardList from "@/components/CardList";
import { useEffect, useState } from "react";
import { Icard } from "@/type";
import { getHomeInfo, Thome } from "@/request/api";

export default function home() {

  const [
    recommendList, setRecommendList
  ] = useState<Icard[]>();

  const [
    list, setList
  ] = useState<{
    [key: string]: {
      news: Icard[],
      hots: Icard[]
    }
  }>();

  const update = async () => {
    const contacts = await getHomeInfo() as Thome;
    if(contacts.code === 200) {
      setRecommendList(contacts.recommendList);
      setList(contacts.MovieInfo);
    };
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <div style={{height: "calc(100vh - 76px)", overflowY:"scroll"}}>
      {
        recommendList ? <Swiper renderList={ recommendList } /> : null
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
    </div>
  )
};