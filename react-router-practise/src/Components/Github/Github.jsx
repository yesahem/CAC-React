import { useEffect, useState } from "react";


function apiRequest() {

}

export function Github() {
  const [userName, setUserName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [followers, setFollowers] = useState('')
  useEffect(() => {
    fetch('https://api.github.com/users/yesahem')
      .then((response) => response.json())
      .then((response) => {
        setUserName(response.name)
        setProfilePic(response.avatar_url)
        setFollowers(response.followers)
      })
  })
  return (
    <div className="bg-gray-700 h-fit p-4 text-white text-center text-2xl " >
      <div>
        {userName}
      </div>
      <div className="flex">
        <div>

          <img src={profilePic} className="w-[400px] rounded-full" />
        </div>
        <div className="text-4xl w-full items-center flex justify-center ">
          Followers: {followers}
        </div>
      </div>
    </div>


  )
}
