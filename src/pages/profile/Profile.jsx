import { useContext } from "react";
import { AuthContex } from "../../provider/AuthProvider";

// import proImage from "h";

const Profile = () => {
  const { user } = useContext(AuthContex);

  const image = (
    <img
      src="https://randomuser.me/api/portraits/women/21.jpg"
      className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
      alt=""
    />
  );
  return (
    <div className="profile">
      <div className="font-sans leading-tight min-h-screen bg-grey-lighter p-8">
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div
            className="bg-cover h-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80')",
            }}
          ></div>
          <div className="border-b px-4 pb-6">
            <div className="text-center sm:text-left sm:flex mb-4">
              {user?.photoURL ? user?.photoURL : image}
              <div className="py-2">
                <h3 className="font-bold text-2xl mb-1">{user?.name}Name</h3>
                <div className="inline-flex text-grey-dark sm:flex items-center">
                  <svg
                    className="h-5 w-5 text-grey mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg>
                  New York, NY
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center text-grey-darker mb-4">
              <span>
                <strong className="text-black">12</strong> Followers you know
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <form>
          <label className="custom-file-upload fas">
            <div className="img-wrap"></div>
          </label>
          <div className="name">{user?.displayName}</div>
          <div className="status">{user?.email}</div>
          <div className="status2">{user?.metadata?.creationTime}</div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
