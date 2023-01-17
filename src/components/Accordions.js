import React from 'react'
import Accordion from './Accordion'

const Accordions = ({
    data,
    username
}) => {
    const [newUsername, setNewUsername] = React.useState(username)
    React.useEffect(() => {
        setNewUsername(username)
    }, [data])
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "1rem",
            width: "100%",
            marginTop: "1rem",
            fontSize: "0.9rem",
        }}>
            <span style={{
                color: "#565656",
            }}>
                {data ? `Showing users for "${newUsername}"` : null}
            </span>
            {data?.items?.map((item, _) => (
                <Accordion item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Accordions