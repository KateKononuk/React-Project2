import React from 'react';


const styles = {
    post_cont: {
       display: "flex",
       flexDirection: 'row',
       justifyContent: 'space-between',
       width: '100%',
    },
    content: {
        width: '100%',
    }
}

const PostItem = (props) => {
  
    return (
        <div className='App'>
            <div className='post'>
                <div className='post__content' style={styles.post_cont}>
                    <h3>
                     {props.post.userName} </h3>
                    <p>{props.post.date}</p>
                </div>
                <div style={styles.content}><h5> {props.post.content} </h5></div>
                <div className='post__btns'>
                </div>
            </div>         
        </div>
    );
};

export default PostItem;