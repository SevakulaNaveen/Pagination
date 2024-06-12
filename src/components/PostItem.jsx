import React from 'react'
import style from './PostItem.module.css'


function PostItem({ id, title }) {
    return (
        <div className={style.container}>
            <h6>{id}</h6>
            <h4>{title}</h4>

        </div>
    )
}

export default PostItem