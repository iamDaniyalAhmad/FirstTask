import React from 'react'

const Form = () => {
    return (
        <div className="form-container">
            <div className="container">
                <div className="row forms">
                    <div className="col-lg-6">
                        <h6 className='main-heading'>Let's Talk About Your Project</h6>
                        <p className='para'>Do you have a project in mind, that you feel our approach would work well for? <br/><br/> We're always happy to discuss your project with you and put together a free proposal.</p>
                    </div>
                    <div className="col-lg-6 form-content">
                        <h6>Just fill out the form below to get started.</h6>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Company' />
                            </div>
                            <div class="mb-3">
                                <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone Number' />
                            </div>
                            <div class="mb-3">
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <textarea  class="form-control" id="w3review" name="w3review" rows="4" cols="61" placeholder='Enter your text'>
                                </textarea>
                            </div>
                            <div class="mb-3">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label mx-2" for="exampleCheck1">I agree to have my information stored Privacy Policy.</label>
                            </div>

                            <button type="submit" class="btn form-button">Send your message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form


