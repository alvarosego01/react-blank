
import { Navigate, Route, Routes } from "react-router-dom"
// import { useAuthStore } from "../../core/store";
import { FC, useEffect, useState } from "react";
import { HomePage } from "./HomePage";

export const Public_routes: FC = () => {

    const [isMounted, setisMounted] = useState(false)

    // const {
    //     state: {
    //         status
    //     },
    //     emit_checkAuthToken
    // } = useAuthStore();

    useEffect(() => {
        if (isMounted === false) return;
        // emit_checkAuthToken();
    }, [isMounted]);

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <Routes>
            {/* {
                (status === 'not-authenticated' || status === 'checking') && (
                    <>
                        <Route path='login' element={<LoginPage />} />
                        <Route path='register' element={<RegisterPage />} />
                    </>
                )
            } */}
            <Route path='' index element={<HomePage />} />

            {/* <Route path='user/:id' element={<UserProfilePage />} /> */}

            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
    )

}
