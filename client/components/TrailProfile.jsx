import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import { Image } from 'cloudinary-react';

const preset = 'hikeimages';
const cloudName = 'dbwbxubwi';

const TrailProfile = () => {
  const [image, setImage] = useState('');
  const [trailImageURLs, setTrailImageURLs] = useState();

  // temp variable to test tagging functionality with cloudinary upload widget
  const trailName = 'Trail 2';
  // Can I attach a tag to the uploaded image, and filter photos from get requests using the tags param as an identifier for different trails?

  console.log(`TRAIL PROFILE || LINE 8 || image `, image);

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  // create upload widget
  const widget = cloudinary.createUploadWidget(
    // NEED TO ADD FOLDER TO UPLOAD PATH. IF NO FOLDER CREATE ONE?
    {
      cloudName: cloudName,
      uploadPreset: preset,
      maxFiles: 3,
      folder: trailName, // substitute with trail name passed through props from TrailList Component
      tags: [trailName],
    },
    (err, result) => {
      if (!err && result && result.event === 'success') {
        console.log('TRAILPROFILE || WIDGET || LINE 21 || result', result);
      }
    }
  );

  const showWidget = (event, widget) => {
    event.preventDefault();
    widget.open();
  };
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  // create get request to backend to get all images from cloudinary

  const loadImages = async () => {
    try {
      const res = await fetch(`/api/images/`);
      const data = await res.json();
      console.log('TRAILPROFILE || LOADIMAGES || LINE 48 || data', data);
      setTrailImageURLs(data);
    } catch (error) {
      console.error('TRAILPROFILE || LOADIMAGES || LINE 51 || error', error);
    }
  };
  useEffect(() => {
    loadImages();
  }, []);

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <h1>Trail Profile</h1>
      {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}
      <button
        onClick={(e) => {
          showWidget(e, widget);
        }}
      >
        Upload
      </button>
      <div>
        {trailImageURLs &&
          trailImageURLs.map((trailImageURL, index) => (
            <Image
              key={index}
              cloudName={cloudName}
              publicId={trailImageURL}
              width="300"
              crop="scale"
            />
          ))}
      </div>
    </div>
  );
};

export default TrailProfile;
