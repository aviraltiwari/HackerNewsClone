import React from "react";
import { useEffect } from "react";
import Api from "../../modules/utils/Api";
import Stories from "../Stories";
import { Routes, Route } from "react-router-dom";

const Container = () => {
    const [loading, setLoading] = React.useState(true);
    const [topPosts, setTopPosts] = React.useState({});
    const [newPosts, setNewPosts] = React.useState({});
    const storyType = ["Top", "New"]

    const fetchPosts = async () => {
        const topStories = await Api.fetchTopStories();
        topStories.slice(0, 15).map(id => {
            Api.fetchItem(id).then(item => {
                setTopPosts(prevPosts => {
                    return {
                        ...prevPosts,
                        [id]: item
                    }
                })
            }).then(() => {
                setLoading(false);
            })
        })
        const newStories = await Api.fetchNewStories();
        newStories.slice(0, 15).map(id => {
            Api.fetchItem(id).then(item => {
                setNewPosts(prevPosts => {
                    return {
                        ...prevPosts,
                        [id]: item
                    }
                })
            }).then(() => {
                setLoading(false);
            }
            )
        }
        )
    }


    useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <div className="container">
            <div className="container-body">
                <Routes>
                    <Route path="/" element={<Stories type="Top" loading={loading} posts={topPosts} />} />
                    <Route path="/new" element={<Stories type="New" loading={loading} posts={newPosts} />} />
                </Routes>
            </div>
        </div >
    )
}

export default Container;