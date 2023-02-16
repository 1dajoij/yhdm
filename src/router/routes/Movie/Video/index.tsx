import VideoJS from "./video";

export default function index(props: {
  movieUrl: string
}) {
  const options = {
    autoplay: true,
    controls: true,
    width: "906px",
    height: "510px",
    sources: [{
      src: props.movieUrl
    }]
  }
  return (
    <>
      <VideoJS options={options}/>
    </>
  )
}
