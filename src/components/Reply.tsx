"use client";


export default function Reply({ userImagePath, username, replyText, likeNum })  {
  return(
  <div>
  <img 
  src = {userImagePath}
  width="48"
  height="48"
  className="rounded-circle"
  style={{ objectFit: "cover" }}
  />
  <div 
  className="rounded rounded-3 p-2"
  style={{ backgroundColor: "#3A3B3C" }}
  >
  <div className="fw-semibold" style ={{ color : "#E4E6EB"}}>
  {username}
  </div>
  <br />
  <span style={{ color : "#E4E6EB" }}>{reply}</span>
  <div className="d-flex align-items-center gap-1">
  <img src="/like.svg" width={20}></img>
  <span style={{ color : "#B0B3B8"}}>{likeNum} คน</span>
  </div>
  </div>
  </div>
  );
};
