import React from "react";
import { useState } from "react";
import './Form.css';

function Form(props){
    const [isOpen, setIsOpen] = useState(false);
    const [selected, isSelected] = useState("+91");

    function handleDropDownOpen(){
        setIsOpen(true);
        console.log(isOpen);
    }

    function handleSelection(value){
        isSelected(value);
        setIsOpen(false);
    }

    return (
        <div className="form">
            <div className="join-now-form">
                <div className="head-content">
                    <h2>{props.heading}</h2>
                    <p>{props.subHeading}</p>
                </div>
                <div className="form-content">
                    <div className="form-field">
                        <div className="name">
                            <label>Full Name*</label>
                            <input type="text" placeholder="Enter Full Name" required/>
                        </div>

                        <div className="email">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Enter Email Address" required/>
                        </div>
                        
                        <div className="phone">
                            <label>Phone number*</label>
                            <select name="country-code" className="country-code">
                                <option value="91">+91</option>
                                <option value="355">+355</option>
                                <option value="213">+213</option>
                                <option value="376">+376</option>
                                <option value="244">+244</option>
                                <option value="672">+672</option>
                                <option value="54">+54</option>
                            </select>
                            <input type="tel" placeholder="000 000 0000" required/>
                        </div>

                        { props.showMessage && <div className="message">
                            <label>Message</label>
                            <textarea rows="4" cols={4}></textarea>
                        </div> }

                        {props.showReminder && <div className="reminderMethod">
                            <label>Preferred Reminder Method*</label>
                            <div className="methods">
                                <div>
                                    <input type="radio" name="radio" value="Whatsapp"/>
                                    <label>Whatsapp</label>
                                </div>
                                <div>
                                    <input type="radio" name="radio" value="Email" />
                                    <label>Email</label>
                                </div>
                                <div>
                                    <input type="radio" name="radio" value="Both"/>
                                    <label>Both</label>
                                </div>
                            </div>
                            </div>}
                    </div>
                    <div className="action-buttons">
                        <input type="submit" className="submit-botton" value={props.button}/>
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <label>I authorize EEC to send notifications <u>via SMS/RCS/WhatsApp.</u></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;