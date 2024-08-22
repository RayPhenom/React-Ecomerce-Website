import React from 'react';
import PageHeader from '../components/PageHeader';
import blogList from '../utilis/blogdata';

const Blog = () => {
  return (
    <div>
      
      {/* Blog List */} 
      <div className="blog-list, display-flex, flex-wrap:wrap, justify-content: space-between, gap-20px ">
        {blogList.map((blog) => (
          <div key={blog.id} className="blog-item, box-sizzing: border-box, padding-15px, border-radius:8px ">
            <img src={blog.imgUrl} alt={blog.imgAlt} />
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <div className="blog-meta">
              {blog.metaList.map((meta, index) => (
                <span key={index}>
                  <i className={meta.iconName}></i> {meta.text}
                </span>
              ))}
            </div>
            <div className="blog-footer">
              <span>{blog.commentCount} Comments</span>
              <button>{blog.btnText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
