import { Image, Tag } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import play from "@/assets/svg/play.svg"
import { Icard } from "@/type";
import { useNavigate } from "react-router-dom";
import errorImg from "@/assets/img/load.gif";

export default function index(props: {item: Icard}) {
  const navigate = useNavigate();
  return (
    <div 
      className="card lg-w-16.6666667% md-w-25% w-33.3333333% p-10px overflow-hidden box-border"
      onClick={() => { navigate({
        pathname: `/views/${props.item.id}`
      }) }}
    >
      <div className="img w-100% p-y-75% relative overflow-hidden rounded cursor-pointer">
        <div className="insert inset-0 absolute">
          <LazyLoadImage src={props.item.picUrl} width="100%" height="100%"
            onError={(e) => {
              (e.target as HTMLImageElement).src = errorImg
            }}
          />
        </div>
        <span className="play w-100% h-100% absolute inset-0 flex justify-center items-center">
          <Image preview={false} src={play} width="32%"/>
        </span>
        <span className="card-shadow text-right absolute box-border w-100% text-size-12px bottom-0 left-0 p-y-5px p-x-10px">
          <span className="w-64% text-overflow color-gray-1">
            {props.item.finish_state}
          </span>
        </span>
        <span className="absolute left-8px top-6px leading-14px">
          <Tag color="#2db7f5">{props.item.release_data}</Tag>
        </span>
      </div>
      <div className="flex flex-wrap m-t-6px">
        <span className="name text-overflow w-100% h-16px leading-16px max-w-100% text-15px font-bold font-500 cursor-pointer">
          {props.item.name}
        </span>
        <span className="m-t-6px w-100% text-overflow leading-14px h-14px text-12px color-#999">
          主演：{props.item.starring.replace(/&/ig, "、")}
        </span>
      </div>
    </div>
  )
};
