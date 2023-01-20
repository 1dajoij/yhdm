import { Image, Tag } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import play from "@/assets/svg/play.svg"
import { Icard } from "@/type";

export default function index(props: {item: Icard}) {
  return (
    <div className="card w-100% box-border p-x-10px overflow-hidden">
      <div className="img w-100% p-y-75% relative overflow-hidden rounded cursor-pointer">
        <div className="insert inset-0 absolute">
          <LazyLoadImage src={props.item.picUrl} width="100%" height="100%" alt={props.item.name} />
        </div>
        <span className="play w-100% h-100% absolute inset-0 flex justify-center items-center">
          <Image preview={false} src={play} width="32%"/>
        </span>
        <span className="card-shadow text-left absolute box-border w-100% text-size-14px font-400 bottom-0 left-0 p-y-5px p-x-10px">
          <span className="w-100% block text-overflow color-white">
            {props.item.name}
          </span>
        </span>
        <span className="absolute left-8px top-6px leading-14px">
          <Tag color="#2db7f5">{props.item.release_data}</Tag>
        </span>
      </div>
    </div>
  )
}