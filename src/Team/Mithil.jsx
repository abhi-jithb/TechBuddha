import React from 'react';
import AchievementsSection from '../Portfolio';
import MemberProfileSection from '../MemberDetails';


const Mithil = () => {
  const memberData = {
    name: "Mithil",
    title: "COO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "../assets/Augstine.jpeg",
    quote: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Steve Jobs",
      role: "Co-founder of Apple Inc."
    }
  };

  return <>
 <MemberProfileSection
        name={memberData.name}
        title={memberData.title}
        bio={memberData.bio}
        image={memberData.image}
        quote={memberData.quote}
      />  <AchievementsSection  />;
  </>
};

export default  Mithil;