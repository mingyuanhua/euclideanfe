
import { layout } from "antd";

const { Header } = Layout

function PageHeader({ loggedIn, signoutOnClick, signinOnSuccess }) {
    return (
        <Header>
            <Row justify='space-between'>
                <Col>
                    {'Favorites'}
                </Col>
                <Col>
                    {loggedIn && <Button shape="round" onClick={signoutOnClick}>Logout</Button>}
                    {!loggedIn && (
                        <>
                            <Login onSuccess={signinOnSuccess} />
                            <Register />
                        </>
                    )}
                </Col>
            </Row>
        </Header>
    )
}

export default PageHeader