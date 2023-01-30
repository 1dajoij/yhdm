import CHIcon from "@/assets/svg/chinese.svg";
import JPIcon from "@/assets/svg/japan.svg";
import MVIcon from "@/assets/svg/movie.svg";
import USIcon from "@/assets/svg/us.svg";
import { useNavigate } from "react-router-dom";
import Card from "@/components/CardList/Card/index";
import { Icard } from "@/type";

type Ttitle = "国产动漫" | "日本动漫" | "动漫电影" | "美国动漫";

export default function index(props: {renderList: Icard[], title?: Ttitle}) {

  const navigate = useNavigate();

  const skip = () => {
    switch(props.title) {
      case "国产动漫":
        navigate("/types_1");
        break;
      case "日本动漫":
        navigate("/types_2");
        break;
      case "动漫电影":
          navigate("/types_3");
          break;
      case "美国动漫":
          navigate("/types_4");
          break;
    }
  }

  return (
    <div className="cardlist w-100% flex justify-center">
      <div className="max-w-1206px w-100% p-y-12px">
        {
          props.title ? (
            <div className="title flex items-center p-10px" 
              onClick={() => skip()}
            >
              {
                props.title === "国产动漫" ? <div className="icon">
                  <img src={CHIcon} alt="国产动漫" />
                </div> : null
              }
              {
                props.title === "日本动漫" ? <div className="icon">
                  <img src={JPIcon} alt="日本动漫" />
                </div> : null
              }
              {
                props.title === "动漫电影" ? <div className="icon">
                  <img src={MVIcon} alt="动漫电影" />
                </div> : null
              }
              {
                props.title === "美国动漫" ? <div className="icon">
                  <img src={USIcon} alt="美国动漫" />
                </div> : null
              }
              <h3 className="cursor-pointer text-size-24px font-500 color-gray-7 m-r-10px">
                {props.title}
              </h3>
              {/* <div className="more cursor-pointer text-size-14px color-#999">
                <span>更多&gt;</span>
              </div> */}
            </div>
          ) : (null)
        }
        <div className="flex flex-wrap">
          {
            props.renderList?.map(item => {
              return <Card item={item} key={item.id}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
