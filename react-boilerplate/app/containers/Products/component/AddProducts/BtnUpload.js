import React from 'react';

const BtnUpload = ({ dom }) => {
  return (
    <button type="button" className="upload" onClick={() => openUpload(dom)} >Upload File</button>
  )
}

const openUpload = (dom) => {
  dom.click();
}

export default BtnUpload;
