import React from "react";
import './style.scss';

type PostProps = {
    children: React.ReactNode,
    _id?: string,
    style?: React.CSSProperties
};

const Post = (props: PostProps): JSX.Element => {
    return(
        <a 
            className="post" 
            id={props._id} 
            style={props.style}
        >
            {props.children}
        </a>
    );
}

export default Post;