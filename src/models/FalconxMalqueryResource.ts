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
 * @interface FalconxMalqueryResource
 */
export interface FalconxMalqueryResource {
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryResource
     */
    family?: string;
    /**
     *
     * @type {number}
     * @memberof FalconxMalqueryResource
     */
    fileSize?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryResource
     */
    fileType?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryResource
     */
    firstSeenTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryResource
     */
    label?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryResource
     */
    md5?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryResource
     */
    sha1?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxMalqueryResource
     */
    sha256?: string;
}

/**
 * Check if a given object implements the FalconxMalqueryResource interface.
 */
export function instanceOfFalconxMalqueryResource(value: object): value is FalconxMalqueryResource {
    return true;
}

export function FalconxMalqueryResourceFromJSON(json: any): FalconxMalqueryResource {
    return FalconxMalqueryResourceFromJSONTyped(json, false);
}

export function FalconxMalqueryResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxMalqueryResource {
    if (json == null) {
        return json;
    }
    return {
        family: json["family"] == null ? undefined : json["family"],
        fileSize: json["file_size"] == null ? undefined : json["file_size"],
        fileType: json["file_type"] == null ? undefined : json["file_type"],
        firstSeenTimestamp: json["first_seen_timestamp"] == null ? undefined : json["first_seen_timestamp"],
        label: json["label"] == null ? undefined : json["label"],
        md5: json["md5"] == null ? undefined : json["md5"],
        sha1: json["sha1"] == null ? undefined : json["sha1"],
        sha256: json["sha256"] == null ? undefined : json["sha256"],
    };
}

export function FalconxMalqueryResourceToJSON(value?: FalconxMalqueryResource | null): any {
    if (value == null) {
        return value;
    }
    return {
        family: value["family"],
        file_size: value["fileSize"],
        file_type: value["fileType"],
        first_seen_timestamp: value["firstSeenTimestamp"],
        label: value["label"],
        md5: value["md5"],
        sha1: value["sha1"],
        sha256: value["sha256"],
    };
}
