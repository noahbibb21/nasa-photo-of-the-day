import React from 'react';
import './Styling.css';

function Styling({data}) {

  let maybeCopyright = '';
  if (data?.copyright) {
    maybeCopyright = (
      <div className='styling__copyright'>
        © {data.copyright}
      </div>
    )
  }

  let maybeDownload = '';
  if (data?.hdurl) {
    maybeDownload = (
      <div className='styling__download'>
        <a href={data.hdurl} download>Download a high-resolution version</a>
      </div>
    )
  }

  return (
    <div className="stlying-picture">
      <figure>
        <img src={data.url} alt="" className='styling__media' />
        <figcaption>
          <h2>{data.title}</h2>
          <div className="styling__explanation">
            {data.explanation}
          </div>
        </figcaption>
      </figure>
      {maybeDownload}
      {maybeCopyright}
    </div>
  );
}

export default Styling;