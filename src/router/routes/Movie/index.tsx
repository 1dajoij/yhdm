import { useEffect, useState } from "react";
import { redirect, useLoaderData, useParams, useNavigate } from "react-router-dom";
import { getPlayMovie, TplayMovie } from "@/request/api";
import { resetScore, resetClass } from "@/untils";
import Video from "@/router/routes/Movie/Video";
import { Image } from "antd";
import CardList from "@/components/CardList";
import guess from "@/assets/svg/guess.svg";

export async function loader({params}: any) {
  const { viewid, index } = params;
  if(viewid !== null && index !== null) {
    const res = await getPlayMovie(viewid, index);
    if(res.code === 200) {
      return res
    };
  }
  return redirect("/error");
};

export default function index() {
  const loader = useLoaderData() as TplayMovie;
  const [moveUrl, setUrl] = useState(loader.movie);
  useEffect(() => {
    setUrl(loader.movie);
  }, [loader]);
  const { index } = useParams();
  const arr = new Array(loader.movieLens).fill(null);
  const navigate = useNavigate();
  const navTo = (index: number): void => {
    navigate(`/${loader.info.id}/${index}`);
  };
  return (
    <>
      <div className="h-100% w-100% overflow-y-scroll flex justify-center items-center flex-wrap">
        <div className="movie bg-#282832 w-100% p-y-36px flex items-center justify-center">
          <div className="w-1206px flex">
            <div className="w-1206px flex flex-wrap">
              <div className="h-510px w-100% p-x-6px flex">
                <div className="h-510px">
                  <Video movieUrl={moveUrl}/>
                </div>
                <div className="bg-#202026 h-100% w-282px box-border p-y-12px">
                  <h4 className="text-#ccc text-18px font-400 p-y-6px p-x-12px">播放列表</h4>
                  <div className="h-474px  box-border p-y-8px">
                    <div className="h-100% scrollBar overflow-y-auto">
                      <ul className="w-100% h-auto flex flex-wrap playBtnlist">
                        {
                          arr.map((_, i) => (
                            <li key={i} className="w-33.33333% box-border p-x-6px p-y-8px">
                              <span className={
                                resetClass(["h-26px","btn","cursor-pointer","rounded","p-y-4px","shadow","bg-white","flex", "justify-center", "items-center", "text-13px", "font-400", "text-#333", Number(index)===i?"active":""])
                              }
                              onClick={() => navTo(i)}
                              >第{i+1}集</span>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-t-20px p-x-8px">
                <h3 className="text-#ccc text-20px font-400">{loader.info.name}</h3>
                <div className="p-y-2px h-24px flex items-center">
                  <span className="text-red text-18px">{resetScore(loader.info.score)}</span>
                  <div className="w-1px box-border h-16px bg-gray m-x-8px"></div>
                  <span className="text-16px text-coolgray font-300">{loader.info.release_data}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="guess_like m-t-24px">
          <div className="text-18px font-300 text-red flex items-center">
            <Image preview={false} src={guess} width={"24px"}/>
            <span className="m-l-6px">猜你喜欢</span>
          </div>
          <CardList renderList={loader.guess}/>
        </div>
      </div>
    </>
  )
}
