
import Profile from "../../assets/images/profile.jpg";

const ProfileHeader = () => {
  return (
    <section className="bg-surface border border-border rounded-3xl p-8 flex flex-col items-center">

      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
      <img className="rounded-full" src={Profile}/>  
      </div>

      <h1 className="text-3xl font-bold text-text-primary mt-6">
        Pradeepsingh Negi
      </h1>

      <p className="text-text-secondary mt-2">
        pradeep123@gmail.com
      </p>

    </section>
  );
};

export default ProfileHeader;