import Card from "@/components/CardList/Card/index";
import { Icard } from "@/type";

export default function index(props: {renderList: Icard[], title?: string}) {
  return (
    <div className="w-100% flex justify-center">
      <div className="max-w-1206px w-1206px p-y-12px">
        {
          props.title ? (
            <h3 className="text-size-20px color-gray-7 p-10px">
              {props.title}
            </h3>
          ) : (null)
        }
        <div className="flex flex-wrap">
          {
            props.renderList?.map(item => {
              return <Card item={item}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
