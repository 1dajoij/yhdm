import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { getSpecific, Tspecific } from "@/request/api";
import { resetScore } from "@/untils";
import CardList from "@/components/CardList";
import ImageCom from "@/components/Image";
import { Rate, Image } from "antd";
import guess from "@/assets/svg/guess.svg";
import brief from "@/assets/svg/brief.svg";
import playList from "@/assets/svg/playList.svg";


export async function loader(props: any) {
  const id = Number(props.params.viewid);
  const res = await getSpecific(id);
  if(res.code === 200) {
    const el = document.querySelector("#specific");
    if(el && el.scrollTop) {
      el.scrollTop = 0;
    };
    return res
  };
  return redirect("/error");
};

export default function View() {
  const res = useLoaderData() as Tspecific;
  const data = res.specific[0];
  const navigate = useNavigate();

  const navTo = (index: number): void => {
    navigate(`/${data.id}/${index}`);
  };
  return (
    <div id="specific" style={{height: "calc(100vh - 76px)"}} className="w-100% flex justify-center flex-wrap desc overflow-y-scroll">
      <div className="w-100% bg-coolgray-2 bg-opacity-20 h-362px flex justify-center">
        <div className="w-1206px p-y-16px flex box-border">
          <div className="w-220px h-330px shadow" onClick={() => navTo(0)}>
            <ImageCom imgUrl={data.picUrl}/>
          </div>
          <div className="m-l-36px h-330px p-y-36px box-border flex-1">
            <div className="w-568px">
              <h3 className="font-300 text-20px">{data.name}</h3>
              <div className="score text-red p-y-4px flex items-center">
                {
                  data.score > 0 ? (
                    <>
                      <p className="text-16px p-r-10px translate-y-2px">
                        {resetScore(data.score)}
                      </p>
                      <Rate disabled allowHalf value={data.score / 2} count={5}/>
                    </>
                  ) : <p className="text-16px p-r-10px translate-y-2px">
                    暂无评分
                  </p>
                }
              </div>
              <div className="desc_t m-t-22px text-16px">
                <div className="text-16px">
                  <span className="font-200">年份：<b className="font-400">{data.release_data}</b></span>
                  <span className="w-1px h-18px bg-coolgray-2 inline-block translate-y-2px m-x-12px"></span>
                  <span className="font-200">地区：<b className="font-400">待修改</b></span>
                </div>
                <p className="p-y-6px">
                  <span className="font-200">最近更新：<b className="font-400 text-orange">{data.last_updata_time}</b></span>
                </p>
                <p>
                  <span className="font-200">主演：<b className="font-400">{data.starring.replace(/&/g, " ")}</b></span>
                </p>
                <p className="p-y-6px">
                  <span className="font-200">导演：<b className="font-400">{data.director.replace(/&/g, " ")}</b></span>
                </p>
              </div>
            </div>
            <div className="flex justify-between h-42px m-t-12px p-r-42px">
              <button onClick={() => navTo(0)} className="btn text-white bg-red rounded border-none p-x-24px cursor-pointer">
                立即播放
              </button>
              <button className="btn text-white bg-amber rounded border-none p-x-24px cursor-pointer">
                信息反馈
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1206px p-x-6px">
        <div className="brief m-t-16px w-100%">
          <div className="text-red text-18px font-300 flex items-center">
            <Image preview={false} src={brief} width={"24px"}/>
            <span className="m-l-6px">剧情简介</span>
          </div>
          <p className="m-t-12px text-14px text-#646469 leading-20px">
            {data.brief_introduction}
          </p>
        </div>
        <div className="movie_play m-y-36px w-100%">
          <div className="text-red text-18px font-300 flex items-center">
            <Image preview={false} src={playList} width={"24px"}/>
            <span className="m-l-6px">播放列表</span>
          </div>
          <ul className="m-t-12px w-100% flex flex-wrap">
            {
              data.episodes.split("&").map((item, index) => (
                <li key={index} className="p-x-6px p-y-8px w-12.5% box-border">
                  <button onClick={() => navTo(index)} className="cursor-pointer border-#f1f1f1 border-1px border-solid text-overflow bg-#f8f8f8 w-100% p-y-12px rounded">
                    第{index+1}集
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="guess_like">
          <div className="text-18px font-300 text-red flex items-center">
            <Image preview={false} src={guess} width={"24px"}/>
            <span className="m-l-6px">猜你喜欢</span>
          </div>
          <CardList renderList={res.guess}/>
        </div>
      </div>
    </div>
  );
}
