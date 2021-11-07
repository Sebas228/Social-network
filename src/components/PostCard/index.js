import * as React from 'react';

import { HiHeart, HiOutlineChatAlt2 } from 'react-icons/hi';

import './post-card.css';

import Modal from '../Modal';
import axiosInstance from '../../axiosConfig';
import Loader from '../Loader';
import UserCard from '../UserCard';

const { useState } = React;

const PostCard = ({
  id,
  image,
  likes,
  text,
  creatorName,
  creatorImage,
  creatorID,
  tags
}) => {

  const [userModalOptions, setUserModalOptions] = useState({
    show: false,
    loading: false,
    error: null,
    data: null
  });

  const handleOpenUserModal = () => setUserModalOptions(prevState => ({ ...prevState, show: true }));

  const handleCloseUserModal = () => setUserModalOptions({ show: false, loading: false, error: null, data: null });

  const getUserInfo = async () => {

    setUserModalOptions(prevState => ({ ...prevState, loading: true }));

    try {

      const axiosResponse = await axiosInstance(`user/${creatorID}`);
      const user = axiosResponse.data;

      setUserModalOptions(prevState => ({
        ...prevState,
        data: user
      }));

    } catch (error) {

      if (error?.error) {
        setUserModalOptions(prevState => ({ ...prevState, error: error?.error }));
      } else {
        setUserModalOptions(prevState => ({ ...prevState, error: 'Ocurrio un error inesperado' }));
      }

    } finally {
      setUserModalOptions(prevState => ({ ...prevState, loading: false }));
    }

  };

  return (
    <div className="post">

      <div className="header-post">
        <img
          src={creatorImage}
          alt={creatorName}
          onClick={handleOpenUserModal}
        />
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

      <Modal
        title={`[Perfil] ${userModalOptions.data?.firstName || ''} ${userModalOptions.data?.lastName || ''}`}
        onClose={handleCloseUserModal}
        show={userModalOptions.show}
        transitionProps={{
          onEntered: getUserInfo
        }}
      >
        {userModalOptions.loading && <Loader />}

        {userModalOptions.error && (
          <p className="no-registers">
            <span className="error-msg">{userModalOptions.error}</span>
          </p>
        )}

        {(!userModalOptions.loading && !userModalOptions.error) && (
          <UserCard {...userModalOptions.data} />
        )}
      </Modal>

    </div>
  );
}

export default PostCard;
