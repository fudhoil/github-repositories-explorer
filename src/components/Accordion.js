import React from 'react'

const Accordion = ({
    item
}) => {
    const [isActive, setIsActive] = React.useState(false)
    const [repos, setRepos] = React.useState(null)

    React.useEffect(() => {
        if (isActive) {
            fetch(item.repos_url)
                .then(res => res.json())
                .then(data => { setRepos(data) })
        }
    }, [isActive, item.repos_url])

    return (
        <div key={item.id} style={{
            display: "flex",
            flexDirection: "column",
            width: "100%"
        }}>
            <div
                onClick={() => setIsActive(!isActive)}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    cursor: "pointer",
                    backgroundColor: "#f2f2f2",
                    fontSize: "0.9rem",
                }}
            >
                <div>{item.login}</div>
                <div>{isActive ? <img src="/arrow-up.png" alt="arrow-up" style={{ width: "1rem" }} /> : <img src="/arrow-down.png" alt="arrow-down" style={{ width: "1rem" }} />}</div>
            </div>
            {isActive && <div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    overflow: "auto",
                    padding: "1rem 0 1rem 1rem",
                }}>
                    <div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {repos?.map((repo, index) => (<div key={repo.id} style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "start",
                                gap: "1rem",
                                padding: "1rem",
                                margin: "0 0 0 1rem",
                                cursor: "pointer",
                                backgroundColor: "#e0e0e0",
                                marginBottom: "1rem",
                                overflow: "auto",
                            }}>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                }}>
                                    <div style={{
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                    }}>{repo.name}</div>
                                    <div style={{
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        gap: "0.7rem",
                                        display: "flex",
                                        alignItems: "start",
                                    }}>{repo.stargazers_count} <img src="/star.png" alt="star" style={{
                                        width: "1rem",
                                    }} /></div>
                                </div>
                                <div>
                                    <div>{repo.description}</div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Accordion