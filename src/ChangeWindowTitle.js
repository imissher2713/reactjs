import { useEffect } from "react";

function ChangeWindowTitle(){
    useEffect(() => {
        document.title = "Nguyễn Đăng Nam - B22DCCN557";
    })
    return (
        <div>
            <h1>21/3/2025</h1>
        </div>
    )
}
export default ChangeWindowTitle