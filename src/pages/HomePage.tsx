import React, { useEffect, useState } from "react";
import ApiService from "../lib/ApiService";
import Navbar from "../components/Navbar";
import PostContainer from "../components/PostContainer";

export default function HomePage() {
  const api = new ApiService();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchMe = async () => {
      const user = await api.me();
      setUser(user);
    };
    fetchMe();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const p = await api.home();
      setPosts(p);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {user && <Navbar user={user} />}
      {posts && <PostContainer posts={posts} />}
    </>
  );
}
