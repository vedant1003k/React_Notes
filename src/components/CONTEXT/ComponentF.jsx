import React from "react";
import { UserContext, channelContext } from "../../App";
const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {/* Component F */}
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user},channel context value {channel}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
