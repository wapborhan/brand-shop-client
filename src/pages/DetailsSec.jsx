import {
  FaTruck,
  FaRegMoneyBillAlt,
  FaShieldVirus,
  FaHeadset,
} from "react-icons/fa";

const DetailsSec = () => {
  return (
    <div className="information-section container lg:max-w-screen-xl  my-10 mx-auto ">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
          <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 border-2 xs:pl-[20%] sm:pl-5">
            <div className="rounded-full border-2">
              <i className="bi bi-truck flex p-3 text-[40px] text-primary-color">
                <FaTruck />
              </i>
            </div>
            <div>
              <h6 className="font-bold capitalize">Free shipping</h6>
              <p className="break-all text-sm text-gray-400">
                Orders over $100
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
          <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 border-2 xs:pl-[20%] sm:pl-5">
            <div className="rounded-full border-2">
              <i className="bi bi-cash-coin flex p-3 text-[40px] text-primary-color">
                <FaRegMoneyBillAlt />
              </i>
            </div>
            <div>
              <h6 className="font-bold capitalize">Money back</h6>
              <p className="break-all text-sm text-gray-400">With a 30 day</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
          <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 border-2 xs:pl-[20%] sm:pl-5">
            <div className="rounded-full border-2">
              <i className="bi bi-shield-check flex p-3 text-[40px] text-primary-color">
                <FaShieldVirus />
              </i>
            </div>
            <div>
              <h6 className="font-bold capitalize">Secure payment</h6>
              <p className="break-all text-sm text-gray-400">Secured payment</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
          <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 border-2 xs:pl-[20%] sm:pl-5">
            <div className="rounded-full border-2">
              <i className="bi bi-headset flex p-3 text-[40px] text-primary-color">
                <FaHeadset />
              </i>
            </div>
            <div>
              <h6 className="font-bold capitalize">Online support</h6>
              <p className="break-all text-sm text-gray-400">Support 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSec;
