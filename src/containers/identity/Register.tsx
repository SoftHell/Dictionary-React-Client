import React, { useContext, useState } from "react"; 
import { Redirect } from "react-router-dom";
import Alert, { EAlertClass } from "../../components/Alert";
import { AppContext } from "../../context/AppContext";
import { IRegisterDto } from "../../dto/IRegisterDto";
import { IdentityService } from "../../services/identity.service";

const Register = () => {

    const appState = useContext(AppContext);

    let registerDto: IRegisterDto = {
        email: '',
        password: ''
    };

    const [registerData, setRegisterData] = useState(registerDto);
    const [alertMessage, setAlertMessage] = useState('');

    const registerClicked = async (e: Event) => {
        console.log("Register DTO: ", registerData);
        e.preventDefault();
        if (
            registerData.email === '' 
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
            appState.setAuthInfo(response.data!.jwt, response.data!.email);
        }
    }

    return (

        <>
        { appState.jwt !== null ? <Redirect to="/" /> : null}
            <h1>Loo konto</h1>
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={(e) => registerClicked(e.nativeEvent)}>
                        <h4>Registreeri end kasutajaks.</h4>
                        <hr />
                        <Alert show={alertMessage !== ''} message={alertMessage} alertClass={EAlertClass.Danger} />
                        <div className="form-group">
                            <label htmlFor="Input_Email">E-posti aadress</label>
                            <input value={registerData.email} onChange={e => setRegisterData({ ...registerData, email: e.target.value })} className="form-control" type="email" id="Input_Email" name="Input.Email" placeholder="user@example.com"  autoComplete="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Input_Password">Salasõna</label>
                            <input value={registerData.password} onChange={e => setRegisterData({ ...registerData, password: e.target.value })} className="form-control" type="password" id="Input_Password" name="Input.Password" />
                        </div>
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