import { useState, useEffect, useRef } from "react";
import { redirect, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Icard } from "@/type";
import { typeVerify } from "@/untils";
import { getSwiper, getClassify, Tclass, Tswiper } from "@/request/api"
import Swiper from "@/components/Swiper";
import CardList from "@/components/CardList";
import { Pagination } from 'antd';

export async function loader({params}: any) {
  const { typeid, page } = params;
  const type = typeVerify(typeid);
  if(typeid !== null && page !== null && type !== null) {
    if(Number.isNaN(Number(page)) && Number(page) <= 0) {
      return redirect(`/${type}/1`)
    };
    const swiper = await getSwiper(type);
    const recommendList = await getClassify(type, (page - 1) * 30);
    if(swiper.code === 200 && recommendList.code === 200) {
      
      return {
        swiper,
        recommendList
      }
    }
  }
  return redirect("/error");
}

export default function Classify() {

  const { typeid, page } = useParams() as {
    typeid: "1" | "2" | "3" | "4",
    page: string
  };

  const data = useLoaderData() as {
    swiper: Tswiper,
    recommendList: Tclass
  };

  const [swiper, setSwiper] = useState<Icard[]>([]);

  const [len, setLen] = useState<number>(0);

  const [renderList, setRender] = useState<Icard[]>([]);

  const navigate = useNavigate();

  function toggleType(res: Tclass): void {
    // 国漫
    if(res["National_comics-html"]?.renderList.length) {
      if(res["National_comics-html"]?.allListLen > len) {
        setLen(res["National_comics-html"]?.allListLen);
      };
      setRender(res["National_comics-html"]?.renderList);
      return;
    };
    // 日漫
    if(res["day_comic-html"]?.renderList.length) {
      if(res["day_comic-html"]?.allListLen > len) {
        setLen(res["day_comic-html"]?.allListLen);
      };
      setRender(res["day_comic-html"]?.renderList);
      return;
    };
    // 电影
    if(res["Movie-html"]?.renderList.length) {
      if(res["Movie-html"]?.allListLen > len) {
        setLen(res["Movie-html"]?.allListLen);
      };
      setRender(res["Movie-html"]?.renderList);
      return;
    };
    // 美漫
    if(res["American_comic-html"]?.renderList.length) {
      if(res["American_comic-html"]?.allListLen > len) {
        setLen(res["American_comic-html"]?.allListLen);
      };
      setRender(res["American_comic-html"]?.renderList);
      return;
    };
  };

  const elPage = useRef(null);

  useEffect(() => {
    toggleType(data.recommendList);
    setSwiper(data.swiper.recommendList);
  }, []);

  useEffect(() => {
    (elPage.current as unknown as Element)?.scrollTo(0, 0);
    toggleType(data.recommendList);
  }, [data])

  const Tittle = (type: 1 | 2 | 3 | 4) => {
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
  };

  return (
    <div
      ref={elPage}
      style={{height: "calc(100vh - 76px)", overflowY:"scroll"}}
    >
      <Swiper renderList={swiper}/>
      <CardList title={Tittle(Number(typeid) as 1 | 2 | 3 | 4)} renderList={renderList}/>
      <div className="w-100% flex justify-center p-b-16px">
        <Pagination
          hideOnSinglePage
          current={Number(page)}
          total={len}
          pageSize={30}
          showSizeChanger={false}
          onChange={(pages) => navigate(`/types/${typeid}/${pages}`)}
        />
      </div>
    </div>
  )
}
