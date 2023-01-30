import { redirect, useLoaderData } from "react-router-dom";
import { getSpecific, Tspecific } from "@/request/api";
import { useEffect } from "react"


export async function loader(props: any) {
  const id = Number(props.params.viewid);
  const res = await getSpecific(id);
  // 需要name和starring字段
  console.log(res);
  if(res.code === 200) {
    return res
  };
  return redirect("/error");
};

export default function View() {
  const res = useLoaderData() as Tspecific;
  return (
    <div>view</div>
  );
}
