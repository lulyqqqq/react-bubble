import {Button, Card, Divider, Flex, Input, message, Space, Table} from "antd";
import "./index.scss"
import {CheckOutlined, CloseOutlined, PlusOutlined, RedoOutlined} from '@ant-design/icons';
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfo} from "../../store/modules/user";
import {addBubbleApi, delBubbleApi, getBubbleListApi, updateBubbleApi} from "../../apis/bubble";

const Bubble = () => {
    const [bubbleList, setBubbleList] = useState([])
    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            render: (text, record, index) => index + 1
        },
        {
            title: '待办事项',
            dataIndex: 'content'
        },
        {
            title: '更新时间',
            dataIndex: 'time'
        },
        {
            title: '操作',
            render: data => {
                return (
                    <Space size="middle">
                        <Button type="primary" shape="circle"
                                onClick={() => updateBubble(data)}
                                icon={data.status === 0 ? <CheckOutlined/> : <RedoOutlined/>}/>
                        <Button type="primary"
                                onClick={() => delBubble(data.id)}
                                danger shape="circle" icon={<CloseOutlined/>}/>
                    </Space>
                )
            }
        }
    ]
    const rowClassName = (record) => {
        return record.status === 1 ? 'deleted-row' : '';
    }
    const dispatch = useDispatch();

    // 触发个人用户信息
    useEffect(() => {
        const getUserInfo = async () => {
            dispatch(fetchUserInfo())
        }
        getUserInfo()
    }, [dispatch]);
    // 使用useSelector获取store中的数据
    const userInfo = useSelector(state => state.user.userInfo)

    // 获取列表信息
    const getBubbleList = async () => {
        const res = await getBubbleListApi(userInfo.id)
        setBubbleList(res.data.bubbleList)
    }
    // 页面刷新渲染列表数据
    useEffect(() => {
        getBubbleList()
    }, [userInfo.id]);

    const [inputValue, setInputValue] = useState(""); // 新增输入框的值状态
    const addBubble = async () => {
        const reqData = {
            content: inputValue,
            status: 0,
            userId: userInfo.id
        }
        const res = await addBubbleApi(reqData)
        if (res.code === 200) {
            setInputValue(""); // 清空输入框的值
            await getBubbleList();
            message.success("新增成功")
        } else {
            message.error("新增失败")
        }
    }
    const delBubble = async (id) => {
        const res = await delBubbleApi(id)
        if (res.code === 200) {
            await getBubbleList()
            message.success("删除成功")
        } else {
            message.error("删除成功")
        }
    }

    const updateBubble = async (data) => {
        console.log(data)
        let status = 0
        if (data.status === 0) {
            status = 1
        } else if (data.status === 1) {
            status = 0
        }
        console.log(status)
        const res = await updateBubbleApi(data.id, status)
        if (res.code === 200) {
            await getBubbleList()
            message.success("更新成功")
        } else {
            message.error("更新成功")
        }
    }
    return (
        <div className="bubble">
            <Flex justify="center" align="center" vertical>
                <div className="bubble-div">
                    <Divider><h1>Bubble记事本练习</h1></Divider>
                    <h3>{userInfo.name}的记事本</h3>
                    <Card className="bubble-card" style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
                        <Space size="middle">
                            <Input className="bubble-input" value={inputValue}
                                   onChange={(e) => setInputValue(e.target.value)} placeholder="请输入待办事项..."/>
                            <Button type="primary" shape="circle" onClick={addBubble} icon={<PlusOutlined/>}/>
                        </Space>
                        <Table rowKey={(record) => record.id} className="bubble-table" columns={columns}
                               dataSource={bubbleList} pagination={false}
                               rowClassName={rowClassName}/>
                    </Card>
                </div>
            </Flex>
        </div>
    )
}
export default Bubble