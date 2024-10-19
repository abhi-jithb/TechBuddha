import React from 'react';
import { useParams } from 'react-router-dom'; 
import MemberProfileSection from '../MemberDetails';
import AchievementsSection from '../Portfolio';
import { membersData } from '../constants/index';

const MemberPage = () => {
  const { memberId } = useParams(); 
  const memberData = membersData[memberId];

  if (!memberData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Member Not Found</h1>
          <p className="mt-2 text-gray-600">The requested member profile does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <MemberProfileSection {...memberData} />
      <AchievementsSection achievements={memberData.achievements} />
    </>
  );
};

export default MemberPage;