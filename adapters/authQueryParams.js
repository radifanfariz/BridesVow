export const getAuthParams = (data, url = "http://localhost:1338", apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

    return {

        method: "post",
        url: `${url}/graphql`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${apikey}`
        },
        data: {
            query: `
      mutation Login($input: UsersPermissionsLoginInput!){
        login(input:$input){
          jwt
          user{
            id
            username
            email
            confirmed
          }
        }
      }
        `,
            variables: {
                input: data
            }
        }
    }
}


export const getLoginSessionParams = (data, url = "http://localhost:3000") => {

    return {

        method: "post",
        url: `${url}/api/auth/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data: data

    }
}

export const loginSessionDestroyParams = {

    method: "post",
    url: `/api/auth/logout`,
    headers: {
        "Content-Type": "application/json",
    }
}

export const getDataUndanganIdByOrderIdParams = (orderId, url = "http://localhost:1338", apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`
    },
    data: {
      query: `
      query findDataUndangan($orderId: String!) {
        dataUndangans(filters: { OrderID: { contains: $orderId } }) {
          data {
            id
            attributes{
              OrderID
              Slug
            }
          }
        }
      }
      
      
      
        `,
      variables: {
        orderId: orderId
      }
    }
  }
}