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
import type { K8sregAzureSubEntity } from "./K8sregAzureSubEntity";
import { K8sregAzureSubEntityFromJSON, K8sregAzureSubEntityFromJSONTyped, K8sregAzureSubEntityToJSON } from "./K8sregAzureSubEntity";

/**
 *
 * @export
 * @interface K8sregCreateAzureSubReq
 */
export interface K8sregCreateAzureSubReq {
    /**
     *
     * @type {Array<K8sregAzureSubEntity>}
     * @memberof K8sregCreateAzureSubReq
     */
    resources: Array<K8sregAzureSubEntity>;
}

/**
 * Check if a given object implements the K8sregCreateAzureSubReq interface.
 */
export function instanceOfK8sregCreateAzureSubReq(value: object): value is K8sregCreateAzureSubReq {
    if (!("resources" in value) || value["resources"] === undefined) return false;
    return true;
}

export function K8sregCreateAzureSubReqFromJSON(json: any): K8sregCreateAzureSubReq {
    return K8sregCreateAzureSubReqFromJSONTyped(json, false);
}

export function K8sregCreateAzureSubReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sregCreateAzureSubReq {
    if (json == null) {
        return json;
    }
    return {
        resources: (json["resources"] as Array<any>).map(K8sregAzureSubEntityFromJSON),
    };
}

export function K8sregCreateAzureSubReqToJSON(value?: K8sregCreateAzureSubReq | null): any {
    if (value == null) {
        return value;
    }
    return {
        resources: (value["resources"] as Array<any>).map(K8sregAzureSubEntityToJSON),
    };
}
