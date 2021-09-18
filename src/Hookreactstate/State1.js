import { useState } from "react";


export default function State01() {
    const [user, setUser] = useState("");
    const [nim, setNim] = useState("");
    const [password, setPassword] = useState("");

    

    return(
        <div className="container">
            <div className="titleWrapper">
            <p className="title">input with useState</p>
            </div>
            <div className="inputWrapper">
                <div>
                    <input
                    placeholder="name"
                    size="50"
                    value={user}
                    onChange={(event) => setUser(event.target.value)}
                    />
                </div>
                <div>
                    <input
                    placeholder="NIM"
                    size="50"
                    value={nim}
                    onChange={(event) => setNim(event.target.value)}
                    />
                </div>
                <div>
                    <div>
                        <input
                        placeholder="password"
                        size="50"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}