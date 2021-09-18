import { useState } from "react";

export default function State02() {
    const [quote1, setQuote1] = useState(false);

    return(
        <div>
        <button className="Button" onClick={() => setQuote1(!quote1)}>
        {quote1 ? "Close Quote" : "Open Quote"}
      </button>
            {quote1 && (
        <>
          <div className="titleWrapper">
            <p className="title">Yes</p>
          </div>
        </>
      )}
      </div>
        
        
    )
}