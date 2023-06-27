import React from "react";

interface BlogProps {
  id: string;
}
const Blog: React.FC<BlogProps> = ({ id }) => {
  return (
    <section id={id}>
      <h1>Blog</h1>
    </section>
  );
};

export default Blog;
