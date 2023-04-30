import AvatarImage from "../assets/Oval.png";
import "../style.css";

interface ResultProps {
  blacktheme: Boolean;
}

const Result = ({ blacktheme }: ResultProps): JSX.Element => {
  return (
    <div
      className={`result-container w-full flex-col gap-6 px-[24px] pt-[33px] pb-[49px] rounded-[15px] ${
        blacktheme ? "bg-[#1E2A47]" : "bg-white"
      }`}
    >
      <div className="flex gap-5">
        <img
          src={AvatarImage}
          alt="avatar img"
          className=" w-[70px] h-[70px]  "
        />
        <div className="flex flex-col gap-[6px] ">
          <div className="flex flex-col ">
            <h3
              className={` font-bold text-[16px] leading-[23.7px] ${
                blacktheme ? "text-white" : "text-[#2B3442]"
              }`}
            >
              The Octocat
            </h3>
            <h5 className=" font-norml text-[13px] leading-[19.25px] text-[#0079FF]">
              @octocat
            </h5>
          </div>
          <p
            className={` font-norml text-[13px] leading-[19.25px] ${
              blacktheme ? "text-white" : "text-[#4B6A9B]"
            }`}
          >
            Joined 25 Jan 2011
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
