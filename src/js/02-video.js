
import Player from '@vimeo/player';
import {throttle}from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const onSaveTimeUpdate = ({ seconds } = 0) => {
  return localStorage.setItem(STORAGE_KEY, seconds);
};
const getVideoCurrentTime = () => {
  return localStorage.getItem(STORAGE_KEY) || 0;
};

player.setCurrentTime(getVideoCurrentTime());
player.on('timeupdate', _.throttle(onSaveTimeUpdate), 1000);