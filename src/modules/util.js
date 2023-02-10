import { baseUrl, involvementUrl } from './api.js';

const getData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const getMovie = async (id) => {
  const movieUrl = `${baseUrl}/${id}`;
  const response = await fetch(movieUrl);
  const data = await response.json();
  return data;
};

const pushLike = async (id) => {
  await fetch(`${involvementUrl}likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

const getLike = async () => {
  const response = await fetch(`${involvementUrl}likes`);
  const data = await response.json();
  return data;
};

const pushComment = async (id, username, comment) => {
  await fetch(`${involvementUrl}comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
};

const getComment = async (id) => {
  const response = await fetch(`${involvementUrl}comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

export {
  getData, getMovie, getLike, pushLike, pushComment, getComment,
};