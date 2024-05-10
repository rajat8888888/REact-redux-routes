import { useContext } from "react";
import { BsEmojiGrin } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { socialContext } from "../store/CreateStoreProvider";
export const Post=({postData})=>{
    const {deletePost}=useContext(socialContext)
    const { id,title,body, reactions ,tags,userId}=postData;

    return(
        <>
 <div className="card mycard mypost" style={{width: "25rem"}}>
 <BsEmojiGrin   />
  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
    
    <p className="card-text">{body}
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(id)}>
    <MdDeleteOutline />
    <span class="visually-hidden">unread messages</span>
  </span>
    </p>
    <p>Total tags {tags.map((item)=><sup>{item}</sup>)}</p>
    <a href="#" className="btn btn-primary">{userId}</a>
  </div>
  <div class="alert alert-success reaction" role="alert">
   This post is react by {reactions} pepole
</div>
</div>
        </>
    )
}