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
 * @interface TypesSonatypeMetadata
 */
export interface TypesSonatypeMetadata {
    /**
     *
     * @type {string}
     * @memberof TypesSonatypeMetadata
     */
    cVEId?: string;
    /**
     *
     * @type {string}
     * @memberof TypesSonatypeMetadata
     */
    applicationPublicId?: string;
    /**
     *
     * @type {string}
     * @memberof TypesSonatypeMetadata
     */
    componentNameVersion?: string;
    /**
     *
     * @type {string}
     * @memberof TypesSonatypeMetadata
     */
    iqServerUrl?: string;
}

/**
 * Check if a given object implements the TypesSonatypeMetadata interface.
 */
export function instanceOfTypesSonatypeMetadata(value: object): value is TypesSonatypeMetadata {
    return true;
}

export function TypesSonatypeMetadataFromJSON(json: any): TypesSonatypeMetadata {
    return TypesSonatypeMetadataFromJSONTyped(json, false);
}

export function TypesSonatypeMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesSonatypeMetadata {
    if (json == null) {
        return json;
    }
    return {
        cVEId: json["CVEId"] == null ? undefined : json["CVEId"],
        applicationPublicId: json["applicationPublicId"] == null ? undefined : json["applicationPublicId"],
        componentNameVersion: json["componentNameVersion"] == null ? undefined : json["componentNameVersion"],
        iqServerUrl: json["iqServerUrl"] == null ? undefined : json["iqServerUrl"],
    };
}

export function TypesSonatypeMetadataToJSON(value?: TypesSonatypeMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        CVEId: value["cVEId"],
        applicationPublicId: value["applicationPublicId"],
        componentNameVersion: value["componentNameVersion"],
        iqServerUrl: value["iqServerUrl"],
    };
}
