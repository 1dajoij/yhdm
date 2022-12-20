import Card from "@/components/Card/index"

export default function index(props: {title: string, renderList: any[]}) {
  return (
    <div className="w-100% p-t-24px">
      <h3 className="text-size-20px color-gray-7">{props.title}</h3>
      <div className="grid grid-rows-2 grid-cols-5 gap-20px">
        {
          props.renderList?.map(item => {
            return <Card item={item}/>
          })
        }
      </div>
    </div>
  )
}
