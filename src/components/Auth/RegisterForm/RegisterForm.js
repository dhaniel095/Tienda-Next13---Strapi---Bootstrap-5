import { Form } from "semantic-ui-react"
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.form"
import { Auth } from "@/api"

const authCtrl = new Auth();

export function RegisterForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authCtrl.register(formValue);
                console.log("todo ok");
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (



        <Form onSubmit={formik.handleSubmit}>

            <Form.Group widths="equal">
                <Form.Input name="firstname" type="text" placeholder="Nombres" value={formik.values.firstname} onChange={formik.handleChange} error={formik.errors.firstname} />
                <Form.Input name="lastname" type="text" placeholder="Apellidos" value={formik.values.lastname} onChange={formik.handleChange} error={formik.errors.lastname} />
            </Form.Group>

            <Form.Group widths="equal">
                <Form.Input name="username" type="text" placeholder="Nombre de Usuario" value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username} />
                <Form.Input name="email" type="text" placeholder="Correo Electronico" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} />
            </Form.Group>
            
            <Form.Group widths="equal">
            <Form.Input name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />
            </Form.Group>

            <Form.Button type="submit" fluid loading={formik.isSubmitting}> Registrate </Form.Button>
        </Form>

    )
}
