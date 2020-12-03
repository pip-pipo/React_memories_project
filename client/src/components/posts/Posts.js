import React from 'react'
import Post from './post/Posts';
import useStyle from './styles';
const Posts = () => {
    const classes = useStyle();
    return (
        <div>
            
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio veritatis incidunt hic tenetur debitis, et libero fugit, vel quia? Fuga, repudiandae illo. Laboriosam neque voluptate minus enim et.</h2>
        <Post />
           
        </div>
    )
}

export default Posts
