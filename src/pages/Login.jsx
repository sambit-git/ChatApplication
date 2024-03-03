import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import { login } from "../services/auth.services";

import bg from "../assets/bg.svg";
import { useEffect, useState } from "react";
import ErrorModal from "../components/modals/ErrorModal";

const LoginPage = () => {
  const actionData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const [loginError, setLoginError] = useState(false);

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.success === false) {
      console.log("Reason: ", actionData.message);
      setLoginError(true);
    } else if (actionData?.success === true) {
      navigate("/");
    }
  }, [navigate, actionData]);

  return (
    <div className="">
      {loginError && <ErrorModal message={actionData.message} />}
      <div className="">
        <img src={bg} height="500" />
        <a href="https://storyset.com/social-media">
          Social media illustrations by Storyset
        </a>
      </div>
      <div className="">
        <Form method="POST">
          <p>Welcome to ChitChat</p>
          <input type="text" name="username" />
          <input type="text" name="password" />
          <a href="">forgot password?</a>
          <button>{isSubmitting ? "Signing In..." : "Sign In"}</button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

export async function action({ request, params }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const response = await login(username, password);
  return response;
}
