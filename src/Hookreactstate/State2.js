import { useState } from "react";
import "./State2.css";

export default function State02() {
    const [quote1, setQuote1] = useState(false);

    return(
        <div>
        <button className="Button2" onClick={() => setQuote1(!quote1)}>
        {quote1 ? "Close Quote" : "Open Quote"}
      </button>
            {quote1 && (
        <>
          <div className="titleWrapper">
            <p className="title">"Dihina karena jelek? Ingat ngga dia ada kenapa gitu manis apa tapi kopi ada ya kan ... Mikir!"</p>
          </div>
        </>
      )}
      </div>
        
        
    )
}