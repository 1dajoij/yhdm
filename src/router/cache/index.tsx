import React, { useState, useEffect } from "react";

import { Offscreen } from "react-stillness-component";
import { useOutlet, useLocation } from "react-router-dom";

interface Ioutlet {
  key: string,
  pathname: string,
  outlet: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
};

const StillnessOutLets = (props: {
  keeplive: any[]
}) => {
  const [outlets, setOutlets] = useState<Ioutlet[]>([]);
  let location = useLocation();
  const outlet = useOutlet();
  let locationPathname = location.pathname;
  let locationKey = location.key;

  const isKeepPath = (aliveList: string[], path: string): boolean => {
    let isKeep = false;
    aliveList.map(item => {
      if(item === path) {
        isKeep = true;
      };
    });
    return isKeep;
  };

  // 清除缓存
  const deleteCache = (position: "start" | "end"): Ioutlet[] => {
    let newOutlets: Ioutlet[] = outlets.slice();
    switch(position) {
      case "start":
        newOutlets = outlets.slice(1);
        break;
      case "end":
        newOutlets = outlets.slice(0, -1);
        break;
    };
    return newOutlets
  };

  // 缓存组件超过 4个 后 清除第一个 缓存
  useEffect(() => {
    if(outlets.length > 6) {
      deleteCache("start");
    }
  }, [outlets])

  useEffect(() => {
    let Newoutlets = outlets.slice();
    // 先看一下 缓存列表中的最后一个页面的 pathname 是否在 props.keeplive 中
    if(
      (outlets.length >= 1) && !isKeepPath(props.keeplive, outlets[outlets.length-1].pathname)
    ) {
      Newoutlets = deleteCache("end");
    }

    const result: boolean = outlets.some((o) => {
      if (o.pathname === locationPathname) {
        return true;
      }
    });

    // 没有缓存页面时 先进行缓存
    if (!result) {
      setOutlets([
        ...Newoutlets,
        {
          key: locationKey,
          pathname: locationPathname,
          outlet
        }
      ]);
    };
  }, [locationPathname]);

  return (
    <>
      {
        outlets.map((o, i) => {
          return (
            <Offscreen key={o.key} visible={locationPathname === o.pathname}>
              {o.outlet}
            </Offscreen>
          );
        })
      }
    </>
  );
};

export default StillnessOutLets;