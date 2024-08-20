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
 * @interface K8sassetsNodeEnrichmentData
 */
export interface K8sassetsNodeEnrichmentData {
    /**
     *
     * @type {number}
     * @memberof K8sassetsNodeEnrichmentData
     */
    containerCount: number;
    /**
     *
     * @type {number}
     * @memberof K8sassetsNodeEnrichmentData
     */
    podCount: number;
}

/**
 * Check if a given object implements the K8sassetsNodeEnrichmentData interface.
 */
export function instanceOfK8sassetsNodeEnrichmentData(value: object): value is K8sassetsNodeEnrichmentData {
    if (!("containerCount" in value) || value["containerCount"] === undefined) return false;
    if (!("podCount" in value) || value["podCount"] === undefined) return false;
    return true;
}

export function K8sassetsNodeEnrichmentDataFromJSON(json: any): K8sassetsNodeEnrichmentData {
    return K8sassetsNodeEnrichmentDataFromJSONTyped(json, false);
}

export function K8sassetsNodeEnrichmentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sassetsNodeEnrichmentData {
    if (json == null) {
        return json;
    }
    return {
        containerCount: json["container_count"],
        podCount: json["pod_count"],
    };
}

export function K8sassetsNodeEnrichmentDataToJSON(value?: K8sassetsNodeEnrichmentData | null): any {
    if (value == null) {
        return value;
    }
    return {
        container_count: value["containerCount"],
        pod_count: value["podCount"],
    };
}
