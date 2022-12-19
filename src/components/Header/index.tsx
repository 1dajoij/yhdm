import { useEffect, useState } from "react";
import { animated, useSpring } from '@react-spring/web';

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
    <animated.div  style={springs}
    className='header w-100% max-h-76px h-32px border-b b-coolgray-2 fixed md-i'
        onMouseEnter={() => setopen(true)}
        onMouseLeave={() => setopen(false)}
    >
        <div className="flex justify-between items-center bg-transparent h-100%"
        style={{opacity: !open?"0":"1", transition: ".2s"}}
        >
          <div className="icon h-100% flex items-center p-x-58px bg-white">header</div>
          <div className="search_input overflow-hidden">
              <input className="w-184px h-32px b-none bg-coolgray-2 b-rounded-14px 
              outline-none indent-22px" 
              type="text"/>
          </div>
          <div className="user m-x-58px flex h-100% p-x-32px items-center justify-between bg-white">
              <div className="w-54px h-54px rounded-50% overflow-hidden bg-red-1">
                
              </div>
              <span className="text-16px m-x-12px">user</span>
          </div>
        </div>
    </animated.div>
  )
}
