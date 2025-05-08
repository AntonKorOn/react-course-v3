import avatar from "../../../assets/default-avatar.svg";
import React from "react";

export function Person({ name, nickName='shakeBake', images }) { // if nickName is undefined then use 'shakeBake', the same as nickName || 'shakeBake'
  //   const img = images[0].small.url;

  // first method
  const img = images && images[0] && images[0].small && images[0].small.url; // if left expression is true then do the left one and repeat until you reach the end (basically if "images" exist then do images[0], if it exists then do images[0].small)

  // second method
  const img2 = images?.[0]?.small?.url || avatar;

  return (
    <div>
      <img src={img2} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName || "shakeBake"}</p> {/* / if nickName is undefined then use 'shakeBake', the same as nickName='shakeBake' */}
      {/* basically || operator checks for truth, if first element is true then it is outputted if it is not then the second one */}
    </div>
  );
}
