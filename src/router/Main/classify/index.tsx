import { useState, useEffect } from "react";
import { Icard } from "@/type";
import { getSwiper, getClassify } from "@/request/api"
import Swiper from "@/components/Swiper";
import CardList from "@/components/CardList";
import { Pagination } from 'antd';

export default function Classify(props: {
  type: 1 | 2 | 3 | 4
}) {

  const [swiper, setSwiper] = useState<Icard[]>([]);

  const [page, setPage] = useState<number>(1);
  const [len, setLen] = useState<number>(0);

  const [renderList, setRender] = useState<Icard[]>([]);

  const updateSwiper = async () => {
    const res = await getSwiper(props.type);
    if(res.code === 200) {
      setSwiper(res.recommendList)
    };
  };

  const updateRenderlist = async () => {
    let offset = (page - 1) * 30;
    const res = await getClassify(props.type, offset);
    console.log(res)
    // 国漫
    if((res.code === 200) && res["National_comics-html"]?.renderList.length) {
      if(res["National_comics-html"]?.allListLen > len) {
        setLen(res["National_comics-html"]?.allListLen);
      };
      setRender(res["National_comics-html"]?.renderList);
    };
    // 日漫
    if((res.code === 200) && res["day_comic-html"]?.renderList.length) {
      if(res["day_comic-html"]?.allListLen > len) {
        setLen(res["day_comic-html"]?.allListLen);
      };
      setRender(res["day_comic-html"]?.renderList);
    };
    // 电影
    if((res.code === 200) && res["Movie-html"]?.renderList.length) {
      if(res["Movie-html"]?.allListLen > len) {
        setLen(res["Movie-html"]?.allListLen);
      };
      setRender(res["Movie-html"]?.renderList);
    };
    // 美漫
    if((res.code === 200) && res["American_comic-html"]?.renderList.length) {
      if(res["American_comic-html"]?.allListLen > len) {
        setLen(res["American_comic-html"]?.allListLen);
      };
      setRender(res["American_comic-html"]?.renderList);
    };
  };

  const togglePage = (pages: number) => {
    setPage(pages);
  };

  useEffect(() => {
    (async () => {
      await updateRenderlist();
      const el = document.querySelector("#CH");
      el?.scrollTo(0,0);
    })()
  }, [page]);

  useEffect(() => {
    (async () => {
      await updateSwiper();
      await updateRenderlist();
    })()
  }, []);

  const Titlle = (type: 1 | 2 | 3 | 4) => {
    switch(type) {
      case 1:
        return "国产动漫";
      case 2:
        return "日本动漫";
      case 3:
        return "动漫电影";
      case 4:
        return "美国动漫";
    }
  }

  return (
    <div
      id="CH"
      style={{height: "calc(100vh - 76px)", overflowY:"scroll"}}
    >
      <Swiper renderList={swiper}/>
      <CardList title={Titlle(props.type)} renderList={renderList}/>
      <div className="w-100% flex justify-center p-b-16px">
        <Pagination
          hideOnSinglePage
          current={page}
          pageSize={30}
          total={len}
          onChange={togglePage}
        />
      </div>
    </div>
  )
}
