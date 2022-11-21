import React from 'react'
import { Button } from 'react';
import './GithubButtona.css'
import GitHubButton from 'react-github-btn'


export default function GithubButtona(props) {
    

    return (
        <>
            
            <div className="malakia">
            
              <GitHubButton 
              href="https://github.com/pgpavlides" 
            
              data-color-scheme="no-preference: dark_dimmed; light: dark; dark: dark_dimmed;" 
              data-size="large" 
              aria-label="Follow @pgpavlides on GitHub">Follow @pgpavlides
              
              
              </GitHubButton>
              </div>

            
        </>
    )
}
