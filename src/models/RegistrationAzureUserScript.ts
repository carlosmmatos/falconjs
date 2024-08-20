/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and examples, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation).     To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`.    Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface RegistrationAzureUserScript
 */
export interface RegistrationAzureUserScript {
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureUserScript
     */
    bash?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof RegistrationAzureUserScript
     */
    serviceAccountPublicKeys: Array<string>;
}

/**
 * Check if a given object implements the RegistrationAzureUserScript interface.
 */
export function instanceOfRegistrationAzureUserScript(value: object): value is RegistrationAzureUserScript {
    if (!("serviceAccountPublicKeys" in value) || value["serviceAccountPublicKeys"] === undefined) return false;
    return true;
}

export function RegistrationAzureUserScriptFromJSON(json: any): RegistrationAzureUserScript {
    return RegistrationAzureUserScriptFromJSONTyped(json, false);
}

export function RegistrationAzureUserScriptFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationAzureUserScript {
    if (json == null) {
        return json;
    }
    return {
        bash: json["bash"] == null ? undefined : json["bash"],
        serviceAccountPublicKeys: json["service_account_public_keys"],
    };
}

export function RegistrationAzureUserScriptToJSON(value?: RegistrationAzureUserScript | null): any {
    if (value == null) {
        return value;
    }
    return {
        bash: value["bash"],
        service_account_public_keys: value["serviceAccountPublicKeys"],
    };
}
