import React from 'react';


/**
 * @component InputSimple
 * @param {Object} props - The incoming props.
 * @param {Object} props.color - The name of the color.
 * @param {Number} props.color.id - The id of the color.
 * @param {boolean} props.defaultChecked - is this checkbox checked?
 */

// this component is expecting the color object
// and whether this is chec
export default ({ color, ...props }) => (
  <div>
    <input
      key={color.id}
      type="checkbox"
      name="color_id"
      value={color.id}
      id={`checkbox_${color.id}`}
      {...props}
    />{color.name}
  </div>
)


