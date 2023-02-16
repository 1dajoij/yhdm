import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { useRef } from "react";
import { getSwiper, Tswiper, } from "@/request/api"
import Swiper from "@/components/Swiper";
import { typeVerify } from "@/untils";

export async function loader({params}: any) {
  const { typeid } = params;
  const type = typeVerify(typeid);
  if(typeid !== null && type !== null) {
    const swiper = await getSwiper(type);
    if(swiper.code === 200) {
      return {
        swiper
      }
    }
  }
  return redirect("/error");
}

export default function index() {
  const { swiper } = useLoaderData() as {
    swiper: Tswiper
  }
  const elPage = useRef(null);

  return (
    <div
      ref={elPage}
      style={{height: "calc(100vh - 76px)", overflowY:"scroll"}}
    >
      <Swiper renderList={swiper.recommendList}/>
      <Outlet />
    </div>
  )
}
