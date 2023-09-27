import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }
  return <div>Profile</div>;
};

export default Profile;
