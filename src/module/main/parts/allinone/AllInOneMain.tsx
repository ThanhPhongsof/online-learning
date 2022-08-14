import { IconCalendar, IconInvoice, IconTeam } from "components/icon";
import { AllInOneWrapperModel } from "services/model";
import AllInOneWrapper from "./AllInOneWrapper";

const wrappers = [
  {
    iconColor: "bg-purple",
    icon: <IconInvoice />,
    heading: "Online Billing, Invoicing & Contracts",
    desc: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    iconColor: "bg-secondary",
    icon: <IconCalendar />,
    heading: "Easy Scheduling & Attendance Tracking",
    desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    iconColor: "bg-thỉrd",
    icon: <IconTeam />,
    heading: "Customer Tracking",
    desc: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization ",
  },
];

const AllInOneMain = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-y-20 gap-x-5 px-2 
     "
    >
      {wrappers?.map((item: AllInOneWrapperModel) => (
        <AllInOneWrapper key={item.heading} item={item}></AllInOneWrapper>
      ))}
    </div>
  );
};

export default AllInOneMain;
