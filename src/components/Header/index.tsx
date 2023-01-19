import { useEffect, useState } from "react";
import { animated, useSpring } from '@react-spring/web';
import home from "@/assets/svg/home.svg";
import search from "@/assets/svg/search.svg";
import history from "@/assets/svg/history.svg";

export default function index() {
  const [open, setopen] = useState<boolean>(false);
  const [springs, api] = useSpring(() => {});
  useEffect((): void => {
    if(open) {
      api.start({
        from: { opacity: 0.6, height: "32px" },
        to: { opacity: 1, height: "76px" }
      })
    } else {
      api.start({
        delay: 200,
        from: { opacity: 1, height: "76px" },
        to: { opacity: 0.6, height: "32px" }
      })
    }
  }, [open])
  return (
    <animated.div style={springs}
    className='header w-100% max-h-76px h-76px border-b b-coolgray-2 fixed md-i'
        onMouseEnter={() => setopen(true)}
        onMouseLeave={() => setopen(false)}
    >
        <div className="flex items-center bg-transparent h-100% justify-between"
        style={{opacity: !open?"0":"1", transition: ".2s"}}
        >
          <div className="flex h-100% justify-between bg-transparent">
            <ul className="nav h-100% flex items-center m-x-42px p-x-16px bg-white">
              <li className="link flex p-x-6px text-15px items-center">
                <img src={home} alt="首页" className="h-14px p-r-3px"/>
                <span>首页</span>
              </li>
              <li className="link flex p-x-6px text-15px items-center">
                <span>国产动漫</span>
              </li>
              <li className="link flex p-x-6px text-15px items-center">
                <span>日本动漫</span>
              </li>
              <li className="link flex p-x-6px text-15px items-center">
                <span>美国动漫</span>
              </li>
            </ul>
            <div className="search_input m-l-64px p-x-16px m-x-26px overflow-hidden flex h-100% items-center bg-white">
              <div className="input rounded-8px flex items-center">
                <input className="w-306px h-42px b-none rounded-l-8px leading-32px
                  outline-none indent-14px" placeholder="请输入关键字"
                  type="text"/>
                <div className="btn h-42px w-42px b-none flex items-center justify-center rounded-r-8px">
                  <img src={search} alt="搜索" className="h-18px p-x-5px p-y-5px rounded cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>
          <ul className="icon_list bg-white p-r-72px h-100% flex items-center">
            <li className="history h-100% p-x-3px flex items-center cursor-pointer">
              <img src={history} alt="历史记录" className="h-20px"/>
            </li>
          </ul>
          {
            // 暂时不确定有没有用户的功能
          }
          {/* <div className="user m-x-58px flex h-100% p-x-32px items-center justify-between bg-white">
              <div className="w-54px h-54px rounded-50% overflow-hidden bg-#cdcdcd">
                
              </div>
              <span className="text-16px m-x-12px">admin</span>
          </div> */}
        </div>
    </animated.div>
  )
}
