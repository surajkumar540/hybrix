
const HeaderTab = ({ inviteType, handleInviteTypeChange }) => {
  return (
    <div className=" bg-[#DCEDF4] sticky top-0 z-10 ">
      {/* Fixed Header */}
      <div className="container mx-auto ">
        {/* Fixed Invite Type Selector */}
        <div className="flex flex-wrap mb-4">
          <button
            className={`py-2 px-4 rounded-md ${
              inviteType === "single"
                ? "bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] text-white"
                : "text-black"
            } mb-2 mr-2`}
            onClick={() => handleInviteTypeChange("single")}
          >
            Single Invite
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              inviteType === "bulk"
                ? "bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] text-white"
                : "text-black"
            } mb-2 mr-2`}
            onClick={() => handleInviteTypeChange("bulk")}
          >
            Bulk Invite
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              inviteType === "meeting"
                ? "bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] text-white"
                : "text-black"
            } mb-2`}
            onClick={() => handleInviteTypeChange("meeting")}
          >
            Meeting Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTab;
