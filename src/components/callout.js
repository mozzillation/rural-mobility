import React from "react"

const Callout = ({ title, color, children }) => {
  return (
    <div className="module">
      <div className={color ? "callout " + color : "callout"}>
        <div className="callout__title">{title}</div>
        <div className="callout__children">{children}</div>
      </div>
    </div>
  )
}

export default Callout
