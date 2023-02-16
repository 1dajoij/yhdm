import { Icard } from "@/type";

export default function index(props: {
  list: Icard[],
  visiable: boolean,
  callback: (str: string) => void,
  Ref: React.LegacyRef<HTMLUListElement> | undefined
}) {
  return (
    <>
      {
        (props.list.length && props.visiable) ?
          <ul ref={props.Ref}
            className="search_box sm-i p-x-6px overflow-hidden absolute w-100% h-auto rounded shadow-md top-100% left-0px bg-white">
            {
              props.list.map(item => (
                <li key={item.id} onClick={() => props.callback(item.name)}
                  className="cursor-pointer w-100% p-l-6px p-r-18px m-y-2px p-y-6px text-14px font-light box-border text-overflow text-shadow rounded">
                  {item.name}
                </li>
              ))
            }
          </ul> : null
      }
    </>
  )
}
