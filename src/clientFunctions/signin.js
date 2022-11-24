import axios from "axios";

export const signin=async (data)=>{
    try {
        console.log(data);
        const res = await axios({
            method:'POST',
            url:"http://127.0.0.1:3001/api/users/signup",
            data
        })

        if (res.data.status === 'success') {
            alert( 'SIGNIN  successfully!');
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        }
    } catch (e) {
        console.log(e);
        alert(e.response.data.message)
        console.log(e.response.data.message)
    }

}

