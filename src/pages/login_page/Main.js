import { LoginForm } from "./components/LoginForm"
import RecruitProcess from "./components/RecruitProcess"
import { useAsync } from "react-async"
import { get_recruit_info } from "./../../apis/get_recruit";
export const Login = () => {
    const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });

    if (isLoading) return "Loading...";
    if (error) return `Something went wrong: ${error.message}`;
    if (data) 

        return <>
            <RecruitProcess recruit_data={data}></RecruitProcess>
            <LoginForm state={data.process}></LoginForm>
        </>
} 