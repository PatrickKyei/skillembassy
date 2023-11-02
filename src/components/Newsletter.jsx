import React from "react";

function Newsletter() {
  return (
    <div>
      <div>
        <iframe
          src="https://skillembassy.substack.com/embed"
          width="480"
          height="150"
          style={{ border: "1px solid #EEE", background: "grey" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default Newsletter;
