/**
 * Created by rival on 31/01/2017.
 */
import React  from 'react';
import './css/Popup.css';

const Popup = ({url, closeFunction}) => (
  <div className="popup-body">
      <img className="popup-image" alt="popup from the selected gif" src={url} />
      <button className="popup-buttonClose" onClick={closeFunction} >X</button>
  </div>
);

export default Popup