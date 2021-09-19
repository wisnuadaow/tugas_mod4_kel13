import { useState } from "react";
import "./State1.css";

export default function State01() {
    const [user, setUser] = useState("");
    const [nim, setNim] = useState("");
    const [password, setPassword] = useState("");

    

    return(
        <div className="container">
            <div className="titleWrapper">
            <p className="title1">TUGAS MODUL 4 KELOMPOK 13</p>
            </div>
            <div className="inputWrapper">
                <div>
                    <input
                    placeholder="Nama"
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
                        placeholder="Password"
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