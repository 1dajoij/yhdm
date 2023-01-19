import Swiper from "@/components/Swiper";
import CardList from "@/components/CardList";
import { Icard } from "@/type";

const list: Icard[] = [
  {
    "id":8156,
    "name":"万界神主",
    "largest_amount":null,
    "release_data":"2021",
    "score":7.2,
    "picUrl":"https://cdn1.hjzcjx.com/jpg/ly1gwdh1mq74qj307i0aiwet.jpg",
    "finish_state":"更新至284集",
    "starring":"内详",
    "hot":44,
    "type":"National_comics-html"
    }
];

export default function index() {
  return (
    <div>
      {/* 之后改成swiper类型 */}
      {/* <Swiper /> */}
      <CardList title="国产动漫" renderList={list}/>
    </div>
  )
}