import React from 'react';
import { Row, Col } from 'antd';
import Setting from './components/Setting';
import PageManage from './components/PageManage';
import Phone from './phone';
import Control from './components/Control';
import AideLine from './components/AideLine';
import Resource from './components/Resource';
import Preview from './components/Preview';
import Header from './components/Header';
import CubePanel from './components/CubePanel';
import event from './core/event';

// 引入样式文件
import './index.scss';
import { PAGE_TYPE_H5, PAGE_TYPE_LONG } from '@lzshow/constants';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreview: false,
      height: window.innerHeight,
      type: props.type
    };
    this.eventHandler = event();
  }

  componentWillUnmount() {
    this.eventHandler();
  }

  showPreview = () => {
    this.setState({ showPreview: true });
  }

  hidePreview = () => {
    this.setState({ showPreview: false });
  }

  render() {
    const { showPreview, height, type } = this.state;
    const { data } = this.props;
    const isLongPage = type === PAGE_TYPE_LONG;

    return (
      <div className="home-container" style={{ height }}>
        <Header showPreview={this.showPreview} />
        <Row type="flex" justify="center" align="middle" className="home-edit-area m-t-48">
          <Col>
            <div className="phone-container">
              <div className="header" />
              <div className={isLongPage ? 'content long' : 'content'}>
                {this.state.type === PAGE_TYPE_H5 && <CubePanel />}
                <div className="border-left" />
                <div className="border-right" />
                <Phone data={data} />
              </div>
              <AideLine />
              <Control />
              <div className="footer" />
            </div>
          </Col>
        </Row>
        <div className="style-setting-container">
          <Setting />
        </div>
        <div className="page-manage-container">
          <PageManage />
        </div>
        <Resource />
        {showPreview && (
        <Preview
          visible={showPreview}
          hidePreview={this.hidePreview}
        />
        )}
      </div>
    );
  }
}

export default Home;
