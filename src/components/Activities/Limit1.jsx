import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Activities } from './';

const ActivitiesWithQuery = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "activity"}}}, limit: 1) {
          nodes {
            html
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={data => (<Activities title={props.title} activities={
      data.allMarkdownRemark.nodes.map(node => 
        ({ 
          content: node.html,
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          url: node.fields.slug
        })
      )} 
    />)}
  />
);

export default ActivitiesWithQuery;