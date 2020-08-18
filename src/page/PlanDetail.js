import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu, Card, Descriptions, Badge, Rate } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PlanDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "test this text",
            isInEditMode: false
        }

    }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.refs.theTextInput.value
        })
    }

    renderEditView = () => {
        return <div className="App">
            <div className="App-display">
                <br />
                <p>PLAN DETAIL</p>
                <br />
                <div className="site-card-wrapper" style={{ width: '100%' }}>
                    <Row gutter={24}>
                        <Col span={6} />
                        <Col span={12}>
                            <Card bordered={false} cover={
                                <img
                                    alt="example"
                                    src="https://images.squarespace-cdn.com/content/v1/57bce87346c3c4e52ea65ffc/1509883974225-CNFSSIBL4QT5G3HMLM5T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/The-Best-Chiang-Mai-Night-Markets.jpg?format=1500w"
                                />
                            }>
                                <br />
                                <Descriptions bordered
                                    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                    <Descriptions.Item label="8:00 am">

                                        <div>
                                            <input type="text"
                                                defaultValue={this.state.value}
                                                ref="theTextInput" ></input>
                                            <Button type="default" onClick={this.changeEditMode}>Cancel</Button>
                                            <Button type="primary" onClick={this.updateComponentValue}>Update</Button>
                                        </div></Descriptions.Item>
                                    <Descriptions.Item label="9:00 am"></Descriptions.Item>
                                    <Descriptions.Item label="10:00 am"></Descriptions.Item>

                                </Descriptions>

                            </Card>
                        </Col>
                        <Col span={4} />

                    </Row>
                </div>
            </div>
        </div>


    }

    renderDefaultView = () => {
        return <div className="App">
            <div className="App-display">
                <br />
                <p>PLAN DETAIL</p>
                <br />
                <div className="site-card-wrapper" style={{ width: '100%' }}>
                    <Row gutter={24}>
                        <Col span={6} />
                        <Col span={12}>
                            <Card bordered={false} cover={
                                <img
                                    alt="example"
                                    src="https://images.squarespace-cdn.com/content/v1/57bce87346c3c4e52ea65ffc/1509883974225-CNFSSIBL4QT5G3HMLM5T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/The-Best-Chiang-Mai-Night-Markets.jpg?format=1500w"
                                />
                            }>
                                <br />
                                <Descriptions bordered
                                    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                    <Descriptions.Item label="8:00 am">
                                        <div >                                           
                                            {this.state.value}  <Button onClick={this.changeEditMode}>Edit</Button>
                                            </div></Descriptions.Item>
                                    <Descriptions.Item label="9:00 am"></Descriptions.Item>
                                    <Descriptions.Item label="10:00 am"></Descriptions.Item>

                                </Descriptions>

                            </Card>
                        </Col>
                        <Col span={4} />

                    </Row>
                </div>
            </div>
        </div>
    }

    render() {
        return (this.state.isInEditMode ?

            this.renderEditView() :
            this.renderDefaultView()

        )
    }
}

export default PlanDetail;