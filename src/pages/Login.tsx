import {useState} from "react";
import {supabase} from "../supabaseClient.tsx";
import { useForm } from "react-hook-form";
import {useSnackbar} from "notistack";
import {useDispatch} from "react-redux";
import {signInAction} from "../features/actions/Auth.ts";

const Login = () => {
    const [errorMessage, setError] = useState<string>("");
    const [successfullySent, setSuccessfullySent] = useState<boolean>(false);
    const {
        register ,
        handleSubmit,
        formState: { errors } }
        = useForm();

    const { enqueueSnackbar } = useSnackbar()

    const dispatch = useDispatch();

    async function onSubmit(values: { email: string; password: string; }) {
        const { data, error } = await supabase.auth.signInWithOtp({
            email: values.email,
        }
        )
        if (error){
            setError(error.message)
            console.log(error,data)
            enqueueSnackbar(errorMessage);
        }else if (data) {
            setSuccessfullySent(true);
            enqueueSnackbar('email has been sent to address');
        }
    }
    async function signUpWithGoogle(){

        await signInAction(dispatch);
     }
    return (
        <div>
            <div>
            <h1>Sign in </h1>
                <div>
                    <div>
                        <div>
                            <button onClick={signUpWithGoogle}> sign Up with Google</button>

                        </div>
                        <div>
                            <button > sign Up with apple</button>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <p className='input-label'>Enter Email to retrieve Magic link; </p>
                                <input
                                    id="email"
                                    type="text"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    })}
                                />
                                {errors.email &&
                                    <span className='error '>
                                        {errors.email.type === 'required' && 'This field is required'}
                                        {errors.email.type === 'pattern' && 'Email is Invalid'}
                                    </span>}

                                {successfullySent &&
                                    <p>Verification has been sent please click link in email </p>}
                                <input type="submit" className='submit' value='Send Message'/>
                            </form>

                        </div>

                        </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Login;