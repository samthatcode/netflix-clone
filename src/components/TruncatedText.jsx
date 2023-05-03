import React, { useState } from "react";

const TruncatedText = ({ text, maxLength }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if ((text && text.length <= maxLength) || showMore) {
    return (
      <div>
        <div>{text}</div>
        {text && text.length > maxLength && (
          <button onClick={toggleShowMore}>Show less</button>
        )}
      </div>
    );
  } else {
    const truncatedText = text ? text.slice(0, maxLength) + "..." : "";
    return (
      <div>
        <div>{truncatedText}</div>
        <button onClick={toggleShowMore}>Show more</button>
      </div>
    );
  }
};

export default TruncatedText;
