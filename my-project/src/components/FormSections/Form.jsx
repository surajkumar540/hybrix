import { ChevronDown, Plus } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";

const Form = ({
  formData,
  handleReset,
  handleInputChange,
  recurrence,
  handleRecurrenceChange,
  recurringVisits,
  handleRemoveVisit,
  handleAddVisit,
}) => {
  // Options for select fields
  const purposeOptions = [
    "Meeting",
    "Interview",
    "Delivery",
    "Maintenance",
    "Other",
  ];
  const entryPointOptions = [
    "Main Gate",
    "East Gate",
    "West Gate",
    "VIP Entrance",
  ];
  const hostOptions = [
    "John Smith",
    "Sarah Johnson",
    "Michael Brown",
    "Emily Davis",
  ];
  const branchOptions = [
    "Headquarters",
    "North Branch",
    "South Branch",
    "East Branch",
    "West Branch",
  ];
  const vehicleOptions = ["Car", "Motorcycle", "Van", "Truck", "None"];
  return (
    <div className="bg-white rounded-2xl flex-1 overflow-y-auto p-4 py-10">
      {/* Form Container */}
      <div className="rounded-lg p-4 md:p-6   mb-4">
        <h2 className="text-lg font-medium mb-4">
          Please fill in these details.
        </h2>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 rounded p-2"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border border-gray-300 rounded p-2"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Enter Email ID"
              name="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1">Purpose</label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded p-2 appearance-none"
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
              >
                <option value="">Select Purpose</option>
                {purposeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-3 text-gray-500"
                size={16}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Entry Point
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded p-2 appearance-none"
                name="entryPoint"
                value={formData.entryPoint}
                onChange={handleInputChange}
              >
                <option value="">Select Entry Point</option>
                {entryPointOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-3 text-gray-500"
                size={16}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Host</label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded p-2 appearance-none"
                name="host"
                value={formData.host}
                onChange={handleInputChange}
              >
                <option value="">Select Host</option>
                {hostOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-3 text-gray-500"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1">Branch</label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded p-2 appearance-none"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
              >
                <option value="">Select Branch</option>
                {branchOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-3 text-gray-500"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle</label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded p-2 appearance-none"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleInputChange}
              >
                <option value="">Select Vehicle</option>
                {vehicleOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-3 text-gray-500"
                size={16}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Vehicle Number
            </label>
            <input
              type="text"
              placeholder="Enter Vehicle Number"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        {/* Fifth Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Visit Day</label>
            <input
              type="text"
              name="visitDay"
              placeholder="Enter Visit Day"
              value={formData.visitDay}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Meeting Room
            </label>
            <input
              type="text"
              name="meetingRoom"
              placeholder="Enter Meeting Room"
              value={formData.meetingRoom}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        {/* Recurrence Checkbox */}
        <div className="flex items-center mb-4">
          <label className="mr-2 text-sm font-medium">Recurrence</label>
          <div
            className={`w-6 h-6 border ${
              recurrence ? "bg-blue-500 border-blue-500" : "border-gray-300"
            } rounded flex items-center justify-center cursor-pointer`}
            onClick={handleRecurrenceChange}
          >
            {recurrence && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            )}
          </div>
        </div>

        {/* Recurring Visits */}

        {recurrence && (
          <>
            {recurringVisits.map((visit) => (
              <div
                key={visit.id}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 relative"
              >
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Visit Day
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">
                    Meeting Room
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-2"
                    />
                    <button
                      className="ml-2 bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] rounded-full text-white p-3.5 flex-shrink-0"
                      onClick={() => handleRemoveVisit(visit.id)}
                    >
                      <FaRegTrashAlt size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Row Button */}
            <div className="mb-4">
              <button
                className="flex items-center text-sm text-blue-500"
                onClick={handleAddVisit}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] rounded-full flex items-center justify-center mr-2">
                  <Plus size={16} className="text-white" />
                </div>
                Add Row
              </button>
            </div>
          </>
        )}

        {/* Form Actions */}
        <div className="flex flex-wrap mt-6">
          <button className="bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] text-white py-1 px-8 sm:px-16  rounded mb-2 mr-2">
            Invite
          </button>
          <button
            className="bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] text-white py-1 px-8 sm:px-16  rounded mb-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
