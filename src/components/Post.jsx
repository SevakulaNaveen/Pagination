import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

function Post() {

    const [page, setPage] = useState(1)
    const [post, setPost] = useState([]);
    const [total, setTotal] = useState(0);

    const getData = async (page) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit_=10&_page=${page}`);
            const data = await response.json();
            setPost(data);
            const Total = Number(response.headers.get("X-Total-Count"))
            setTotal(Total)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData(page);
    }, [page])

    const handlePageChange = (val) => {
        const updatedPage = page + val;
        setPage(updatedPage)
    }
    return (
        <>
            <div>
                {post.map((item, id) =>
                    <PostItem key={id} id={item.id} title={item.title} />
                )}
            </div>
            <div style={{ display: "flex" }}>
                <button disabled={page === 1} onClick={() => handlePageChange(-1)}>prev</button>
                <h4>{page}</h4>
                <button onClick={() => handlePageChange(+1)} disabled={page === Math.ceil(total / 10)}>next</button>
            </div>

            <div>
                <h2>{page}</h2>
                {new Array(10).fill(0).map((element, id) =>
                    <button key={id} onClick={() => setPage(id + 1)}>{id + 1}</button>
                )}
            </div>
        </>
    )
}

export default Post