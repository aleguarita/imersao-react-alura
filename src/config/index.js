import React from 'react';

const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://alura-flix-aleguarita.herokuapp.com';

export default {
  URL_BACKEND,
};
