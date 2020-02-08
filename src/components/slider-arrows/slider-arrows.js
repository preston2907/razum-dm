import React from 'react'

const SliderArrow = props => (
    <svg viewBox="0 0 500 500" {...props} width = '75'>
    <circle
      cx={249.9}
      cy={250.4}
      fill="#FFF"
      r={181.8}
      stroke="#e4e4e4"
      strokeMiterlimit={10}
      strokeWidth={10}
    />
    <path
      fill="#FFF"
      stroke="#3a3a3a"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={10}
      d="M289.7 317.4L198 249h0l91.6-68.5"
    />
  </svg>
)

export default SliderArrow