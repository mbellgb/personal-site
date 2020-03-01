import React from "react";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
import styles from "./layout.module.css";

import {
  Title,
  BlockQuote,
  Body,
  Link,
  SubHeader,
  Header,
  ListItem
} from "../typography";

const mdxMapping = {
  h1: Title,
  h2: Header,
  h3: SubHeader,
  p: Body,
  a: ({ children, href }) => <Link to={href}>{children}</Link>,
  blockquote: BlockQuote,
  li: ListItem
};

const Page = ({
  children,
  title = "",
  match = {},
  padding = false,
  className = ""
}) => {
  return (
    <article
      className={[styles.page, className, padding && styles.paddedPage].join(
        " "
      )}
    >
      <Helmet>
        <title>{title && `${title} -`} Matt Bell</title>
      </Helmet>
      {title && <Title>{title}</Title>}
      <MDXProvider components={mdxMapping}>{children}</MDXProvider>
    </article>
  );
};

export default Page;
