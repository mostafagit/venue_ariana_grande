import React from "react";

function Location(props) {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.242419040095!2d51.373132514607136!3d35.744845934089184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2sMilad%20Tower!5e0!3m2!1sen!2sde!4v1669414389025!5m2!1sen!2sde"
        title="location"
        width="100%"
        height="500px"
        style={{"border":0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="location_tag">
        <div>location</div>
      </div>
    </div>
  );
}

export default Location;
