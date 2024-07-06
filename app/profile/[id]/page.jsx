"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";


const ProfileView = ({params}) => {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    console.log(params.id);
    const [myPosts, setMyPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${params.id}/posts`);
          const data = await response.json();
          setMyPosts(data);
        };
        if (params.id) {
          fetchPosts();
          }
      }, []);
  return (
    <Profile
      name={name}
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={myPosts}
    />
  )
}

export default ProfileView
