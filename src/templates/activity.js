import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { Activity } from '../components/Activities';

export const ActivitiesTemplate = ({
  title,
  content,
  date,
  url,
  PageContent = Content,
}) => (
  <Activity
    title={title}
    content={content}
    date={date}
    url={url}
    PageContent={PageContent}
  />
);

ActivitiesTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
};

const Activities = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <ActivitiesTemplate
        PageContent={HTMLContent}
        content={html}
        date={frontmatter.date}
        title={frontmatter.title}
      />
    </Layout>
  );
};

Activities.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
      fields: PropTypes.object,
    }),
  }),
};

export default Activities;

export const pageQuery = graphql`
  query ActivitiesTemplate($id: String!) {
    markdownRemark(id: { eq: $id },frontmatter: { templateKey: { eq: "activity" } }) {
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
`;
