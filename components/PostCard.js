import Link from "next/link";

export default function PostCard(props) {
  const { post } = props;
  console.log(post);

  return (
    <Link className="unstyled" href={`/post/${post.slug}`}>
      <div className="postCard">
        <div className="featuredImage">
          <img src={post.featured_image} alt={post.title} />
        </div>

        <h3>{post.title}</h3>
        <p className="excerpt">{post.bio}</p>

        <div className="statsContainer">
          <div className="stat">
            <p>{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
