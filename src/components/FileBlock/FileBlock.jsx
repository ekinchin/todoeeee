/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';

const FileBlock = ({
  onDownload, onUpload,
}) => (
  <div className="fileBlock">
    <input className="fileBlock--button" type="file" onChange={e => onUpload(e)} />
    <button className="fileBlock--button" type="button" onClick={() => onDownload()}>скачать</button>
  </div>
);

export default FileBlock;

FileBlock.propTypes = {
  onDownload: propTypes.func.isRequired,
  onUpload: propTypes.func.isRequired,
};
