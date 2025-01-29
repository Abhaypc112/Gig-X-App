import { ThreeDot } from "react-loading-indicators"

const ButtonLoading = ({bg}: any) => {
  return (
    <ThreeDot color={bg.color} size="small" text="" textColor={bg.color} />
  )
}

export default ButtonLoading
