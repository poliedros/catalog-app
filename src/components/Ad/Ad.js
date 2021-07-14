import React from 'react';
import './Ad.css';
import PropTypes from 'prop-types';

/*const Ad = () => (
  <div>
    Ad Component
  </div>
);

Ad.propTypes = {};

Ad.defaultProps = {};*/

/*export default function Ad ({source, width, height}) {
  return <img src={source + '/' + width + '/' + height} ></img> //<img src="{title}' + width + '/' + height + '" alt="pretty kitty"> </img>
}*/

export default function Ad ({source, source2}) {
  console.log(source2);
  if(source2) {
    return <ul class='miniGalery'><img class='insideColumn' src={source} ></img><img class='insideColumn' src={source2} ></img></ul>
  } else {
    return <img class='unique' src={source} ></img>
  }
}