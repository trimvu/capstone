import axios from 'axios'
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Forms = ({ userID }) => {
    const [textValue, setTextValue] = useState("")
    // const [trueValue, setTrueValue] = useState(true)
    // const [falseValue, setFalseValue] = useState(false)
    const [scamValue, setScamValue] = useState(null)
    // const userID = useSelector((state) => state)

    // console.log(userID)

    let {number} = useParams()
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        // setUserInput(textValue)
        // console.log("handle submit data: ", userID, number, scamValue, textValue)

        const submitScam = await axios.post('/reportedNumbers', {
            userID,
            Number : number,
            isScam : scamValue,
            Comments : textValue
        }) 

        // console.log(submitScam)

        if(submitScam.status === 200){
            alert("Your information was submitted!")
            window.location.reload();
        }
        else {
            alert("Sorry! Your information was NOT submitted.")
        }
    
    }

    
    
    return (
    <>

    <h2 className="card-title d-flex justify-content-center">REPORT FORM</h2>

    <div className="card mb-4">

        <div className="card-body d-flex justify-content-center">

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Phone number: <br />
                        <input type="text" value={number} />
                    </label>
                    <br />
                    <label>Is this phone number a scam? <br />
                        <input type="radio" name="is_scam" value={true} onChange={(e) => setScamValue(e.target.value)} />
                        <label htmlFor="Yes">Yes</label> &nbsp; 
                        <input type="radio" name="is_scam" value={false} onChange={(e) => setScamValue(e.target.value)} />
                        <label htmlFor="No">No</label>
                    </label>
                    <br />
                    <label>Explain: <br />
                        <textarea type="text" rows={10} cols={60} value={textValue} onChange={(e)=> setTextValue(e.target.value)} maxLength="1000" required />
                        <div id="counter"></div>
                    </label>
                    <br />
                    <input type="submit" />
                </fieldset>
            </form>

        </div>
    </div>
    
    </>
    )
}

export default Forms