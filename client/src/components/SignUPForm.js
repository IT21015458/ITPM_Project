import SignUPFormCSS from '../Styles/SignUPForm.module.css'

function SignUPForm(){
    return(
        <>
            <div id={SignUPFormCSS.maincontainer}>
                <div className={SignUPFormCSS.formContainer}>
                    <h1>Registration</h1>
                    <div>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputFirstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" placeholder='First Name'/>
                            </div>
                            <div class="col-md-6">
                                <label for="inputLastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" placeholder='Last Name'/>
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Username</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder='Username'/>
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder='Password'/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity"/>
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Province</label>
                                <select id="inputState" class="form-select">
                                    <option selected>North Central</option>
                                    <option>Nothern</option>
                                    <option>Southern</option>
                                    <option>Western</option>
                                    <option>Eastern</option>
                                    <option>Central</option>
                                    <option>Uva</option>
                                    <option>Sabaragamuwa</option>
                                    <option>North Western</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/>
                            </div>
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                <input type="file" class="form-control" id="inputGroupFile01"/>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUPForm;