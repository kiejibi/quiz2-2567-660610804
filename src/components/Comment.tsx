"use client";

import {Reply} from "@/components/Reply";


export default function Comment  ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
})  {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{objectFit: "cover"}}
        />
        <span className="fw-semibold" style={{ color: "#E4E6EB"}}>
          {username}
          </span>
          <br />
          <span style={{color: "#E4E6EB"}}>{commentText}</span>
          <div className = "d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span style={{color: "#B0B3B8"}}>{likeNum} คน</span>
          
        
        </div>
      </div>
    </div>
  )
};
