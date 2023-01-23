const user=(user,action)=>
    {
        switch(action.type){
            case "Login":
                return(
                    state.loginUser(
                        name=user.name
                    )
                )
        }

    }