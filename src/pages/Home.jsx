// import {supabase} from "../supabaseClient.tsx";
import {useEffect, useState} from "react";
import {fetchPosts} from "../features/actions/postsActions.ts";
// import {Post} from "../components/Post.tsx";



const Home = () => {
    // const posts = useSelector((state) => state.posts)
    const [posts,setPosts] = useState()
    useEffect(() => {
       // // can't have async calls directly in a use effect so a function is made
       //  const getUser = async () => {
       //     const { data, error } = await supabase.auth.getUser();
       //      console.log("user", data.user.user_metadata,error)
       //  }
       //  getUser()

    },[]);






    return (
        <div>
            <h1> Home Page</h1>

            {/*{posts && <div>*/}
            {/*    {posts.Map((item) => (*/}
            {/*        <Post key={item.id}>{item.name}</Post>*/}
            {/*    ))}*/}

            {/*</div>}*/}

            {/*<h3>{username? "hello " + username : "Not logged in"} </h3>*/}
        </div>
    )
}

export default  Home