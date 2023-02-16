import { useNavigate } from "react-router-dom";
import { Icard } from "@/type";
import { getSearchInfo, Tsec } from "@/request/api";
import { debounce } from "@/untils";
import { useState, useRef, useEffect } from "react";
import SearchBox from "@/components/Header/SearchBox";
import home from "@/assets/svg/home.svg";
import search from "@/assets/svg/search.svg";
// import history from "@/assets/svg/history.svg";

export default function Header() {

  const navigate = useNavigate();

  const [list, setList] = useState<Icard[]>([]);
  const [visiable, setVisiable] = useState<boolean>(false);

  const handleIpt = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    const res = await getSearchInfo(ev.target.value);
    if(res.code === 200) {
      setList((res as Tsec).renderList);
      setVisiable(true);
    }
  }

  const debounceIpt: Function = debounce(handleIpt, 400);

  const searchIpt = useRef(null);
  const searchBox = useRef(null);

  const hideIpt = (ev: MouseEvent): void => {
    if(ev.target === searchIpt.current) return;
    setVisiable(false);
  };

  const updateSearch = (str: string): void => {
    if(!searchIpt.current) return;
    (searchIpt.current as HTMLInputElement).value = str;
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body?.addEventListener("click", hideIpt);
    return () => {
      body?.removeEventListener("click", hideIpt)
    };
  }, [])
  return (
    <div
    className='header w-100% box-border h-76px border-b flex justify-center b-coolgray-2 fixed md-i'
    >
        <div className="w-1210px flex items-center bg-transparent h-100% justify-between"
        >
          <div className="flex h-100% justify-between bg-transparent">
            <ul className="nav h-100% flex items-center p-x-16px bg-white">
              <li className="link flex p-x-6px text-15px items-center"
                onClick={() => navigate("/")}
              >
                <img src={home} alt="首页" className="h-14px p-r-3px"/>
                <span>首页</span>
              </li>
              <li className="link flex p-x-6px text-15px items-center"
                onClick={() => navigate("/types/1/1")}
              >
                <span>国产动漫</span>
              </li>
              <li className="link flex p-x-6px text-15px items-center"
                onClick={() => navigate("/types/2/1")}
              >
                <span>日本动漫</span>
              </li>
              <li className="link flex p-x-6px text-15px items-center"
                onClick={() => navigate("/types/3/1")}
              >
                <span>动漫电影</span>
              </li>
              <li className="link flex p-x-6px text-15px items-center"
                onClick={() => navigate("/types/4/1")}
              >
                <span>美国动漫</span>
              </li>
            </ul>
            <div className="search_input lg-m-l-64px md-m-l-36px p-x-26px flex h-100% items-center bg-white">
              <div className="input rounded-8px flex items-center relative">
                <input className="lg-w-306px md-w-228px sm-w-184px w-104px h-42px b-none rounded-l-8px leading-32px
                  outline-none indent-14px" placeholder="请输入关键字"
                  ref={searchIpt}
                  onChange={(e) => {debounceIpt(e)}}
                  onFocus={(e) => handleIpt(e)}
                  type="text"/>
                <div className="btn h-42px w-42px b-none flex items-center justify-center rounded-r-8px">
                  <img src={search} alt="搜索" className="h-18px p-x-5px p-y-5px rounded cursor-pointer"/>
                </div>
                <SearchBox Ref={searchBox} list={list} visiable={visiable} callback={updateSearch}/>
              </div>
            </div>
          </div>
          {
            // 想了一下，不太会做历史记录，需要时间学习一下
          }
          {/* <ul className="icon_list bg-white p-x-16px h-100% flex items-center">
            <li className="history h-100% p-x-12px flex items-center cursor-pointer">
              <img src={history} alt="历史记录" className="h-20px"/>
            </li>
          </ul> */}
          {
            // 暂时不确定有没有用户的功能
          }
          {/* <div className="user m-x-58px flex h-100% p-x-32px items-center justify-between bg-white">
              <div className="w-54px h-54px rounded-50% overflow-hidden bg-#cdcdcd">
                
              </div>
              <span className="text-16px m-x-12px">admin</span>
          </div> */}
        </div>
    </div>
  )
}
