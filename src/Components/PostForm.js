import React, {useState} from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useAuth } from "../Contexts/AuthContext"

const PostForm = ({create}) => {
  const { currentUser } = useAuth()
    const [post, setPost] = useState({ content: '', userName: `${currentUser.email}` })

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
          ...post,  id:Date.now(), date: new Date().toISOString()
        }
        create(newPost)
   
        setPost({content: ''})
        
      }

 
    return (
      <div className='myInput'>
        <form onSubmit={addNewPost}>
        <Input type="text" 
               value={post.content}
               placeholder="what do you have in mind?"
               onChange={e => {
                 const charLimit = 140;
                 if (charLimit - e.target.value.length >=0) {
                setPost(
                  {...post, content: e.target.value}
                    )
                  }
                }
              } 
              />
        <Button  onClick={addNewPost}>Tweet</Button>
      </form>
      </div>
    );
};

export default PostForm;