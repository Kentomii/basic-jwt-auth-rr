import { useUser } from "../../context/UserContext";

function ProfilePage() {

    const auth = useUser()

  return (
    <div>ProfilePage {auth.user}</div>
  )
}

export default ProfilePage