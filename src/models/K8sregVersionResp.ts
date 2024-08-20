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
 * @interface K8sregVersionResp
 */
export interface K8sregVersionResp {
    /**
     *
     * @type {number}
     * @memberof K8sregVersionResp
     */
    bugfix?: number;
    /**
     *
     * @type {number}
     * @memberof K8sregVersionResp
     */
    major: number;
    /**
     *
     * @type {number}
     * @memberof K8sregVersionResp
     */
    minor: number;
}

/**
 * Check if a given object implements the K8sregVersionResp interface.
 */
export function instanceOfK8sregVersionResp(value: object): value is K8sregVersionResp {
    if (!("major" in value) || value["major"] === undefined) return false;
    if (!("minor" in value) || value["minor"] === undefined) return false;
    return true;
}

export function K8sregVersionRespFromJSON(json: any): K8sregVersionResp {
    return K8sregVersionRespFromJSONTyped(json, false);
}

export function K8sregVersionRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sregVersionResp {
    if (json == null) {
        return json;
    }
    return {
        bugfix: json["bugfix"] == null ? undefined : json["bugfix"],
        major: json["major"],
        minor: json["minor"],
    };
}

export function K8sregVersionRespToJSON(value?: K8sregVersionResp | null): any {
    if (value == null) {
        return value;
    }
    return {
        bugfix: value["bugfix"],
        major: value["major"],
        minor: value["minor"],
    };
}
