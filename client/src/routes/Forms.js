import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const Forms = ({setUserInput}) => {
    const [textValue, setTextValue] = useState("")
    const [trueValue, setTrueValue] = useState(true)
    const [falseValue, setFalseValue] = useState(false)
    const [user, setUser] = useState("")

    let {number} = useParams()
    
    const handleSubmit = (e) => {

        e.preventDefault();
        setUserInput(textValue)
    
    }

    
    
    return (
    <>
    
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label>Phone number: <br />
                <input type="text" value={number} />
            </label>
            <br />
            <label>Is this phone number a scam? <br />
                <input type="radio" name="is_scam" value={trueValue} onChange={(e) => setTrueValue(e.target.value)} />
                <label htmlFor="Yes">Yes</label> &nbsp; 
                <input type="radio" name="is_scam" value={falseValue} onChange={(e) => setFalseValue(e.target.value)} />
                <label htmlFor="No">No</label>
            </label>
            <br />
            <label>What was this phone call about? <br />
                <textarea type="text" rows={10} cols={60} value={textValue} onChange={(e)=> setTextValue(e.target.value)} maxLength="1000" required />
                <div id="counter"></div>
            </label>
            <br />
            <input type="submit" />
        </fieldset>
    </form>
    </>
    )
}

export default Forms