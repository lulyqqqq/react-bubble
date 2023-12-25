import {Button, Card, Divider, Flex, Input, Space, Table} from "antd";
import "./index.scss"
import {CheckOutlined, CloseOutlined, PlusOutlined, RedoOutlined} from '@ant-design/icons';

const Bubble = () => {

    const columns = [
        {
            title: '#',
            dataIndex: 'id'
        },
        {
            title: '待办事项',
            dataIndex: 'content'
        },
        {
            title: '更新时间',
            dataIndex: 'updateTime'
        },
        {
            title: '操作',
            render: data => {
                return (
                    <Space size="middle">
                        <Button type="primary" shape="circle"
                                icon={data.status === 0 ? <CheckOutlined/> : <RedoOutlined/>}/>
                        <Button type="primary" danger shape="circle" icon={<CloseOutlined/>}/>
                    </Space>
                )
            }
        }
    ]
    const cover = [
        {
            id: 1,
            content: "测试内容",
            updateTime:"2023-12-21 19:00",
            status: 1,
        },
        {
            id: 2,
            content: "要操作",
            updateTime:"2023-12-21 19:00",
            status: 0,
        },
        {
            id: 1,
            content: "测试内容",
            updateTime:"2023-12-21 19:00",
            status: 1,
        },
        {
            id: 2,
            content: "要操作",
            updateTime:"2023-12-21 19:00",
            status: 0,
        },
        {
            id: 1,
            content: "测试内容",
            updateTime:"2023-12-21 19:00",
            status: 1,
        },
        {
            id: 2,
            content: "要操作",
            updateTime:"2023-12-21 19:00",
            status: 0,
        },
        {
            id: 1,
            content: "测试内容",
            updateTime:"2023-12-21 19:00",
            status: 1,
        },
        {
            id: 2,
            content: "要操作",
            updateTime:"2023-12-21 19:00",
            status: 0,
        },
        {
            id: 1,
            content: "测试内容",
            updateTime:"2023-12-21 19:00",
            status: 1,
        },
        {
            id: 2,
            content: "要操作",
            updateTime:"2023-12-21 19:00",
            status: 0,
        },
        {
            id: 1,
            content: "测试内容",
            updateTime:"2023-12-21 19:00",
            status: 1,
        },
        {
            id: 2,
            content: "要操作",
            updateTime:"2023-12-21 19:00",
            status: 0,
        },
    ]
    const rowClassName = (record) => {
        return record.status === 1 ? 'deleted-row' : '';
    }
    return (
        <div className="bubble">
            <Flex justify="center" align="center" vertical>
                <div className="bubble-div">
                    <Divider><h1>Bubble记事本练习</h1></Divider>
                    <h3>{}的记事本</h3>
                    <Card className="bubble-card" style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
                        <Space size="middle">
                            <Input className="bubble-input" placeholder="请输入待办事项..." />
                            <Button type="primary" shape="circle" icon={<PlusOutlined />}/>
                        </Space>
                        <Table className="bubble-table" columns={columns} dataSource={cover} pagination={false} rowClassName={rowClassName}/>
                    </Card>
                </div>
            </Flex>
        </div>
    )
}
export default Bubble