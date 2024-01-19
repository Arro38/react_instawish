import { IoMdAddCircleOutline } from "react-icons/io";
import { HOME_URL } from "../lib/ApiService";

export default function Navbar({ user }: { user: User | null }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <IoMdAddCircleOutline size={30} />
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">
          <h1 className="font-insta text-3xl">Instawish</h1>
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={HOME_URL + user?.imageUrl} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
