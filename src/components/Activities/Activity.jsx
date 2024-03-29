import React from 'react';
import Content from '../Content';
import Announcement from '../Announcement';


const ActivityWrapper = ({ children, ...other }) => <div {...other}>{children} </div>

export const Activity = ({title, date, content, url, PageContent = Content, excerpt}) => (
  <Announcement
    className="activity"
    title={title}
    content={content}
    url={url}
    date={date}
    PageContent={PageContent}
    excerpt={excerpt}
    Wrapper={ActivityWrapper}
  />
);

export default Activity;