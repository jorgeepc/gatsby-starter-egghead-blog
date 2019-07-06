import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from './Theming'
import ThemeToggler from './ThemeToggler'

import Container from './Container'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
        /* position: absolute; */
        width: 100%;
        flex-shrink: 0;
        padding: 20px 0;
        background: ${theme.colors.headerBg};
        background-image: ${theme.themeName === 'default'
          ? 'linear-gradient(270deg, #13547a 0%, #80d0c7 100%)'
          : 'none'};
        background-position: center right, center left;
        background-repeat: no-repeat;
        background-size: contain;
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: white;
              &:hover {
                color: white;
                text-decoration: none;
              }
            `}
          >
            {siteTitle}
          </Link>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.white};
                padding: 8px 10px;
                border-radius: 3px;
                & + a {
                  margin-left: 10px;
                }
                &:hover,
                &:focus {
                  background: rgba(19, 84, 122, 0.7);
                }
              }
              .active {
                background: rgba(19, 84, 122, 0.9);
              }
            `}
          >
            <Link
              to="/blog"
              activeClassName="active"
              aria-label="View blog page"
            >
              Blog
            </Link>
            <Link
              to="/about"
              activeClassName="active"
              aria-label="View about page"
            >
              About
            </Link>
            <ThemeToggler
              css={{}}
              toggleTheme={theme.toggleTheme}
              themeName={theme.themeName}
            />
          </div>
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
