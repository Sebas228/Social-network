import * as React from 'react';

import { HiHeart, HiOutlineChatAlt2 } from 'react-icons/hi';

import './post-card.css';

const PostCard = ({
  id,
  image,
  likes,
  text,
  creatorName,
  creatorImage,
  tags
}) => {
  return (
    <div className="post">

      <div className="header-post">
        <img src={creatorImage} alt={creatorName} />
        <p>{creatorName}</p>
      </div>

      <img src={image} alt="Thumbnail" className="cover" />
      <p className="text-content">{text}</p>

      <div className="tags">
        {tags.map((tag, index) =>
          <div key={index} className="tag">{tag}</div>
        )}
      </div>

      <div className="feedback">
        <span className="icon">
          <HiHeart className="likes" size="1.5em" />
          <span>{likes}</span>
        </span>
        <span className="icon pointer">
          <HiOutlineChatAlt2 size="1.5em" />
          <span>15</span>
        </span>
      </div>

    </div>
  );
}

export default PostCard;
