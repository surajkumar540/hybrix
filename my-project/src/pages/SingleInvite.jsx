import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";
import HeaderTab from "../components/FormSections/HeaderTab";
import Form from "../components/FormSections/Form";

export default function SingleInvite() {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    fullName: "",
    emailId: "",
    purpose: "",
    entryPoint: "",
    host: "",
    branch: "",
    vehicle: "",
    vehicleNumber: "",
    date: "",
    visitDay: "",
    time: "",
    meetingRoom: "",
  });
  const [inviteType, setInviteType] = useState("single");
  const [recurrence, setRecurrence] = useState(false);
  const [recurringVisits, setRecurringVisits] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Reset button functionality
  const handleReset = () => {
    // Reset main form
    setFormData({
      mobileNumber: "",
      fullName: "",
      emailId: "",
      purpose: "",
      entryPoint: "",
      host: "",
      branch: "",
      vehicle: "",
      vehicleNumber: "",
      date: "",
      visitDay: "",
      time: "",
      meetingRoom: "",
    });

    // Reset recurring visits
    setRecurringVisits([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);

    // Reset recurrence checkbox
    setRecurrence(false);
  };

  const handleInviteTypeChange = (type) => {
    setInviteType(type);
  };

  const handleRecurrenceChange = () => {
    setRecurrence(!recurrence);
  };

  const handleRemoveVisit = (id) => {
    setRecurringVisits(recurringVisits.filter((visit) => visit.id !== id));
  };

  const handleAddVisit = () => {
    const newId = Math.max(...recurringVisits.map((visit) => visit.id)) + 1;
    setRecurringVisits([...recurringVisits, { id: newId }]);
  };

  return (
    <div className=" bg-red flex flex-col overflow-y-auto h-[100%]">
      {/* Fixed Header */}
      <HeaderTab
        inviteType={inviteType}
        handleInviteTypeChange={handleInviteTypeChange}
      />

      {/* Scrollable Content Area */}
      <Form
        formData={formData}
        recurrence={recurrence}
        handleReset={handleReset}
        handleInputChange={handleInputChange}
        handleRecurrenceChange={handleRecurrenceChange}
        recurringVisits={recurringVisits}
        handleRemoveVisit={handleRemoveVisit}
        handleAddVisit={handleAddVisit}
        inviteType={inviteType}
        handleInviteTypeChange={handleInviteTypeChange}
      />
    </div>
  );
}
