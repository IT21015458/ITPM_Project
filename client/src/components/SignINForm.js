import SignINForm from '../Styles/SignINForm.module.css'
import SignIN from '../images/SignINr.png'

function SignUPForm(){
    return(
        <>
            <div className={SignINForm.mainContainer}>
                <div className={SignINForm.formContainer}>
                    <div className={SignINForm.imageContainer}>
                        <img src={SignIN} className={SignINForm.formImage} alt="..."/>
                    </div>
                    <div className={SignINForm.formDetails}>
                        <form>
                            <div class="mb-3">
                                <h1 className="mb-4">Sign in</h1>
                                <label for="exampleInputEmail1" class="form-label">Username</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUPForm;