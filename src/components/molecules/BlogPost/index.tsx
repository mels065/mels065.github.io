import * as React from "react";

import "./style.scss";

interface IBlogPostProps {
    title: string;
    author: string;
    date: Date;
    content: string[];
}
function BlogPost({ title, author, date, content }: IBlogPostProps) {
    function renderContent() {
        return content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ));
    }

    return (
        <article className="blog-post">
            <div className="header">
                <h3>{title}</h3>
                <div className="details">
                    <small className="author">{author}</small>
                    <small className="date">{date.toDateString()}</small>
                </div>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </article>
    );
}

export default BlogPost;
