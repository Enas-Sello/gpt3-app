import React from 'react';
import './blog.css';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';
import blog5 from '../../assets/blog5.png';
const Blog = () => {
  return (
    <div className="blog section__padding section__margin">
      <h2 className="gradient__text ">
        A lot is happening, We are blogging about it.
      </h2>
      <div className="bottom">
        <div className="card left">
          <img src={blog1} alt="" />
          <div className="containt">
            <span>Sep 26, 2021</span>
            <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
            <a href="">Read Full Article</a>
          </div>
        </div>
        <div className="mid">
          <div className="card">
            <img src={blog2} alt="" />
            <div className="containt">
              <span>Sep 26, 2021</span>
              <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
              <a href="">Read Full Article</a>
            </div>
          </div>
          <div className="card">
            <img src={blog3} alt="" />
            <div className="containt">
              <span>Sep 26, 2021</span>
              <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
              <a href="">Read Full Article</a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <img src={blog4} alt="" />
            <div className="containt">
              <span>Sep 26, 2021</span>
              <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
              <a href="">Read Full Article</a>
            </div>
          </div>
          <div className="card">
            <img src={blog5} alt="" />
            <div className="containt">
              <span>Sep 26, 2021</span>
              <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
              <a href="">Read Full Article</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
