import React from 'react'
import { Button, Card, List, Tabs, Tooltip } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'

const { TabPane } = Tabs
const tabKeys = {
    Streams: 'stream',
    Videos: 'videos',
    Clips: 'clips',
}

const processUrl = (url) => url
    .replace('%{height}', '252')
    .replace('%{width}', '480')
    .replace('{height}', '252')
    .replace('{width}', '480')

const renderCardTitle = (item, loggedIn, favs = []) => {
    const title = `${item.broadcaster_name} - ${item.title}`;
    
    
    const isFav = favs.find((fav) => fav.id === item.id);
    
    
    return (
        <>
        {
            loggedIn &&
            <Tooltip title={isFav ? 'Remove from favorite list' : 'Add to favorite list'}>
            <Button shape='circle' icon={isFav ? <StarFilled /> : <StarOutlined />}  />
            </Tooltip>
        }
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: 450 }}>
            <Tooltip title={title}>
            <span>{title}</span>
            </Tooltip>
        </div>
        </>
    )
}

const renderCardGrid = (data, loggedIn, favs) => {
    return (
        <List
            grid={{
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item style={{ marginRight: '20px' }}>
                    <Card title={renderCardTitle(item, loggedIn, favs)}
                    >
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img
                                alt="Placeholder"
                                src={processUrl(item.thumbnail_url)}
                            />
                        </a>
                    </Card>
                </List.Item>
            )}
        />
    )
}

const Home = (( resources, loggedIn, favoriteItems ) => {
    const { VIDEO, STREAM, CLIP } = resources
    const { VIDEO: favVideos, STREAM: favStreams, CLIP: favClips } = favoriteItems

    return (
        <Tabs defaultActiveKey={tabKeys.Streams}>
            <TabPane tab='Streams' key={tabKeys.Streams} forceRender={true}>
                {renderCardGrid(STREAM, loggedIn, favStreams)}
            </TabPane>
            <TabPane tab='Videos' key={tabKeys.Videos} forceRender={true}>
                {renderCardGrid(VIDEO, loggedIn, favVideos)}
            </TabPane>
            <TabPane tab='Clips' key={tabKeys.Clips} forceRender={true}>
                {renderCardGrid(CLIP, loggedIn, favClips)}
            </TabPane>
        </Tabs>
    )
})

export default Home