import { Image, Tag } from "antd";
import play from "@/assets/svg/play.svg"

export default function index(props: {item: any}) {
  return (
    <div className="card w-152px h-286px p-y-6px">
      <div className="w-100% relative card-img cursor-pointer">
        <Image preview={false} src={props.item.picUrl} width={152} height={228} className="rounded" />
        <span className="w-64% text-right absolute text-overflow text-size-12px bottom-6px right-8px color-gray-1">
          {props.item.finish_state}
        </span>
        <span className="absolute left-8px top-6px leading-14px">
          <Tag color="#2db7f5">{props.item.release_data}</Tag>
        </span>
        <div className="mask sm-i absolute w-100% h-100% left-0 top-0 flex justify-center items-center">
          <Image preview={false} width={86} height={86} src={play}></Image>
        </div>
      </div>
      <div className="flex flex-wrap p-t-6px">
        <span className="w-100% text-16px font-600 hover:color-blue-5 cursor-pointer">{props.item.name}</span>
        <span className="p-t-4px w-100% text-overflow text-13px color-#999">
          主演：{props.item.starring}
        </span>
      </div>
    </div>
  )
}
