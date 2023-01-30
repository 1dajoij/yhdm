import { useRouteError } from "react-router-dom"

export default function errorPage() {
  interface err {
    statusText?: string,
    message?: string
  }
  const error = useRouteError() as err;
  return (
    <div id="error-page" className="flex justify-center items-center h-100%">
      <div className="box">
        <h1 className="m-b-24px">Oops!</h1>
        <p className="p-y-8px">Sorry, an unexpected error has occurred.</p>
        <p className="m-t-6px">
          Errinfo: <i className="text-red-4">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}
