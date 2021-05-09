import React from "react";
import { useDispatch } from "react-redux";
import "../css/SidebarChannel.css";
import { setChannelInfo } from "../features/appSlice";

function SidebarChannel({ id, channel }) {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
