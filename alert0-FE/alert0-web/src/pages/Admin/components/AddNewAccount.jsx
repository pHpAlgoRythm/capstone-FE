import { useForm } from "react-hook-form";
import { isValidPassword, isValidEmail } from "../../../utils/validate";
import { TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText, Button } from "@mui/material";

const NewAccount = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <>
            <div>
                <form onSubmit={handleSubmit('function name sang imo nga logic mag submit diri butang')}>
                    <div className="flex flex-col gap-3 ">
                        <FormControl fullWidth error={Boolean(errors.role)}>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                labelId="role"
                                defaultValue=""
                                {...register('role', { required: 'Role is required' })}
                            >

                                <MenuItem value="responder">Responder</MenuItem>
                                <MenuItem value="driver">Driver</MenuItem>
                            </Select>
                            {errors.role && <FormHelperText>{errors.role.message}</FormHelperText>}
                        </FormControl>
                        <TextField
                            {...register('name', { required: 'Name is required' })}
                            label='Name'
                            variant="outlined"
                            fullWidth
                            type="text"
                            placeholder="johndoe"
                        />

                        <TextField
                            {...register('email', {
                                required: 'Email is required',
                                validate: isValidEmail
                            })}
                            label='Email'
                            variant="outlined"
                            fullWidth
                            type="email"
                            placeholder="johndoe@gmail.com"
                        />
                        {errors.email && <p>{errors.email.message}</p>}

                        <TextField
                            {...register('password', {
                                required: 'Password is required',
                                validate: isValidPassword
                            })}
                            label='Password'
                            variant="outlined"
                            fullWidth
                            type="password"
                            placeholder="******"
                        />
                        {errors.password && <p>{errors.password.message}</p>}





                        <Button variant="contained">add</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewAccount;
