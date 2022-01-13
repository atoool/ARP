//import cognito user pool
import {CognitoUserPool} from "amazon-cognito-identity-js";

//export default

    const poolData = {
      UserPoolId : "ap-southeast-2_9MxkijGq6",
      ClientId : "6a6qnam5gbutmvj4j8gt1jcu07"
    };

export default new CognitoUserPool(poolData);