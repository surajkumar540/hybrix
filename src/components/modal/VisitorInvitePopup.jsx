import { ChevronDown, X } from "lucide-react";

const VisitorInvitePopup = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "/");
  };

  // Generate a random visitor ID
  const visitorId = Math.floor(100000 + Math.random() * 900000);

  // Mock data for ID proof - in reality this would come from the form
  const idProof = {
    type: "Aadhar card",
    number: `30** **** **** **90`,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4 ">
      <div className="rounded-lg w-full max-w-3xl relative">
        {/* Header */}
        <div className="py-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Visitor Details</h2>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] rounded-full p-1 text-white focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 bg-white rounded-lg font-semibold  ">
          <div>
            {/* Profile section - Responsive layout */}
            <div className="flex flex-col sm:flex-row">
              <div className="mb-4 sm:mb-0 sm:mr-6 flex justify-center sm:justify-start">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                  <div className="rounded-full bg-gray-300 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Visitor name and status */}
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4 w-full">
                <div className="text-center sm:text-left mb-3 sm:mb-0">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {formData.fullName || "Visitor Name"}
                  </h3>
                  <p className="text-gray-600">
                    Visiting: {formData.host || "Not specified"}
                  </p>
                  <p className="text-gray-600">
                    Official Meeting: {formData.purpose || "Not specified"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] text-white px-3 py-1 text-sm md:text-base rounded-full">
                    Approved
                  </span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="sm:mt-6">
              {/* Responsive grid for details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-3 w-full">
                  <p className="text-sm">
                    Email ID : {formData.emailId || "Not provided"}
                  </p>
                  <p className="text-sm">
                    Mobile Number : {formData.mobileNumber || "Not provided"}
                  </p>
                  <p className="text-sm">
                    Date of Meet :{" "}
                    {formatDate(formData.date) || "Not specified"}
                  </p>
                  <p className="text-sm">
                    Time: {formData.time || "Not specified"}
                  </p>
                  <p className="text-sm">
                    Meeting Room : {formData.meetingRoom || "Not specified"}
                  </p>
                  <p className="text-sm">
                    Company Name : {formData.branch || "Not specified"}
                  </p>
                  <p className="text-sm">
                    Accessories Carried :{" "}
                    {formData.vehicle !== "None" ? `${formData.vehicle}, ` : ""}
                    Laptop, Phone
                  </p>
                </div>

                {/* Right column details */}
                <div className="space-y-3 w-full">
                  <p className="text-sm">Identity Proof : {idProof.type}</p>
                  <p className="text-sm">ID number : {idProof.number}</p>
                  <p className="text-sm pt-4 md:pt-8">
                    Visitor ID number : {visitorId}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorInvitePopup;
