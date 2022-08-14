import { IconFlag, IconTeamSmall, IconWindow } from "components/icon";
import { UserRequestsModel } from "services/model";
import OurFeaturesLayout from "./OurFeaturesLayout";

const userRequests = [
  {
    id: 1,
    icon: <IconWindow />,
    desc: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
  },
  {
    id: 2,
    icon: <IconFlag />,
    desc: "TA's and presenters can be moved to the front of the class.",
  },
  {
    id: 3,
    icon: <IconTeamSmall />,
    desc: "Teachers can easily see all students and class data at one time.",
  },
];

const OurFeaturesUser = () => {
  return (
    <OurFeaturesLayout>
      <div className="max-w-[450px]">
        <h3 className="text-primary font-semibold text-xl lg:text-2xl mb-5">
          A{" "}
          <span className="text-secondary font-bold font-secondary">
            user interface
          </span>{" "}
          designed for the classroom
        </h3>
        <div className="flex flex-col items-center gap-5">
          {userRequests?.map((item: UserRequestsModel) => (
            <div key={item.id} className="flex items-center gap-8">
              <div className="w-[60px] h-[60px] p-4 rounded-full bg-white shadow-lg flex justify-center items-center">
                {item.icon}
              </div>
              <span className="text-left text-sm text-gray">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </OurFeaturesLayout>
  );
};

export default OurFeaturesUser;
