import { useParams } from "react-router-dom";

export function UserParams() {
  const { userinput } = useParams();
  return (
    <div className="bg-orange-700 text-center text-white p-4 m-4">
      UserInput is : {userinput}
    </div>
  )
}
