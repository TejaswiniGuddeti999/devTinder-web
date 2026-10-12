import { useSelector } from "react-redux";

export const Profile = () => {
  const user = useSelector((store) => store.user);

  if (!user) return null;

  return (
    <div>
      <h1>{user.firstName}</h1>
      <p>{user.emailId}</p>
    </div>
  ); 
};