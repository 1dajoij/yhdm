import Swiper from "@/components/Swiper";
import RowCard from "@/components/RowCard";

const list = [
  {
    "id":8156,
    "name":"万界神主",
    "largest_amount":null,
    "release_data":"2021",
    "score":7.2,
    "picUrl":"http://sakura.xonlines.com/FileUpload/202110021400168994.jpg",
    "finish_state":"更新至284集",
    "starring":"内详",
    "hot":44,
    "type":"National_comics-html"
    }, {
    "id":8156,
    "name":"万界神主",
    "largest_amount":null,
    "release_data":"2021",
    "score":7.2,
    "picUrl":"http://sakura.xonlines.com/FileUpload/202110021400168994.jpg",
    "finish_state":"更新至284集",
    "starring":"内详",
    "hot":44,
    "type":"National_comics-html"
    },{
      "id":8156,
      "name":"万界神主",
      "largest_amount":null,
      "release_data":"2021",
      "score":7.2,
      "picUrl":"http://sakura.xonlines.com/FileUpload/202110021400168994.jpg",
      "finish_state":"更新至284集",
      "starring":"内详",
      "hot":44,
      "type":"National_comics-html"
      }, {
      "id":8156,
      "name":"万界神主",
      "largest_amount":null,
      "release_data":"2021",
      "score":7.2,
      "picUrl":"http://sakura.xonlines.com/FileUpload/202110021400168994.jpg",
      "finish_state":"更新至284集",
      "starring":"内详",
      "hot":44,
      "type":"National_comics-html"
      },{
        "id":8156,
        "name":"万界神主",
        "largest_amount":null,
        "release_data":"2021",
        "score":7.2,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202110021400168994.jpg",
        "finish_state":"更新至284集",
        "starring":"内详",
        "hot":44,
        "type":"National_comics-html"
        }, {
        "id":8156,
        "name":"万界神主",
        "largest_amount":null,
        "release_data":"2021",
        "score":7.2,
        "picUrl":"http://sakura.xonlines.com/FileUpload/202110021400168994.jpg",
        "finish_state":"更新至284集",
        "starring":"内详",
        "hot":44,
        "type":"National_comics-html"
        },{
          "id":8156,
          "name":"万界神主",
          "largest_amount":null,
          "release_data":"2021",
          "score":7.2,
          "picUrl":"http://sakura.xonlines.com/FileUpload/202110021400168994.jpg",
          "finish_state":"更新至284集",
          "starring":"内详",
          "hot":44,
          "type":"National_comics-html"
          }, {
          "id":8156,
          "name":"万界神主",
          "largest_amount":null,
          "release_data":"2021",
          "score":7.2,
          "picUrl":"http://sakura.xonlines.com/FileUpload/202110021400168994.jpg",
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
      <RowCard title="国产动漫" renderList={list}/>
    </div>
  )
}