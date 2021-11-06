import * as React from 'react'
import './tag-list.css';

import { HiOutlineEmojiSad } from 'react-icons/hi';

import axiosInstance from '../../axiosConfig';

const { useEffect, useState } = React;

const TagList = ({ updateTagSelected }) => {

  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [tagActive, setTagActive] = useState('');

  const getTags = async () => {

    setLoading(true);

    try {

      const axiosResponse = await axiosInstance('tag?limit=30');
      const { data } = axiosResponse.data;

      const randomNumber = Math.floor(Math.random() * data.length + 1);
      const itemsFiltered = data.filter(item => item !== '' && item.length > 2);

      setTags(itemsFiltered.slice(randomNumber, randomNumber + 30));

    } catch (error) {

      if (error?.error) {
        setError(error.error);
      } else {
        setError('Ocurrio un error inesperado obteniendo la lista de tags');
      }

    } finally {
      setLoading(false);
    }

  };

  const handleChangeTag = (newTag) => {

    if (newTag === tagActive) {
      setTagActive('');
      updateTagSelected(null);
    } else {
      setTagActive(newTag);
      updateTagSelected(newTag);
    }

  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="tag-list">
      <h4 className="title">Listado de tags</h4>
      <p>El listado esta limitado a 30 tags para una mejor visualización</p>

      {loading && (
        <p className="loading-text">Cargando Tags..</p>
      )}

      {error && (
        <p className="no-registers">
          <span className="error-msg">{error}</span> <HiOutlineEmojiSad />
        </p>
      )}

      {tags.map((tag, index) => (
        <div
          key={index}
          className={`tag pointer ${tagActive === tag && 'tag-active'}`}
          onClick={() => handleChangeTag(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

export default TagList;
