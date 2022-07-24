import React from "react";

function BlogContent(props) {
  console.log(props)
  if(!props.isPublished){
    return null;
  } else {
    
  
  return ( 
  // <div id="blog-content">{props.articleText}</div>;
 <div>
  <h1>{props.articleText}</h1>
  <p>{props.miuntesToRead} </p>
  </div>
  );
}}

export default BlogContent;
