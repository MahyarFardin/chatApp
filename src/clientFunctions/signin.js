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
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
			return 200
        }
    } catch (e) {
        console.log(e);
        console.log(e.response.data.message)
		return 401
    }

}

