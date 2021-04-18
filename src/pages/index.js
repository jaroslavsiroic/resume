import React, { useState, useEffect } from 'react';
import { Button, ThemeProvider, GlobalStyle, Modal, TaskBar, List } from '@react95/core';
import { createGlobalStyle } from 'styled-components'
import '@react95/icons/icons.css';


const MyApp = () => {
  const [first, toggleFirst] = useState(false);
  const [second, toggleSecond] = useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);
  // useEffect(() => {
  //   set
  //   return () => {
  //     cleanup
  //   }
  // }, [])
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
    </ThemeProvider>
  );
}

export default MyApp;