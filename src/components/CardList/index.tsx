import Card from "@/components/CardList/Card/index";
import { Icard } from "@/type";

export default function index(props: {renderList: Icard[], title?: string}) {
  return (
    <div className="w-100% flex justify-center">
      <div className="max-w-1206px w-100% p-y-12px">
        {
          props.title ? (
            <div className="title flex items-center">
              <h3 className="text-size-24px font-500 color-gray-7 p-10px">
                {props.title}
              </h3>
              <div className="more cursor-pointer text-size-14px color-#999">
                <span>更多&gt;</span>
              </div>
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
