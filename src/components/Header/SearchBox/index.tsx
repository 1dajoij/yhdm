import { useEffect } from "react";
import { Icard } from "@/type";

export default function index(props: {
  list: Icard[],
  visiable: boolean
}) {
  return (
    <>
      {
        (props.list.length && props.visiable) ?
          <ul className="search_box sm-i overflow-hidden absolute w-100% h-auto rounded shadow-md top-100% left-0px bg-white">
            {
              props.list.map(item => (
                <li key={item.id} className="w-100% p-x-6px m-y-2px p-y-6px text-14px font-light box-border text-shadow rounded">
                  {item.name}
                </li>
              ))
            }
          </ul> : null
      }
    </>
  )
}
