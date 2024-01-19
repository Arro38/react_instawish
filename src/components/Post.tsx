import { HOME_URL } from "../lib/ApiService";

export default function Post({ post }: { post: Post }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={HOME_URL + post.imageUrl} alt={post.createdBy.username} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {post.createdBy.username}
          <div className="badge badge-secondary">
            {post.comments.length + " commentaires"}
          </div>
        </h2>
        <p>{post.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Commenter</div>
          {/* <div className="badge badge-outline">{post.liked + " likes"}</div> */}
        </div>
      </div>
    </div>
  );
}
