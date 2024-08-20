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
 * @interface ModelsDetection
 */
export interface ModelsDetection {
    /**
     *
     * @type {string}
     * @memberof ModelsDetection
     */
    description: string;
    /**
     *
     * @type {object}
     * @memberof ModelsDetection
     */
    details: object;
    /**
     *
     * @type {string}
     * @memberof ModelsDetection
     */
    hash: string;
    /**
     *
     * @type {string}
     * @memberof ModelsDetection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ModelsDetection
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ModelsDetection
     */
    path: string;
    /**
     *
     * @type {string}
     * @memberof ModelsDetection
     */
    remediation: string;
    /**
     *
     * @type {string}
     * @memberof ModelsDetection
     */
    severity: string;
    /**
     *
     * @type {string}
     * @memberof ModelsDetection
     */
    title: string;
    /**
     *
     * @type {number}
     * @memberof ModelsDetection
     */
    type: number;
}

/**
 * Check if a given object implements the ModelsDetection interface.
 */
export function instanceOfModelsDetection(value: object): value is ModelsDetection {
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("details" in value) || value["details"] === undefined) return false;
    if (!("hash" in value) || value["hash"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("path" in value) || value["path"] === undefined) return false;
    if (!("remediation" in value) || value["remediation"] === undefined) return false;
    if (!("severity" in value) || value["severity"] === undefined) return false;
    if (!("title" in value) || value["title"] === undefined) return false;
    if (!("type" in value) || value["type"] === undefined) return false;
    return true;
}

export function ModelsDetectionFromJSON(json: any): ModelsDetection {
    return ModelsDetectionFromJSONTyped(json, false);
}

export function ModelsDetectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsDetection {
    if (json == null) {
        return json;
    }
    return {
        description: json["description"],
        details: json["details"],
        hash: json["hash"],
        id: json["id"],
        name: json["name"],
        path: json["path"],
        remediation: json["remediation"],
        severity: json["severity"],
        title: json["title"],
        type: json["type"],
    };
}

export function ModelsDetectionToJSON(value?: ModelsDetection | null): any {
    if (value == null) {
        return value;
    }
    return {
        description: value["description"],
        details: value["details"],
        hash: value["hash"],
        id: value["id"],
        name: value["name"],
        path: value["path"],
        remediation: value["remediation"],
        severity: value["severity"],
        title: value["title"],
        type: value["type"],
    };
}
