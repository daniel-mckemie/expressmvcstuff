import React from 'react';

export default ({ color, defaultChecked }) =>
  <span key={color.id}>
    <input
      key={color.id}
      type="checkbox"
      name="color_id"
      className="is-hidden"
      value={color.id}
      defaultChecked
      id={`checkbox_${color.id}`}
    />
    <label
      key={color.id}
      htmlFor={`checkbox_${color.id}`}
      className="button control"
      style={{
        '--custom-color': `#${color.hex}`,
      }}
    >
      {color.name}
    </label>
  </span>
};
