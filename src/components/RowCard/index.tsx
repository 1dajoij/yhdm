import Card from "@/components/Card/index"

export default function index(props: {title: string, renderList: any[]}) {
  return (
    <div className="w-100% p-t-24px">
      <h3 className="text-size-20px color-gray-7">{props.title}</h3>
      <div className="flex flex-wrap gap-x-36px gap-y-8px">
        {
          props.renderList?.map(item => {
            return <Card item={item}/>
          })
        }
      </div>
    </div>
  )
}
