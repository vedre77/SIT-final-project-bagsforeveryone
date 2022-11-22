import React from 'react';
import { StoryWrapper } from './StoryCard.styles'
import { useNavigate } from 'react-router-dom';

const StoryCard = ({ story }) => {

  const navigate = useNavigate();

  const handleStoryClick = e => {
    navigate(`/story/${e.target.id}`)
  }

  return (
      <StoryWrapper>
          <img className="preview" src={story.image} alt="description"></img>
          {/* Story heading that triggers opening of single story page: */}
          <h3 id={story.id}
              className='hide' 
              onClick={handleStoryClick}
          >{story.title}</h3>
      </StoryWrapper>
  )
}

export default StoryCard