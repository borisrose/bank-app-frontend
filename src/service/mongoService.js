const URL = "http://localhost:3001/api/v1/user"

export default {


    post: async(endpoint, data, token) => {

        //login
        if(!token){

            const response = await fetch(`${URL}/${endpoint}`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            return await response.json()
       


        }

        //updating and getting something with token
        if(token){

            const response = await fetch(`${URL}/${endpoint}`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify(data)
            })
            return await response.json()
       

        }
       
    },

    get : async(endpoint,token) => {

        if(!token){

            return
        }

        if(token){

            const response = await fetch(`${URL}/${endpoint}`, {

                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                },
            })
            return await response.json()

        }


    },

    put : async(endpoint,data,token) => {

        if(token){

            console.log('token in put service', data, token)
            const response = await fetch(`${URL}/${endpoint}`, {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify(data)
            })
            return await response.json()
       

        }


    }



}