// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
import './App.css';
import { Flex, Divider, Tag, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
function App() {
    // const [time, setTime] = useState({
    //     task: '',
    //     date: '',
    //     frontend: '',
    //     backend: ''
    // });
    // useEffect(() => {
    //     fetch('/time').then((res) => res.json().then((time) => {
    //         setTime({
    //             task: time.Task,
    //             date: time.Date,
    //             frontend: time.Frontend,
    //             backend: time.Backend,
    //         });
    //     }));
    // }, []);
    const items = [
        {
          key: 'download',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              下载PDF
            </a>
          ),
        },
        {
            key: 'view',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                查看PDF
              </a>
            ),
        },
      ];
    return (
        <div>
            <Divider orientation="left" variant="dotted" style={{
                borderColor: '#FD841F',
            }}><Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>A Review on Variable-Order Fractional Differential Equations: Mathematical Foundations, Physical Models, Numerical Methods and Applications</Divider>
            <div>
                <Flex gap="small" wrap>
                    <Tag bordered={false} color="volcano">Fractional</Tag>
                    <Tag bordered={false} color="volcano">Review</Tag>
                </Flex>
                <div>This paper</div>
                <div>Cited</div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default App;