import { useContext } from "react";
import { AuthContex } from "../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContex);

  const image = (
    <img
      src="https://i.ibb.co/mCZdpyy/no-image.jpg"
      className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
      alt=""
    />
  );
  const userImage = (
    <img
      src={user?.photoURL}
      className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
      alt=""
    />
  );
  return (
    <div className="profile">
      <div className="font-sans leading-tight  bg-grey-lighter p-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg">
          <div
            className="bg-cover h-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80')",
            }}
          ></div>
          <div className="border-b px-4 pb-6">
            <div className="text-center sm:text-left sm:flex mb-4">
              {user?.photoURL ? userImage : image}
              <div className="py-2">
                <h3 className="font-bold text-2xl mb-1">{user?.displayName}</h3>
                <div className="inline-flex text-grey-dark sm:flex items-center">
                  <svg
                    className="mr-2"
                    viewBox="0 0 8 6"
                    width="18px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
                  </svg>

                  {user?.email}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center text-grey-darker mb-4">
              <span>
                <strong className="text-black">Account Create: </strong>{" "}
                {user?.metadata?.creationTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
