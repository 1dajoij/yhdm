import { LazyLoadImage } from "react-lazy-load-image-component";
import { Image } from "antd";
import play from "@/assets/svg/play.svg";
import errorImg from "@/assets/img/load.gif";

export default function index(props: {
  imgUrl: string,
  lazy?: boolean,
}) {
  return (
    <div className="card w-100% h-100%">
      <div className="img w-100% h-100% relative overflow-hidden rounded cursor-pointer">
        <div className="insert inset-0 absolute">
          {
            props.lazy ? <LazyLoadImage src={props.imgUrl} width="100%" height="100%"
              onError={(e) => {
                (e.target as HTMLImageElement).src = errorImg
              }}
            /> : <Image preview={false} src={props.imgUrl} width="100%" height="100%"
              fallback={errorImg}
            />
          }
        </div>
        <span className="play w-100% h-100% absolute inset-0 flex justify-center items-center">
          <Image preview={false} src={play} width="32%"/>
        </span>
      </div>
    </div>
  )
}
