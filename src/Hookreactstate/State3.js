import { useState } from "react";

export default function State03() {
    const [quote2, setQuote2] = useState(false);

    return(
        <div>
      
      <button className="Button" onClick={() => setQuote2(!quote2)}>
        {quote2 ? "Close Quote" : "Open Quote"}
      </button>
            {quote2 && (
        <>
          <div className="titleWrapper">
            <p className="title">No</p>
          </div>
        </>
      )}
      </div>
        
        
    )
}