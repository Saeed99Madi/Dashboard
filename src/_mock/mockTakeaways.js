import { random } from 'lodash';
import { _mock } from './_mock';
import { _Reports, _Tags, _fullNames, _labels, _postTitles, _sentences } from './assets';

export const _mockTakeaways = [...Array(20)].map((_, index) => {
  const description = _postTitles[index];
  const Report = index % 2 === 0 ?
    {Report:_Reports[0], icon: '/public/assets/mic.png', time: '3:23'} :
    {Report:_Reports[1], icon: '/public/assets/data.png', time: '5:23'}

  const Author = {
    id: index,
    name: _fullNames[index],
    avatarUrl: _mock.image.avatar(index),
  };

  const comments = [...Array(index)].map(( e , i) =>{
    const text = _sentences[random(0, 20)]
    const avatarUrl = _mock.image.avatar(i)
    return {
      text,
      avatarUrl
    }
  });
  const vote = {
    number: index,
    clicked: index % 2 === 0
  }

  const label = _labels[random(0, _labels.length - 1)];
  const TagsLength = random(1, 3);
  const TagsStartIndex = random(1, _Tags.length -1);
  const Tags = _Tags.slice(TagsStartIndex, TagsLength + TagsStartIndex);
  return {
    Author,
    description,
    Report,
    comments,
    vote,
    label,
    Tags,
    id: index
  };
});