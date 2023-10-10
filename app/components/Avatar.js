import React from "react";
import PersonIcon from '@mui/icons-material/Person';
const Avatar = () => {
  return (
    <div className="relative h-6 w-6">
      <div className="relative inline-block rounded-full overflow-hidden  ">
        <PersonIcon fontSize="small"/>
      </div>
    </div>
  );
};

export default Avatar;
