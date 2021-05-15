import React, { useContext, useState } from "react"; 
import Alert, { EAlertClass } from "../../components/Alert";
import { AppContext } from "../../context/AppContext";
import { IRegisterDto } from "../../dto/IRegisterDto";
import { IdentityService } from "../../services/identity.service";

const Register = () => {

    const appState = useContext(AppContext);

    let registerDto: IRegisterDto = {
        firstName: '',
        lastName: '',
        idNumber: '',
        email: '',
        password: ''
    };

    const [registerData, setRegisterData] = useState(registerDto);
    const [alertMessage, setAlertMessage] = useState('');

    const registerClicked = async (e: Event) => {
        console.log("Register DTO: ", registerData);
        e.preventDefault();
        if (
            registerData.firstName === '' 
            || registerData.lastName === '' 
            || registerData.idNumber === '' 
            || registerData.email === '' 
            || registerData.password === '') {
            setAlertMessage('Please fill in all of the fields!');
        };

        /* if (registerData.password !== registerData.confirmPassword) {
            setAlertMessage('Password and confirmed password don´t match!');
        } */

        setAlertMessage('');
        let response = await IdentityService.Register('account/register', registerData);
        if (!response.ok) {
            setAlertMessage(response.messages![0]);
        } else {
            setAlertMessage('');
            appState.setAuthInfo(response.data!.jwt, response.data!.firstname, response.data!.lastname);
        }
    }

    return (

        <>
            <h1>Loo konto</h1>
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={(e) => registerClicked(e.nativeEvent)}>
                        <h4>Registreeri end kasutajaks.</h4>
                        <hr />
                        <Alert show={alertMessage !== ''} message={alertMessage} alertClass={EAlertClass.Danger} />
                        <div className="form-group">
                            <label htmlFor="Input_FirstName">Eesnimi</label>
                            <input value={registerData.firstName} onChange={e => setRegisterData({ ...registerData, firstName: e.target.value })} className="form-control" type="text" id="Input_FirstName" name="Input.FirstName" autoComplete="firstname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Input_LastName">Perekonnanimi</label>
                            <input value={registerData.lastName} onChange={e => setRegisterData({ ...registerData, lastName: e.target.value })} className="form-control" type="text" id="Input_LastName" name="Input.LastName" autoComplete="lastname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Input_IdNumber">Isikukood</label>
                            <input value={registerData.idNumber} onChange={e => setRegisterData({ ...registerData, idNumber: e.target.value })} className="form-control" type="text" id="Input_IdNumber" name="Input.IdNumber" autoComplete="id-number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Input_Email">E-posti aadress</label>
                            <input value={registerData.email} onChange={e => setRegisterData({ ...registerData, email: e.target.value })} className="form-control" type="email" id="Input_Email" name="Input.Email" placeholder="user@example.com"  autoComplete="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Input_Password">Salasõna</label>
                            <input value={registerData.password} onChange={e => setRegisterData({ ...registerData, password: e.target.value })} className="form-control" type="password" id="Input_Password" name="Input.Password" />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="Input_ConfirmPassword">Kinnita salasõna</label>
                            <input value={registerData.confirmPassword} onChange={e => setRegisterData({ ...registerData, confirmPassword: e.target.value })} className="form-control" type="password" id="Input_ConfirmPassword" name="Input.ConfirmPassword" />
                        </div> */}
                        <div className="form-group">
                                <button onClick={(e) => registerClicked(e.nativeEvent)} type="submit" className="btn btn-primary">Loo konto</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

};

export default Register;