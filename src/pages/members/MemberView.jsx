import { useState } from "react";
import MemberInfo from "../../components/members/MemberInfo";
import MembershipDetails from "../../components/members/MembershipDetails";
import ProgressChart from "../../components/members/ProgressChart";
import ActivityLog from "../../components/members/ActivityLog";
import FabRenew from "../../components/members/FabRenew";
import RenewalModal from "../../components/members/RenewalModal";
import { useNavigate } from "react-router-dom";

export default function MemberDetails() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="text-slate-800">
      <MemberInfo onEdit={() => navigate('/members/1/edit')} />
      <MembershipDetails onRenew={() => setModalOpen(true)} />
      {/* <ProgressChart /> */}
      {/* <ActivityLog /> */}
      <FabRenew onClick={() => setModalOpen(true)} />
      <RenewalModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => {
          setModalOpen(false);
          alert("Membership renewed successfully!");
        }}
      />
    </div>
  );
}
