import React, { useState, useEffect } from 'react';
import { Button, ThemeProvider, GlobalStyle, Modal, TaskBar, List } from '@react95/core';
import styled, { createGlobalStyle } from 'styled-components'
import '@react95/icons/icons.css';
import { backgroundColor } from '@xstyled/system';
import { Icon } from '@react95/core'


const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center;
`;

const MyApp = () => {
  const [isMounted, setMounted] = useState(false);
  const [first, toggleFirst] = useState(false);
  const [second, toggleSecond] = useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }



  return (
    <ThemeProvider>
      <GlobalStyle />
      <>
        {first && (
          <Modal
            icon="windows_explorer_32x32_4bit"
            title="Windows Explorer"
            closeModal={closeFirst}
            width="300"
            height="200"
          />
        )}

        {second && (
          <Modal
            defaultPosition={{ x: 50, y: 50 }}
            width="300"
            height="200"
            icon="reader_closed_32x32_4bit"
            title="Local Disk (C:)"
            closeModal={closeSecond}
          />
        )}

        <TaskBar
          list={
            <List>
              <List.Item
                icon="reader_closed_32x32_4bit"
                onClick={() => toggleSecond(true)}
              >
                Local Disk (C:)
            </List.Item>
              <List.Item
                icon="windows_explorer_32x32_4bit"
                onClick={() => {
                  toggleFirst(true);
                }}
              >
                Windows Explorer
            </List.Item>
            </List>
          }
        />
      </>
      <h1
        style={{
          textAlign: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: '0px',
        }}>
        <a href="https://www.youtube.com/watch?v=_mUvG6x53VM">420</a>
      </h1>
    </ThemeProvider >
  );
}

export default MyApp;