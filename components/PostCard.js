import Link from "next/link";

export default function PostCard(props) {
  const { post } = props;

  return (
    <Link className="unstyled" href={`/post/${post.slug}`}>
      <div className="postCard">
        <div className="featuredImage">
          <img src={post.image} alt={post.title} />
        </div>

        <h3>{post.title}</h3>
        <p className="excerpt">{post.bio}</p>

        <div className="statsContainer">
          <div className="stat">
            <p>{post.date}</p>
          </div>
          {/* <div className="stat">
            <h5>Tags</h5>
            <p>{post.tags.join(", ")}</p>
          </div> */}
          {/* <div className="stat">
            <p>{post.estimatedReadTime}</p>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
