import React from 'react';
import FlagButton from './FlagButton';
import {I18n} from '../coral-framework';
import translations from './translations.json';

const FlagComment = (props) => <FlagButton {...props} getPopupMenu={getPopupMenu} />;

const getPopupMenu = (step, itemType) => {
  switch(step) {
  case 1: {
    return {
      header: lang.t('step-1-header'),
      options: [
        {val: 'user', text: lang.t('flag-username')},
        {val: 'comments', text: lang.t('flag-comment')}
      ],
      button: lang.t('continue'),
      sets: 'itemType'
    };
  }
  case 2: {
    const options = itemType === 'comments' ?
    [
      {val: 'I don\'t agree with this comment', text: lang.t('no-agree-comment')},
      {val: 'This comment is offensive', text: lang.t('comment-offensive')},
      {val: 'This comment reveals personally identifiable infomration', text: lang.t('personal-info')},
      {val: 'other', text: lang.t('other')}
    ]
    : [
      {val: 'This username is offensive', text: lang.t('username-offensive')},
      {val: 'I don\'t like this username', text: lang.t('no-like-username')},
      {val: 'This looks like an ad/marketing', text: lang.t('marketing')},
      {val: 'other', text: lang.t('other')}
    ];
    return {
      header: lang.t('step-2-header'),
      options,
      button: lang.t('continue'),
      sets: 'detail'
    };
  }
  case 3: {
    return {
      header: lang.t('step-3-header'),
      text: lang.t('thank-you')
    };
  }}
};

export default FlagComment;

const lang = new I18n(translations);
