import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateStoryWrapper } from './EditStory.styles';
import { PageButton } from '../../styles/global.styles';
import { PostButton } from '../../pages/create-story/CreateStory.styles';
import { UserHeader } from '../../pages/story-page/StoryPage.styles';
import { FormWrapper } from './EditStory.styles';
import { useParams } from 'react-router-dom';

const EditStory = props => {

    const [loggedInUser, setLoggedInUser] = useState('');
    const localToken = (JSON.parse(localStorage.getItem("bagsAuth"))).bagsToken;
    const { id } = useParams();

    // fetch logged-in user:
    useEffect(() => {
        const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/user/me/";
        const config = {
            method: "GET",
            headers: {          
                "Authorization": `Bearer ${localToken}`
            }
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => setLoggedInUser(data))
    }, []);

    const navigate = useNavigate();
    const [storyImage, setStoryImage] = useState(null);
    const [storyData, setStoryData] = useState(
        {
        title: props.title,
        content: props.content
        }
    )
    
    const [created, setCreated] = useState(false);

    const handleStoryChange = e => {
        setStoryData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleImageUpload = e => {
        const imageUrl = e.target.files;
        setStoryImage(imageUrl[0]);
    }

    //   Update a story:   
    const CreateStory = e => {
        e.preventDefault();
        // after successful posting:
        const cleanUp = () => {
            setCreated(false);
            document.getElementById('title').value='';
            document.getElementById('story').value='';
            setStoryData({
                title: "",
                content: ""
            })
            navigate('/story');
        }

        if (!storyData.title) {
            alert ('Title cannot be empty.')
            return;
        };
        if (!storyData.content) {
            alert ('Content cannot be empty.')
            return;
        };
        if (!storyImage) {
            alert ('Please choose an image.')
            return;
        };

        const formData = new FormData();

        formData.append("title", storyData.title);
        formData.append("content", storyData.content);
        formData.append("image", storyImage);
        const url = `https://bag-for-everyone.propulsion-learn.ch/backend/api/post/${id}/`
        const config = {
            method: "PATCH",
            headers: {           
                "Authorization": `Bearer ${localToken}`
            },
            body: formData,
        }
        fetch(url, config)
        .then(response => {
                response.json()
                if (response.status === 200) {
                    setCreated(true);
                }
        })
        .then(data => {
            setTimeout(cleanUp, 2000);
        })
        .catch(error => alert(error))
    }

    return (
        <CreateStoryWrapper>
                <PageButton onClick={() => navigate('/story')} className='modal-story-button'>X</PageButton>
                <div className='modal-story-wrapper'>
                    <UserHeader>
                    <div className='user-info-wrapper'>
                        <img src='../assets/images/user/avatar.png' alt='user avatar'></img>
                        <span>{loggedInUser ? loggedInUser[0].username : loggedInUser}</span>
                    </div>
                    </UserHeader>
                    <FormWrapper>
                        <label>
                        Edit title *
                        </label>
                        <input className='form-input' value={storyData.title} id="title" type="text" name="title" onChange = {handleStoryChange} required></input>
                        <label>
                        Edit story *
                        </label>
                        <textarea value={storyData.content} id="story" name="content" onChange = {handleStoryChange} required></textarea>
                        <label htmlFor="select">Choose the new image:</label>
                        <div className='file-field'>
                            <input id="select" className='select' multiple type='file' name='image' accept='image/' onChange={e => handleImageUpload(e)}></input>
                        </div>
                        <PostButton type={"submit"} 
                                    onClick={CreateStory}
                        >{created ? 'SUCCESS!' : 'EDIT'}
                        </PostButton> 
                    </ FormWrapper>
                </div>
        </CreateStoryWrapper>
    )
}

export default EditStory