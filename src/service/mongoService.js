const URL = "http://localhost:3001/api/v1/user"

export default {


    post: async(endpoint, data) => {

        const response = await fetch(`${URL}/${endpoint}`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return await response.json()
   
    },


    login: async() => {

        console.log("in login in MongoService")

        try {
            console.log("in try in login in MongoService")
        }
        catch (e) {
            console.log(e)
        }
    },

    editProfile: async() => {

        console.log("in editProfile in MongoService")

        try {
            console.log("in try in editProfile in MongoService")
        }
        catch (e) {
            console.log(e)
        }



    }


}