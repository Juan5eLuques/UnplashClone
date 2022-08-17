import * as React from "react"

const SearchIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M21 4a16 16 0 1 0 0 32 16 16 0 1 0 0-32Z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M32.229 32.229 45.5 45.5"
    />
  </svg>
)

export default SearchIcon