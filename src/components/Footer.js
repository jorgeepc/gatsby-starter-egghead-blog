import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub, LinkedIn } from './Social'
import { rhythm } from '../lib/typography'
import Container from './Container'

const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      <div>
        <h2
          css={css`
            margin-bottom: ${rhythm(1)};
            margin-top: 0;
          `}
        >
          Contact
        </h2>

        <p>
          If you have an offer or just want to say hi, feel free to send me an
          email to{' '}
          <a href="mailto:jorge.esteban.padilla@gmail.com">
            jorge.esteban.padilla@gmail.com
          </a>
          .
        </p>
      </div>
      {!noSubscribeForm && (
        <div>
          <SubscribeForm />
          <br />
          <br />
        </div>
      )}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div>
          <Twitter />
          <GitHub />
          <LinkedIn />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
