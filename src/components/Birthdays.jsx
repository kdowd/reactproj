
import People from "../data";
import "../main.css";

 

function Birthdays(){

    return (
      <>
        <div>{People.length} birthdays</div>
        {People.length >= 99 ? <h1>WOW</h1>: null}
        <div className="people">
          {People.map((item) => (
            <>
              <div className="person">
                <span>
                  {item.name} born on {item.date}: <a href={item.url} >More</a>
                </span>
              </div>
            </>
          ))}
        </div>
      </>
    );
 
}

export default Birthdays;
